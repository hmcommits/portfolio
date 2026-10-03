import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PROJECTS } from '../data/projects'
import { TECH_ICONS, BrandIcon } from '../data/icons'
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

/* ── Minimal metadata pills (replacing keyboard keys) ── */
function TechPill({ techKey }) {
  const tech = TECH_ICONS[techKey]
  if (!tech) return <span className={styles.pill}>{techKey}</span>
  // If the brand color is white, use black instead so it's visible on the white pills
  const iconColor = tech.color === '#ffffff' ? '#111' : tech.color;
  return (
    <span className={styles.pill}>
      <span className={styles.pillIcon} style={{ color: iconColor }}>{tech.svg}</span>
      {tech.label}
    </span>
  )
}

function ActionLink({ href, Icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={styles.actionLink} onClick={(e) => e.stopPropagation()}>
      <Icon />
      <span>{label}</span>
      <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  )
}

/* ── Individual Project Editorial Block ── */
function ProjectBlock({ project, index }) {
  const cardHref = project.live || project.demo || project.github || '#'
  const isReversed = index % 2 !== 0
  
  // Parallax ref for the image panel
  const blockRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: blockRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  // Random vibrant gradient for the mockup panel background
  const gradients = [
    'linear-gradient(135deg, #d32f2f 0%, #ff6659 100%)',
    'linear-gradient(135deg, #ff4081 0%, #ff6b9d 100%)',
    'linear-gradient(135deg, #ffd166 0%, #ff9e00 100%)',
    'linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)', // keep one blue/purple for variety
  ]
  const panelGradient = gradients[index % gradients.length]

  return (
    <a href={cardHref} target="_blank" rel="noopener noreferrer" className={`${styles.projectBlock} ${isReversed ? styles.reversed : ''}`} ref={blockRef}>
      
      {/* Visual Panel (Sticky-like behavior achieved via parallax and height) */}
      <div className={styles.visualColumn}>
        <div className={styles.mockupContainer} style={{ background: panelGradient }}>
          <div className={styles.mockupGlow} />
          <motion.img
            style={{ y }}
            src={project.image}
            alt={project.title}
            className={styles.mockupImage}
            loading="lazy"
          />
        </div>
      </div>

      {/* Editorial Content */}
      <div className={styles.contentColumn}>
        <div className={styles.metaRow}>
          <span className={styles.projectNumber}>{(index + 1).toString().padStart(2, '0')}</span>
          <div className={styles.divider} />
          <span className={styles.projectCategory}>Featured Project</span>
        </div>

        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>

        <div className={styles.pillContainer}>
          {project.techKeys.map((k) => (
            <TechPill key={k} techKey={k} />
          ))}
        </div>

        <div className={styles.actionLinks}>
          {project.live && <ActionLink href={project.live} Icon={LiveIcon} label="View Live Site" />}
          {project.demo && <ActionLink href={project.demo} Icon={DemoIcon} label="Watch Demo" />}
          {project.github && <ActionLink href={project.github} Icon={GithubIcon} label="Source Code" />}
        </div>
      </div>

    </a>
  )
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
          Selected Works
        </div>
        <h2 className={styles.sectionTitle}>
          Editorial <span className={styles.sectionTitleGrad}>Case Studies</span>
        </h2>
      </motion.div>

      {/* Project Stack */}
      <div className={styles.projectStack}>
        {PROJECTS.map((project, i) => (
          <ProjectBlock key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
