import { motion } from 'framer-motion'
import { TECH_ICONS } from '../data/projects'
import styles from './TechStack.module.css'

/* ════════════════════════════════════════════════════════
   Tech categories — drawn from PROJECTS.md tech stacks
   ════════════════════════════════════════════════════════ */
const TECH_CATEGORIES = [
  {
    label: 'Frontend & Mobile',
    keys: ['nextjs', 'typescript', 'tailwind', 'framermotion', 'flutter'],
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
    keys: ['gemini', 'mediapipe', 'streamlit'],
  },
  {
    label: 'Libraries & Tools',
    keys: ['excalidraw', 'sandpack', 'zustand', 'zod'],
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
    border: 'rgba(108,99,255,0.5)',
    glow: 'rgba(108,99,255,0.25)',
    icon: (
      /* Custom Antigravity "AG" mark — Google DeepMind brand violet */
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ag-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6c63ff"/>
            <stop offset="100%" stopColor="#00d4ff"/>
          </linearGradient>
        </defs>
        <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z" fill="url(#ag-grad)" opacity="0.15"/>
        <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z" stroke="url(#ag-grad)" strokeWidth="1.5" fill="none"/>
        <text x="12" y="15.5" textAnchor="middle" fill="url(#ag-grad)" fontSize="7" fontWeight="800" fontFamily="sans-serif">AG</text>
      </svg>
    ),
  },
  {
    id: 'claude',
    name: 'Claude Code',
    desc: 'AI by Anthropic',
    bg: 'linear-gradient(135deg, #1a1108, #231500)',
    border: 'rgba(210,140,60,0.45)',
    glow: 'rgba(210,140,60,0.2)',
    icon: (
      /* Anthropic Claude logomark — warm amber */
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.304 4h-2.87L9.696 20h2.87L17.304 4z" fill="#d2843c"/>
        <path d="M6.696 4H3.826L8.574 20h2.87L6.696 4z" fill="#d2843c" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    desc: 'Version Control Host',
    bg: 'linear-gradient(135deg, #161b22, #0d1117)',
    border: 'rgba(200,200,200,0.2)',
    glow: 'rgba(200,200,200,0.1)',
    icon: (
      <svg viewBox="0 0 24 24" fill="#e6edf3">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    desc: 'Source Control',
    bg: 'linear-gradient(135deg, #2d1b00, #3d1f00)',
    border: 'rgba(240,80,51,0.45)',
    glow: 'rgba(240,80,51,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" fill="#f05033">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
  },
  {
    id: 'vscode',
    name: 'VS Code',
    desc: 'Code Editor',
    bg: 'linear-gradient(135deg, #001833, #002b5c)',
    border: 'rgba(0,122,204,0.45)',
    glow: 'rgba(0,122,204,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007acc"/>
      </svg>
    ),
  },
  {
    id: 'postman',
    name: 'Postman',
    desc: 'API Testing',
    bg: 'linear-gradient(135deg, #2d1400, #3d1c00)',
    border: 'rgba(255,106,0,0.45)',
    glow: 'rgba(255,106,0,0.2)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643 4.453-4.453a.859.859 0 1 0-1.215-1.215l-4.453 4.453-.308-.308c-.526-.526-.468-1.62.593-2.681l-.37-.37c-1.56 1.56-1.52 3.272-.837 4.07l-.086.086a2.274 2.274 0 0 0-3.211 3.211 2.274 2.274 0 0 0 3.211-3.211l4.597-4.597a2.136 2.136 0 0 1 3.022 3.022L11.43 14.5l.306.307 4.24-4.24a.859.859 0 0 0 0-1.215.855.855 0 0 0-.607-.25c.001 0 .001 0 0 0l-.37-.518z" fill="#FF6C37"/>
      </svg>
    ),
  },
  {
    id: 'codex',
    name: 'Codex',
    desc: 'OpenAI Codex',
    bg: 'linear-gradient(135deg, #0a0a0a, #111)',
    border: 'rgba(16,163,127,0.45)',
    glow: 'rgba(16,163,127,0.2)',
    icon: (
      /* OpenAI logo mark */
      <svg viewBox="0 0 24 24" fill="#10a37f">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.74 19.946a4.5 4.5 0 0 1-6.14-1.642zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.8-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.17V6.838a.071.071 0 0 1 .028-.967l4.83-2.786A4.494 4.494 0 0 1 20.947 8.67zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.98a4.494 4.494 0 0 1 7.375-3.453l-.142.08L8.704 6.322a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
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
      onHoverStart={(e) => {
        e.currentTarget.style.boxShadow = `0 12px 32px ${tool.glow}, 0 0 0 1px ${tool.border}`
      }}
      onHoverEnd={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 1px ${tool.border}`
      }}
    >
      <div className={styles.toolIcon}>{tool.icon}</div>
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
