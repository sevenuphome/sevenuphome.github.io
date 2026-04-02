import { motion } from 'framer-motion'
import Badge from './Badge'

export default function ProjectCard({ title, description, tags, link, linkText }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__tags">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      <span className="project-card__link">{linkText || 'View Project'} →</span>
    </motion.a>
  )
}
