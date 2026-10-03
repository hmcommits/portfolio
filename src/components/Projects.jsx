import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data/projects'
import { TECH_ICONS, BrandIcon } from '../data/icons'
import Lightbox from './Lightbox'
import styles from './Projects.module.css'

/* ── SVG icons for action buttons ── */
const GithubIcon = () => <BrandIcon name="github" />
const DemoIcon = () => <BrandIcon name="youtube" />

const LiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

/* ── Single keyboard key ── */
function TechKey({ techKey }) {
  const tech = TECH_ICONS[techKey]
  if (!tech) return <div className={`${styles.key} ${styles.textKey}`}>{techKey}</div>
  return (
    <div className={styles.keyWrap}>
      <motion.div
        className={styles.key}
        style={{ background: tech.bg, color: tech.color }}
        data-label={tech.label}
        whileTap={{ y: 4 }}
      >
        <span className={styles.keyIcon}>{tech.svg}</span>
      </motion.div>
      <span className={styles.keyLabel}>{tech.label}</span>
    </div>
  )
}

/* ── Action button — stops click from bubbling to the card anchor ── */
function ActionBtn({ href, Icon, label, variant }) {
  const cls = {
    github: styles.btnGithub,
    live:   styles.btnLive,
    demo:   styles.btnDemo,
  }[variant]

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.actionBtn} ${cls}`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => e.stopPropagation()}
    >
      <Icon />
      {label}
    </motion.a>
  )
}

/* ── Card animation variants ── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* ══════════════════════════════════════════════
   Main Projects component
   ══════════════════════════════════════════════ */
export default function Projects() {
  const [lightbox, setLightbox] = useState(null)
  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <section className={styles.section} id="projects">
      <Lightbox item={lightbox} onClose={closeLightbox} />

      {/* Header */}
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className={styles.sectionTag}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
            <circle cx="5" cy="5" r="5" />
          </svg>
          Featured Work
        </div>
        <h2 className={styles.sectionTitle}>
          My{' '}
          <span className={styles.sectionTitleGrad}>Projects</span>
        </h2>
      </motion.div>

      {/* Project cards — entire card navigates to live → demo → github */}
      {PROJECTS.map((project, i) => {
        const cardHref = project.live || project.demo || project.github || '#'

        return (
          <motion.a
            key={project.id}
            href={cardHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.projectCard} ${i % 2 === 1 ? styles.reverse : ''}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.08 }}
            aria-label={`Open ${project.title}`}
          >
            {/* ── Text panel ── */}
            <div className={styles.left}>
              <span className={styles.projectNumber}>
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className={styles.projectTitle}>{project.title}</h3>

              <p className={styles.projectDesc}>{project.description}</p>

              {/* Tech stack keyboard */}
              <div>
                <p className={styles.keyboardLabel}>Tech Stack</p>
                <div className={styles.keyboard} role="list" aria-label="Tech stack">
                  {project.techKeys.map((k) => (
                    <TechKey key={k} techKey={k} />
                  ))}
                </div>
              </div>

              {/* Buttons — e.stopPropagation so they don't trigger the card anchor */}
              <div className={styles.actions}>
                {project.github && (
                  <ActionBtn href={project.github} Icon={GithubIcon} label="GitHub" variant="github" />
                )}
                {project.live && (
                  <ActionBtn href={project.live} Icon={LiveIcon} label="Try It" variant="live" />
                )}
                {project.demo && (
                  <ActionBtn href={project.demo} Icon={DemoIcon} label="Demo" variant="demo" />
                )}
              </div>
            </div>

            {/* ── Image panel — click opens lightbox instead of navigating ── */}
            <div className={styles.right}>
              <div
                className={styles.imageWrapper}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openLightbox(project.image, `${project.title} — screenshot`)
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title} screenshot`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(project.image, `${project.title} — screenshot`)
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={styles.projectImage}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  decoding="async"
                />
                <span className={styles.imageZoomHint} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.a>
        )
      })}
    </section>
  )
}
