import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navigation, whatsappUrl } from '../data/company'
import { Brand } from './Brand'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)
    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled || menuOpen ? 'site-header--solid' : ''}`}>
      <div className="site-header__inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a
          className="header-cta"
          href={whatsappUrl('menu')}
          target="_blank"
          rel="noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp"
        >
          <MessageCircle size={18} aria-hidden="true" />
          <span>Solicitar orçamento</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Navegação mobile">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
        </nav>
        <a className="button button--primary button--wide" href={whatsappUrl('menu mobile')} target="_blank" rel="noreferrer" onClick={closeMenu}>
          <MessageCircle size={20} aria-hidden="true" />
          Falar pelo WhatsApp
        </a>
      </div>
    </header>
  )
}
