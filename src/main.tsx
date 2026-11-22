import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import { legalPages } from './legal'
import { Legal } from './pages/Legal'
import './styles.css'

// El lloc és estàtic: a GitHub Pages cada pàgina legal té el seu propi HTML,
// però també resolem la ruta aquí perquè funcioni si s'hi arriba sense la barra
// final o des del servidor de desenvolupament.
const path = window.location.pathname
const base = import.meta.env.BASE_URL
const slug = (path.startsWith(base) ? path.slice(base.length) : path).replace(/^\/+|\/+$/g, '')
const page = legalPages.find((candidate) => candidate.slug === slug)

createRoot(document.getElementById('root')!).render(
  <StrictMode>{page ? <Legal page={page} /> : <App />}</StrictMode>,
)
