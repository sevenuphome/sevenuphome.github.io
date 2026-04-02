import SectionWrapper from './ui/SectionWrapper'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <SectionWrapper className="section-padding">
      <span className="eyebrow">+ SKILLS</span>
      <h2 className="section-title" style={{ marginTop: 8 }}>Technical Expertise</h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-card">
            <h3 className="skill-card__category">{group.category}</h3>
            <ul className="skill-card__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
