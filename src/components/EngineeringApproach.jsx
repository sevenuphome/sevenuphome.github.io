import SectionWrapper from './ui/SectionWrapper'
import { engineeringApproach } from '../data/content'

export default function EngineeringApproach() {
  return (
    <SectionWrapper className="section-padding">
      <span className="eyebrow">+ ENGINEERING APPROACH</span>

      <div className="approach-cards">
        {engineeringApproach.principles.map((p) => (
          <div key={p.title} className="approach-card">
            <h3 className="approach-card__title">{p.title}</h3>
            <p className="approach-card__desc">{p.description}</p>
          </div>
        ))}
      </div>

      <p className="approach-quote">"{engineeringApproach.quote}"</p>
    </SectionWrapper>
  )
}
