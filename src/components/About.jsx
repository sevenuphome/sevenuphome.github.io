import SectionWrapper from './ui/SectionWrapper'
import { about } from '../data/content'

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--surface-secondary)' }}>
      <SectionWrapper className="about section-padding">
        <span className="eyebrow">+ ABOUT</span>
        <h2 className="about__statement">{about.statement}</h2>
        <p className="about__body">{about.body}</p>
      </SectionWrapper>
    </div>
  )
}
