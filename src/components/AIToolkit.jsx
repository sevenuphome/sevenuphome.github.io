import SectionWrapper from './ui/SectionWrapper'
import { aiToolkit } from '../data/content'

export default function AIToolkit() {
  return (
    <SectionWrapper className="section-padding">
      <span className="eyebrow">+ AI TOOLKIT</span>
      <h2 className="section-title" style={{ marginTop: 8 }}>
        Tools I Work With
      </h2>

      <div className="ai-toolkit-grid">
        {aiToolkit.map((group) => (
          <div key={group.category} className="ai-toolkit-card">
            <h3 className="ai-toolkit-card__category">{group.category}</h3>
            <ul className="ai-toolkit-card__list">
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
