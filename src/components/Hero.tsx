import { ArrowDown, House, MessageCircle, ShieldCheck, Wrench } from 'lucide-react'
import { whatsappUrl } from '../data/company'

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src="/images/hero-veneziana.webp"
        alt="Sala residencial com veneziana de enrolar integrada à janela e parcialmente fechada"
        width="1536"
        height="1024"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__light-lines" aria-hidden="true" />
      <div className="hero__content shell">
        <p className="hero__eyebrow">Manutenção e soluções para venezianas</p>
        <h1 id="hero-title">Sua veneziana voltou a dar trabalho?</h1>
        <p className="hero__lead">O problema pode ter solução sem precisar substituir tudo. Envie fotos e receba uma orientação inicial pelo WhatsApp.</p>
        <div className="hero__actions">
          <a className="button button--primary" href={whatsappUrl('hero')} target="_blank" rel="noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            Solicitar atendimento
          </a>
          <a className="button button--ghost" href="#problemas">
            Ver problemas atendidos
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <ul className="hero__trust" aria-label="Características do atendimento">
          <li><Wrench size={17} aria-hidden="true" /> Atendimento especializado</li>
          <li><House size={17} aria-hidden="true" /> Serviço residencial</li>
          <li><ShieldCheck size={17} aria-hidden="true" /> Orientação clara</li>
        </ul>
      </div>
      <a className="hero__scroll" href="#servicos" aria-label="Ir para a seção de serviços">
        <span>Conheça</span>
        <ArrowDown size={17} aria-hidden="true" />
      </a>
    </section>
  )
}
