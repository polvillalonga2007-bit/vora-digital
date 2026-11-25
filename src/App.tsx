import { Contact } from './sections/Contact'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Includes } from './sections/Includes'
import { Nav } from './sections/Nav'
import { Packs } from './sections/Packs'
import { Plans } from './sections/Plans'
import { Process } from './sections/Process'
import { Sectors } from './sections/Sectors'
import { Services } from './sections/Services'

// La pàgina és una pila de seccions independents. Per treure'n o moure'n una,
// canvia aquestes línies; els textos són a src/content.ts.
export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sectors />
        <Includes />
        <Process />
        <Plans />
        <Services />
        <Packs />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
