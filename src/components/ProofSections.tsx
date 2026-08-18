import { BadgeCheck, Image, Quote, Star } from 'lucide-react'
import { portfolioSlots, reviews, reviewSummary } from '../data/company'
import { Reveal } from './Reveal'
import { SectionIntro } from './SectionIntro'

export function Portfolio() {
  return (
    <section className="section portfolio" id="trabalhos" aria-labelledby="portfolio-title">
      <div className="shell">
        <SectionIntro
          id="portfolio-title"
          eyebrow="Trabalhos realizados"
          title="Resultados que você vai poder ver de perto."
          description="A galeria já está preparada para receber fotos reais de serviços, antes e depois e detalhes de acabamento."
        />
        <div className="portfolio__grid">
          {portfolioSlots.map((item, index) => (
            <Reveal key={item.category} delay={index * 80} className={index === 0 ? 'portfolio__featured' : ''}>
              <figure className="portfolio-item">
                <div className="portfolio-item__media-slot">
                  <div className="portfolio-item__slats" aria-hidden="true" />
                  <Image size={24} aria-hidden="true" />
                  <span>Espaço para foto real</span>
                </div>
                <figcaption>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="content-disclaimer">Imagens reais e descrições dos serviços serão adicionadas após curadoria e autorização.</p>
      </div>
    </section>
  )
}

export function Testimonials() {
  const formatRating = reviewSummary.rating.toFixed(1).replace('.', ',')

  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="shell">
        <div className="testimonials__topline">
          <SectionIntro
            id="testimonials-title"
            eyebrow="Avaliações"
            title="Quem já chamou a Canaã recomenda."
            description="Relatos públicos de clientes sobre atendimento, agilidade e qualidade do serviço."
          />
          <div className="reviews-summary" aria-label={`Nota ${formatRating} de 5, com ${reviewSummary.count} avaliações no Google`}>
            <div className="reviews-summary__score">
              <strong>{formatRating}</strong>
              <span>de 5</span>
            </div>
            <div className="reviews-summary__details">
              <div className="reviews-summary__stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p><strong>{reviewSummary.count}</strong> avaliações no {reviewSummary.source}</p>
            </div>
          </div>
        </div>
        <div className="testimonials__grid">
          {reviews.map((review, index) => {
            const initials = review.name
              .split(' ')
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join('')
              .toUpperCase()

            return (
              <Reveal key={review.name} delay={index * 65}>
                <article className="review-card">
                  <div className="review-card__meta">
                    <div className="review-card__stars" aria-label={`${review.rating} de 5 estrelas`}>
                      {Array.from({ length: review.rating }, (_, star) => <Star key={star} size={16} fill="currentColor" aria-hidden="true" />)}
                    </div>
                    <span className="review-card__source"><BadgeCheck size={15} aria-hidden="true" /> Avaliação no Google</span>
                  </div>
                  <Quote className="review-card__quote" size={25} aria-hidden="true" />
                  <blockquote><p>{review.text}</p></blockquote>
                  <footer>
                    <span className="review-card__initials" aria-hidden="true">{initials}</span>
                    <cite>{review.name}</cite>
                  </footer>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
