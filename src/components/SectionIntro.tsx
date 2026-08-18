type SectionIntroProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  inverse?: boolean
}

export function SectionIntro({ id, eyebrow, title, description, inverse = false }: SectionIntroProps) {
  return (
    <header className={`section-intro ${inverse ? 'section-intro--inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-intro__description">{description}</p>}
    </header>
  )
}
