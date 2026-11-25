import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin, type ViteDevServer } from 'vite'

type WorkerApp = { fetch: (request: Request, env: unknown) => Promise<Response> }

// The project has no Node typings, so the connect middleware is typed here.
type DevRequest = AsyncIterable<Uint8Array> & {
  url?: string
  method?: string
  headers: Record<string, string | string[] | undefined>
}
type DevResponse = {
  statusCode: number
  setHeader(name: string, value: string): void
  end(chunk?: Uint8Array): void
}

/**
 * Serves the Worker's /api routes from the Vite dev server.
 *
 * The Cloudflare plugin's dev mode forwards requests to workerd through an
 * undici dispatcher, and Bun's fetch ignores dispatchers
 * (https://github.com/oven-sh/bun/issues/39247), so `bun run dev` dies at
 * startup with ECONNREFUSED. Mounting the same Hono app here keeps dev working
 * under Bun; `vite build` still goes through the plugin, so the deployed
 * Worker runs on the real runtime.
 */
function workerApiDev(): Plugin {
  let app: Promise<WorkerApp> | undefined
  return {
    name: 'worker-api-dev',
    apply: 'serve',
    configureServer(server: ViteDevServer) {
      const middlewares = server.middlewares as unknown as {
        use(handler: (req: DevRequest, res: DevResponse, next: () => void) => void): void
      }
      middlewares.use((req, res, next) => {
        if (!req.url?.startsWith('/api/')) return next()
        void (async () => {
          app ??= server.ssrLoadModule('/src/worker/index.ts').then((mod) => mod.default as WorkerApp)
          const chunks: Uint8Array[] = []
          let body: Uint8Array | undefined
          if (req.method !== 'GET' && req.method !== 'HEAD') {
            for await (const chunk of req) chunks.push(chunk as Uint8Array)
            if (chunks.length > 0) {
              body = new Uint8Array(chunks.reduce((total, chunk) => total + chunk.byteLength, 0))
              let offset = 0
              for (const chunk of chunks) {
                body.set(chunk, offset)
                offset += chunk.byteLength
              }
            }
          }
          const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`)
          const request = new Request(url, {
            method: req.method,
            headers: req.headers as unknown as HeadersInit,
            body: body as unknown as BodyInit | undefined,
          })
          // Dev has no static-asset binding: Vite serves the site itself, so the
          // Worker only needs its API routes here.
          const response = await (
            await app
          ).fetch(request, { ASSETS: { fetch: () => new Response(null, { status: 404 }) } })
          res.statusCode = response.status
          response.headers.forEach((value, key) => res.setHeader(key, value))
          res.end(new Uint8Array(await response.arrayBuffer()))
        })()
      })
    },
  }
}

// En desenvolupament no hi ha postbuild, així que les pàgines legals encara no
// existeixen com a fitxers .html. Servim la closca de l'aplicació, igual que fa
// GitHub Pages amb els fitxers generats.
const legalSlugs = ['avis-legal', 'privacitat', 'cookies']
function legalPageDev(): Plugin {
  return {
    name: 'legal-pages-dev',
    apply: 'serve',
    configureServer(server: ViteDevServer) {
      const middlewares = server.middlewares as unknown as {
        use(handler: (req: DevRequest, res: DevResponse, next: () => void) => void): void
      }
      middlewares.use((req, _res, next) => {
        const last = (req.url ?? '').split('?')[0].split('/').filter(Boolean).pop() ?? ''
        if (legalSlugs.includes(last.replace(/\.html$/, ''))) req.url = '/index.html'
        next()
      })
    },
  }
}

// GitHub Pages serves project sites from /<repo>/, so the base path is
// configurable at build time. Locally and on Sites it stays '/'.
const buildBase =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.BASE_PATH ?? '/'

export default defineConfig(({ command }) => ({
  base: buildBase,
  plugins: [react(), tailwindcss(), legalPageDev(), command === 'build' ? cloudflare() : workerApiDev()],
  server: { port: 5173, strictPort: false },
}))
