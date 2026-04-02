import { motion } from 'framer-motion'
import { profile, coreFocus } from '../data/content'
import Badge from './ui/Badge'

export default function Hero() {
  return (
    <section className="hero section-padding">
      <motion.div
        className="hero__inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="hero__plus">+</span>

        <div className="hero__badge">
          <span className="hero__badge-dot" />
          <span>{profile.status}</span>
        </div>

        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--outline">Contact Me</a>
        </div>

        <div className="hero__tags">
          {coreFocus.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
