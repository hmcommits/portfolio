import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS, TECH_ICONS } from '../data/projects'
import styles from './Projects.module.css'

/* ── SVG icons for action buttons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const DemoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

/* ── Single keyboard key ── */
function TechKey({ techKey }) {
  const tech = TECH_ICONS[techKey]
  if (!tech) return null

  return (
    <motion.div
      className={styles.key}
      style={{ background: tech.bg, color: tech.color }}
      data-label={tech.label}
      whileTap={{ y: 4 }}
      title={tech.label}
    >
      <span className={styles.keyIcon}>{tech.svg}</span>
    </motion.div>
  )
}

/* ── Project image with fallback ── */
function ProjectImage({ src, alt }) {
  const [err, setErr] = useState(false)
  return (
    <div className={styles.imageWrapper}>
      {!err ? (
        <img
          src={src}
          alt={alt}
          className={styles.projectImage}
          onError={() => setErr(true)}
        />
      ) : (
        <div className={styles.imagePlaceholder}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.3">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      )}
    </div>
  )
}

/* ── Action button ── */
function ActionBtn({ href, Icon, label, variant }) {
  const cls = {
    github: styles.btnGithub,
    live: styles.btnLive,
    demo: styles.btnDemo,
    disabled: styles.btnDisabled,
  }[variant]

  if (!href) {
    return (
      <span className={`${styles.actionBtn} ${styles.btnDisabled}`}>
        <Icon />
        {label}
      </span>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.actionBtn} ${cls}`}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
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
  return (
    <section className={styles.section} id="projects">
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

      {/* Project cards */}
      {PROJECTS.map((project, i) => (
        <motion.article
          key={project.id}
          className={styles.projectCard}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: i * 0.08 }}
        >
          {/* ── LEFT ── */}
          <div className={styles.left}>
            <span className={styles.projectNumber}>
              {String(i + 1).padStart(2, '0')}
            </span>

            <h3 className={styles.projectTitle}>{project.title}</h3>

            <p className={styles.projectDesc}>{project.description}</p>

            {/* Keyboard tech stack */}
            <div>
              <p className={styles.keyboardLabel}>Tech Stack</p>
              <div className={styles.keyboard} role="list" aria-label="Tech stack">
                {project.techKeys.map((k) => (
                  <TechKey key={k} techKey={k} />
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className={styles.actions}>
              <ActionBtn
                href={project.github}
                Icon={GithubIcon}
                label="GitHub"
                variant={project.github ? 'github' : 'disabled'}
              />
              <ActionBtn
                href={project.live}
                Icon={LiveIcon}
                label="Try It"
                variant={project.live ? 'live' : 'disabled'}
              />
              <ActionBtn
                href={project.demo}
                Icon={DemoIcon}
                label="Demo"
                variant={project.demo ? 'demo' : 'disabled'}
              />
            </div>
          </div>

          {/* ── RIGHT — image ── */}
          <div className={styles.right}>
            <ProjectImage src={project.image} alt={`${project.title} screenshot`} />
          </div>
        </motion.article>
      ))}
    </section>
  )
}
