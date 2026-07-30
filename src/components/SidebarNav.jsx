import { useState, useEffect } from 'react'
import styles from './SidebarNav.module.css'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.sidebar} aria-label="Section Navigation">
      <div className={styles.sidebarLine} />
      
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`${styles.sidebarDot} ${activeSection === section.id ? styles.active : ''}`}
          aria-label={section.label}
        >
          <span className={styles.tooltip}>{section.label}</span>
        </a>
      ))}
    </nav>
  )
}
