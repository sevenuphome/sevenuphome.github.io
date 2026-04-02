import SectionWrapper from './ui/SectionWrapper'
import { caseStudy } from '../data/content'

export default function CaseStudy() {
  return (
    <SectionWrapper className="section-padding">
      <span className="eyebrow">+ CASE STUDY</span>
      <h2 className="section-title" style={{ marginTop: 8 }}>
        {caseStudy.title}
      </h2>

      <div className="case-study__columns">
        <div className="case-study__col">
          <h3 className="case-study__label">Problem</h3>
          <p className="case-study__text">{caseStudy.problem}</p>
        </div>
        <div className="case-study__col">
          <h3 className="case-study__label">Solution</h3>
          <ul className="case-study__list">
            {caseStudy.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="case-study__label" style={{ marginTop: 24 }}>Result</h3>
          <ul className="case-study__list">
            {caseStudy.result.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
