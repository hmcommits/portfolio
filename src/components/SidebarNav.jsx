import useActiveSection, { SECTIONS } from '../hooks/useActiveSection'
import styles from './SidebarNav.module.css'

const ICONS = {
  hero: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" />
    </svg>
  ),
  projects: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" />
    </svg>
  ),
  techstack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 8-5 4 5 4M16 8l5 4-5 4M13 5l-2 14" />
    </svg>
  ),
  achievements: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4a1 1 0 0 0-1 1c0 2.2 1.8 4 4 4M17 6h3a1 1 0 0 1 1 1c0 2.2-1.8 4-4 4" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
}

/* Desktop vertical icon navigation — fixed to the left edge (hidden ≤1024px, see MobileNav) */
export default function SidebarNav() {
  const activeSection = useActiveSection()

  return (
    <nav className={styles.sidebar} aria-label="Section navigation">
      <div className={styles.navPill}>
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`${styles.item} ${activeSection === section.id ? styles.active : ''}`}
            aria-label={section.label}
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            <span className={styles.icon}>{ICONS[section.id]}</span>
            <span className={styles.tooltip}>{section.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
