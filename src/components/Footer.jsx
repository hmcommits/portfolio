import { BrandIcon } from '../data/icons'
import { SECTIONS } from '../hooks/useActiveSection'
import styles from './Footer.module.css'

const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/hmcommits' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-mayekar/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@harshmayekar6641' },
  { id: 'gmail', label: 'Email', href: 'mailto:hvpharsh0801@gmail.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.monogram} aria-hidden="true">HM</span>
          <div>
            <p className={styles.name}>Harsh Prakash Mayekar</p>
            <p className={styles.tagline}>Full-stack developer · AI product builder</p>
          </div>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          {SECTIONS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={styles.link}>{label}</a>
          ))}
        </nav>

        <div className={styles.socials}>
          {SOCIALS.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className={styles.socialBtn}
            >
              <BrandIcon name={id} />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p className={styles.credit}>
          Designed & built by Harsh Prakash Mayekar with <span className={styles.heart}>❤</span>
        </p>
        <p className={styles.stack}>React · Vite · Framer Motion</p>
        <a href="#hero" className={styles.backToTop} aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6" />
          </svg>
          Top
        </a>
      </div>
    </footer>
  )
}
