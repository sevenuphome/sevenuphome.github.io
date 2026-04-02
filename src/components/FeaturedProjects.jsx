import SectionWrapper from './ui/SectionWrapper'
import ProjectCard from './ui/ProjectCard'
import { projects } from '../data/content'

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="section-padding">
      <span className="eyebrow">+ FEATURED PROJECTS</span>
      <h2 className="section-title" style={{ marginTop: 8 }}>Selected Work</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
