import { useState, useEffect } from 'react'

export const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

/* Tracks which section is currently in the reading band of the viewport. */
export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: '-30% 0px -50% 0px', threshold: 0 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}
