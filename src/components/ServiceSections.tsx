import { ArrowUpRight, Check, CircleAlert, MessageCircle } from 'lucide-react'
import { differentials, problems, processSteps, services, whatsappUrl } from '../data/company'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function Services() {
  return (
    <section className="section services" id="servicos" aria-labelledby="services-title">
      <div className="shell">
        <div className="section-heading-row">
          <SectionIntro
            id="services-title"
            eyebrow="Serviços"
            title="Cuidado técnico, do diagnóstico ao ajuste final."
            description="Esta é uma lista inicial de serviços para validação. A disponibilidade depende do modelo e da avaliação do caso."
          />
          <p className="validation-note"><span aria-hidden="true" /> Conteúdo inicial — confirmar serviços</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 55}>
              <article className="service-item">
                <span className="service-item__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowUpRight className="service-item__icon" size={22} aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Problems() {
  return (
    <section className="section problems" id="problemas" aria-labelledby="problems-title">
      <div className="shell problems__grid">
        <div className="problems__copy">
          <SectionIntro
            id="problems-title"
            eyebrow="O que está acontecendo?"
            title="Reconheceu algum destes sinais?"
            description="Um mecanismo simples pode apresentar sintomas diferentes. Identificar o que está acontecendo é o primeiro passo para evitar força, improvisos e novos danos."
            inverse
          />
          <a className="text-link text-link--light" href={whatsappUrl('problemas')} target="_blank" rel="noreferrer">
            <MessageCircle size={19} aria-hidden="true" />
            Enviar foto do problema
          </a>
        </div>
        <div className="problems__list">
          {problems.map((problem, index) => (
            <Reveal key={problem} delay={index * 50}>
              <div className="problem-row">
                <CircleAlert size={20} strokeWidth={1.7} aria-hidden="true" />
                <span>{problem}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="problems__slats" aria-hidden="true" />
    </section>
  )
}

export function Process() {
  return (
    <section className="section process" id="como-funciona" aria-labelledby="process-title">
      <div className="shell">
        <SectionIntro id="process-title" eyebrow="Como funciona" title="Quatro passos. Sem complicação." description="Você começa a conversa em poucos minutos e já sabe qual é o próximo passo." />
        <ol className="process__steps">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80}>
              <li>
                <span className="process__number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Differentials() {
  return (
    <section className="section differentials" aria-labelledby="differentials-title">
      <div className="shell differentials__grid">
        <div className="differentials__heading">
          <SectionIntro id="differentials-title" eyebrow="Nosso jeito de atender" title="A solução certa começa com atenção aos detalhes." />
          <div className="differentials__window" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
        <div className="differentials__list">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article>
                <Check size={21} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
