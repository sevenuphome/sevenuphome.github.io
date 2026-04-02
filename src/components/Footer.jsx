import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <span className="footer__plus">+</span>
          <span className="footer__name">{profile.name}</span>
        </div>
        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer__divider" />
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with modern web technologies</span>
      </div>
    </footer>
  )
}
