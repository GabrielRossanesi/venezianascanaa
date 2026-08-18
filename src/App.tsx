import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Differentials, Problems, Process, Services } from './components/ServiceSections'
import { Portfolio, Testimonials } from './components/ProofSections'
import { Faq } from './components/Faq'
import { FinalCta, Footer, WhatsAppFloat } from './components/Conversion'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Problems />
        <Process />
        <Differentials />
        <Portfolio />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
