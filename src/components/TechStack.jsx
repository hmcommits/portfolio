import { motion } from 'framer-motion'
import { TECH_ICONS, BrandIcon } from '../data/icons'
import styles from './TechStack.module.css'

/* ════════════════════════════════════════════════════════
   Tech categories — drawn from PROJECTS.md tech stacks
   ════════════════════════════════════════════════════════ */
const TECH_CATEGORIES = [
  {
    label: 'Frontend & Mobile',
    keys: ['react', 'nextjs', 'typescript', 'javascript', 'tailwind', 'framermotion', 'flutter'],
  },
  {
    label: 'Backend & APIs',
    keys: ['nodejs', 'express', 'fastapi', 'python'],
  },
  {
    label: 'Database, Auth & Cloud',
    keys: ['mongodb', 'firebase', 'jwt', 'render', 'railway'],
  },
  {
    label: 'AI & Machine Learning',
    keys: ['gemini', 'mediapipe', 'opencv', 'streamlit'],
  },
  {
    label: 'Libraries & Tools',
    keys: ['excalidraw', 'sandpack', 'zustand', 'zod', 'figma'],
  },
]

/* ════════════════════════════════════════════════════════
   Tools I Use
   Each tool has: name, tagline, brand colour, icon (SVG)
   ════════════════════════════════════════════════════════ */
const TOOLS = [
  {
    id: 'antigravity',
    name: 'Antigravity',
    desc: 'AI Coding Agent',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    border: 'rgba(211,47,47,0.5)',
    glow: 'rgba(211,47,47,0.25)',
    icon: (
      /* Official Google Antigravity mark, brand gradient fill */
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="ag-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8ab4f8"/>
            <stop offset="100%" stopColor="#d32f2f"/>
          </linearGradient>
        </defs>
        <path fill="url(#ag-grad)" d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z"/>
      </svg>
    ),
  },
  {
    id: 'claude',
    name: 'Claude Code',
    desc: 'AI by Anthropic',
    bg: 'linear-gradient(135deg, #1a1108, #231500)',
    border: 'rgba(217,119,87,0.45)',
    glow: 'rgba(217,119,87,0.2)',
    color: '#d97757',
    icon: <BrandIcon name="claude" />,
  },
  {
    id: 'github',
    name: 'GitHub',
    desc: 'Version Control Host',
    bg: 'linear-gradient(135deg, #161b22, #0d1117)',
    border: 'rgba(200,200,200,0.2)',
    glow: 'rgba(200,200,200,0.1)',
    color: '#e6edf3',
    icon: <BrandIcon name="github" />,
  },
  {
    id: 'git',
    name: 'Git',
    desc: 'Source Control',
    bg: 'linear-gradient(135deg, #2d1b00, #3d1f00)',
    border: 'rgba(240,60,46,0.45)',
    glow: 'rgba(240,60,46,0.2)',
    color: '#f03c2e',
    icon: <BrandIcon name="git" />,
  },
  {
    id: 'vscode',
    name: 'VS Code',
    desc: 'Code Editor',
    bg: 'linear-gradient(135deg, #001833, #002b5c)',
    border: 'rgba(0,122,204,0.45)',
    glow: 'rgba(0,122,204,0.2)',
    color: '#007acc',
    icon: <BrandIcon name="vscode" />,
  },
  {
    id: 'postman',
    name: 'Postman',
    desc: 'API Testing',
    bg: 'linear-gradient(135deg, #2d1400, #3d1c00)',
    border: 'rgba(255,108,55,0.45)',
    glow: 'rgba(255,108,55,0.2)',
    color: '#ff6c37',
    icon: <BrandIcon name="postman" />,
  },
  {
    id: 'codex',
    name: 'Codex',
    desc: 'OpenAI Codex',
    bg: 'linear-gradient(135deg, #0a0a0a, #111)',
    border: 'rgba(16,163,127,0.45)',
    glow: 'rgba(16,163,127,0.2)',
    color: '#10a37f',
    icon: <BrandIcon name="openai" />,
  },
]

/* ── animation helpers ── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

/* ── Single tech pill ── */
function TechPill({ techKey }) {
  const tech = TECH_ICONS[techKey]
  if (!tech) return null
  return (
    <motion.div
      className={styles.techPill}
      variants={itemVariants}
      whileHover={{ y: -3, scale: 1.04 }}
    >
      <div
        className={styles.techPillIcon}
        style={{ background: tech.bg, color: tech.color }}
      >
        {tech.svg}
      </div>
      <span className={styles.techPillName}>{tech.label}</span>
    </motion.div>
  )
}

/* ── Single tool card ── */
function ToolCard({ tool }) {
  return (
    <motion.div
      className={styles.toolCard}
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.04 }}
      style={{
        background: tool.bg,
        borderColor: tool.border,
        boxShadow: `0 0 0 1px ${tool.border}`,
      }}
    >
      <div className={styles.toolIcon} style={{ color: tool.color }}>{tool.icon}</div>
      <div className={styles.toolInfo}>
        <span className={styles.toolName}>{tool.name}</span>
        <span className={styles.toolDesc}>{tool.desc}</span>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════
   Main TechStack component
   ══════════════════════════════════════════════ */
export default function TechStack() {
  return (
    <section className={styles.section} id="techstack">

      {/* ── Section header ── */}
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className={styles.sectionTag}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
          Arsenal
        </div>
        <h2 className={styles.sectionTitle}>
          My{' '}
          <span className={styles.sectionTitleGrad}>Tech Stack</span>
        </h2>
        <p className={styles.sectionDesc}>
          Technologies I reach for when building production-grade web, mobile, and AI-powered applications.
        </p>
      </motion.div>

      {/* ── Tech categories ── */}
      {TECH_CATEGORIES.map((cat, ci) => (
        <motion.div
          key={cat.label}
          className={styles.categoryGroup}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: ci * 0.07 }}
        >
          <p className={styles.categoryTitle}>{cat.label}</p>
          <motion.div
            className={styles.pillGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {cat.keys.map((k) => (
              <TechPill key={k} techKey={k} />
            ))}
          </motion.div>
        </motion.div>
      ))}

      {/* ── Divider ── */}
      <div className={styles.divider} />

      {/* ── Tools subsection ── */}
      <motion.div
        className={styles.toolsHeader}
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className={styles.toolsTitle}>
          Tools I{' '}
          <span className={styles.toolsTitleGrad}>Use</span>
        </h3>
        <p className={styles.toolsDesc}>My daily-driver dev environment and productivity tools.</p>
      </motion.div>

      <motion.div
        className={styles.toolsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </motion.div>

    </section>
  )
}
