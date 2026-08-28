import useActiveSection, { SECTIONS } from '../hooks/useActiveSection'
import styles from './SidebarNav.module.css'

/* Desktop dot navigation — fixed to the left edge (hidden ≤1024px, see MobileNav) */
export default function SidebarNav() {
  const activeSection = useActiveSection()

  return (
    <nav className={styles.sidebar} aria-label="Section navigation">
      <div className={styles.sidebarLine} />

      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`${styles.sidebarDot} ${activeSection === section.id ? styles.active : ''}`}
          aria-label={section.label}
          aria-current={activeSection === section.id ? 'true' : undefined}
        >
          <span className={styles.tooltip}>{section.label}</span>
        </a>
      ))}
    </nav>
  )
}
