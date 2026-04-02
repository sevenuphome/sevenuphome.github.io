import SectionWrapper from './ui/SectionWrapper'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <SectionWrapper className="section-padding">
      <span className="eyebrow">+ EXPERIENCE</span>
      <div className="exp-header">
        <h2 className="section-title" style={{ marginTop: 8 }}>Career</h2>
      </div>

      <div className="exp-card">
        <h3 className="exp-card__title">{experience.title}</h3>
        <span className="exp-card__company">{experience.company}</span>
        <ul className="exp-card__list">
          {experience.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
