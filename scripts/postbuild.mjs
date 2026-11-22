// Prepara dist/ després de `vite build`:
//  - treu fitxers que l'uploader de Sites refusa (ocults i mapes de codi)
//  - genera les pàgines legals com a fitxers HTML propis, amb títol,
//    descripció i Open Graph específics, reutilitzant el bundle compilat.
import { mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const dist = join(here, '..', 'dist')
const client = join(dist, 'client')
const SITE = 'https://polvillalonga2007-bit.github.io/vora-digital'

function clean(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (name.startsWith('.') || name.endsWith('.map')) {
      rmSync(path, { recursive: true, force: true })
      continue
    }
    if (statSync(path).isDirectory()) clean(path)
  }
}

clean(dist)

const pages = JSON.parse(readFileSync(join(here, '..', 'legal-pages.json'), 'utf8'))
const index = readFileSync(join(client, 'index.html'), 'utf8')

for (const page of pages) {
  const html = index
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${page.title} · Vora Digital</title>\n    <link rel="canonical" href="${SITE}/${page.slug}/" />`,
    )
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      `<meta name="description" content="${page.description}" />`,
    )
    .replace(/<meta\s+property="og:type"[^>]*>/, '<meta property="og:type" content="article" />')
    .replace(
      /<meta\s+property="og:title"[^>]*>/,
      `<meta property="og:title" content="${page.title} · Vora Digital" />`,
    )
    .replace(
      /<meta\s+property="og:description"[\s\S]*?\/>/,
      `<meta property="og:description" content="${page.description}" />`,
    )
    .replace(
      /<meta\s+property="og:url"[^>]*>/,
      `<meta property="og:url" content="${SITE}/${page.slug}/" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${page.title} · Vora Digital" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"[\s\S]*?\/>/,
      `<meta name="twitter:description" content="${page.description}" />`,
    )

  const target = join(client, page.slug)
  mkdirSync(target, { recursive: true })
  writeFileSync(join(target, 'index.html'), html)
}

console.log(`postbuild: ${pages.length} pàgines legals generades a ${client}`)
