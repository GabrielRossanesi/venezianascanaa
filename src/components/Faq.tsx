import { Plus } from 'lucide-react'
import { faqs } from '../data/company'
import { SectionIntro } from './SectionIntro'

export function Faq() {
  return (
    <section className="section faq" id="duvidas" aria-labelledby="faq-title">
      <div className="shell faq__grid">
        <div className="faq__heading">
          <SectionIntro id="faq-title" eyebrow="Perguntas frequentes" title="Antes de chamar, talvez sua dúvida esteja aqui." description="As respostas finais sobre políticas, regiões e prazos serão atualizadas após validação comercial." />
        </div>
        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <Plus size={21} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
