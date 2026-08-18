import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company, navigation, whatsappUrl } from '../data/company'
import { Brand } from './Brand'

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__lines" aria-hidden="true" />
      <div className="shell final-cta__inner">
        <p className="eyebrow">Vamos resolver?</p>
        <h2 id="final-cta-title">Explique o problema da sua veneziana.</h2>
        <p>Envie uma mensagem, fotos ou um vídeo curto. A conversa começa por aí.</p>
        <a className="button button--primary button--large" href={whatsappUrl('chamada final')} target="_blank" rel="noreferrer">
          <MessageCircle size={21} aria-hidden="true" />
          Solicitar atendimento pelo WhatsApp
        </a>
      </div>
    </section>
  )
}

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsappUrl('botão flutuante')} target="_blank" rel="noreferrer" aria-label="Abrir atendimento no WhatsApp">
      <MessageCircle size={24} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="shell footer__main">
        <div className="footer__brand">
          <Brand />
          <p>Manutenção, reparos e soluções para venezianas residenciais.</p>
        </div>
        <div className="footer__column">
          <h2>Navegue</h2>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer__column footer__contact">
          <h2>Contato</h2>
          <a href={`tel:${company.phoneNumber}`}><Phone size={17} aria-hidden="true" /> {company.phoneDisplay}</a>
          <a href={whatsappUrl('rodapé')} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> WhatsApp: {company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`}><Mail size={17} aria-hidden="true" /> {company.email}</a>
          <span><MapPin size={17} aria-hidden="true" /> {company.location}</span>
        </div>
      </div>
      <div className="shell footer__bottom">
        <p>© {year} {company.name}. Todos os direitos reservados.</p>
        <p className="footer__pending">Política de privacidade — adicionar antes da publicação</p>
        <a href={company.developerUrl} target="_blank" rel="noreferrer">Desenvolvido por {company.developerName} <ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
