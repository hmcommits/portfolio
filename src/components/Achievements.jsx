import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Achievements.module.css'

/* ── Lightbox modal ── */
function Lightbox({ src, alt, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className={styles.lightboxBackdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
      >
        <motion.div
          className={styles.lightboxInner}
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <img src={src} alt={alt} className={styles.lightboxImg} />
          <p className={styles.lightboxCaption}>{alt}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ── Safe image — hides on load error ── */
function SafeImg({ src, alt, className, style }) {
  const [err, setErr] = useState(false)
  if (err) return (
    <div className={className} style={{ ...style, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(255,255,255,0.03)' }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    </div>
  )
  return <img src={src} alt={alt} className={className} style={style} onError={() => setErr(true)} loading="lazy" />
}

/* ════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════ */
const HACKATHONS = [
  {
    id: 'unsaid',
    medal: '🥈',
    rank: '1st Runner Up',
    rankClass: styles.rankGold,
    title: 'AttentionX Hackathon',
    org: 'by UnsaidTalks',
    image: '/assets/unsaidtalkshackathon.png',
    desc: 'Built AttentionX — an autonomous AI video repurposing engine that converts long-form podcasts into viral 60-second Shorts using Narrative Intelligence.',
  },
  {
    id: 'devlynix',
    medal: '🥉',
    rank: '2nd Runner Up',
    rankClass: styles.rankSilver,
    title: 'Devlynix Buildathon',
    org: 'by Devlynix',
    image: '/assets/devlynixhackathon.png',
    desc: 'Competed against top developers in an intensive buildathon and secured 2nd Runner Up, delivering a high-quality product under time constraints.',
  },
]

const ACHIEVEMENTS = [
  {
    id: 'coral',
    emoji: '🌊',
    title: 'Top 50 — WeMakeDevs × Coral Hackathon',
    sub: 'WeMakeDevs × Coral Protocol',
    badge: 'Top 50 Nationally',
    image: '/assets/coralhackathon.png',
  },
]

const CERTS = [
  {
    id: 'jpmorgan',
    badge: 'Certification',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co.',
    image: '/assets/jpmorganjobsim.png',
    issuerColor: '#1a5276',
  },
  {
    id: 'acmegrade',
    badge: 'Training Program',
    title: 'Artificial Intelligence Training',
    issuer: 'Acmegrade',
    image: '/assets/aiacmegrade.png',
    issuerColor: '#1b4f72',
  },
]

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

/* ══════════════════════════════════════════
   Sub-Label Divider
   ══════════════════════════════════════════ */
function SubLabel({ children, certStyle }) {
  return (
    <p className={`${styles.subLabel} ${certStyle ? styles.subLabelCert : ''}`}>
      {children}
    </p>
  )
}

/* ══════════════════════════════════════════
   Hackathon Card
   ══════════════════════════════════════════ */
function HackCard({ hack, onOpen }) {
  return (
    <motion.article
      className={`${styles.hackCard} ${styles.clickable}`}
      variants={fadeUp}
      whileHover={{ y: -5 }}
      onClick={() => onOpen(hack.image, hack.title)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(hack.image, hack.title)}
      title="Click to view certificate"
    >
      {/* Image — full width, no overlay */}
      <SafeImg
        src={hack.image}
        alt={hack.title}
        className={styles.hackImg}
      />

      {/* Text block — separate from image, solid bg */}
      <div className={styles.hackBody}>
        <div className={styles.hackRankRow}>
          <span className={styles.hackMedal}>{hack.medal}</span>
          <span className={`${styles.hackRank} ${hack.rankClass}`}>{hack.rank}</span>
        </div>
        <h3 className={styles.hackTitle}>{hack.title}</h3>
        <p className={styles.hackOrg}>{hack.org}</p>
        <p className={styles.hackDesc}>{hack.desc}</p>
      </div>
    </motion.article>
  )
}

/* ══════════════════════════════════════════
   Achievement Card
   ══════════════════════════════════════════ */
function AchieveCard({ item, onOpen }) {
  return (
    <motion.article
      className={`${styles.achieveCard} ${styles.clickable}`}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      onClick={() => onOpen(item.image, item.title)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(item.image, item.title)}
      title="Click to view certificate"
    >
      <SafeImg src={item.image} alt={item.title} className={styles.achieveImg} />
      <div className={styles.achieveBody}>
        <span className={styles.achieveEmoji}>{item.emoji}</span>
        <p className={styles.achieveTitle}>{item.title}</p>
        <p className={styles.achieveSub}>{item.sub}</p>
        <span className={styles.achieveBadge}>
          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3"/></svg>
          {item.badge}
        </span>
      </div>
    </motion.article>
  )
}

/* ══════════════════════════════════════════
   Certification Card
   ══════════════════════════════════════════ */
function CertCard({ cert, onOpen }) {
  return (
    <motion.article
      className={`${styles.certCard} ${styles.clickable}`}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      onClick={() => onOpen(cert.image, cert.title)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(cert.image, cert.title)}
      title="Click to view certificate"
    >
      {/* Certificate image — large, object-fit: contain so full cert is visible */}
      <div className={styles.certImgWrapper}>
        <SafeImg
          src={cert.image}
          alt={cert.title}
          className={styles.certImg}
        />
      </div>

      {/* Details */}
      <div className={styles.certBody}>
        <span className={styles.certBadge}>
          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3"/></svg>
          {cert.badge}
        </span>
        <h3 className={styles.certTitle}>{cert.title}</h3>
        <p className={styles.certIssuer}>
          <span
            className={styles.certIssuerIcon}
            style={{ background: cert.issuerColor + '33' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14H7.5v-1.5h9V16zm0-3H7.5v-1.5h9V13zm0-3H7.5V8.5h9V10z"/>
            </svg>
          </span>
          {cert.issuer}
        </p>
      </div>
    </motion.article>
  )
}

/* ══════════════════════════════════════════
   Main Component
   ══════════════════════════════════════════ */
export default function Achievements() {
  const [lightbox, setLightbox] = useState(null) // { src, alt }
  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <section className={styles.section} id="achievements">
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}

      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className={styles.sectionTag}>🏆 Recognition</div>
        <h2 className={styles.sectionTitle}>
          Achievements &{' '}
          <span className={styles.titleGrad}>Certifications</span>
        </h2>
        <p className={styles.sectionDesc}>
          Hackathon wins, top finishes, and professional certifications that mark my journey as a developer.
        </p>
      </motion.div>

      {/* ── Hackathons ── */}
      <SubLabel>Hackathon Wins</SubLabel>
      <motion.div
        className={styles.hackRow}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {HACKATHONS.map(h => <HackCard key={h.id} hack={h} onOpen={openLightbox} />)}
      </motion.div>

      {/* ── Other Achievements ── */}
      <SubLabel>Other Achievements</SubLabel>
      <motion.div
        className={styles.achieveRow}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {ACHIEVEMENTS.map(a => <AchieveCard key={a.id} item={a} onOpen={openLightbox} />)}
      </motion.div>

      {/* ── Certifications ── */}
      <SubLabel certStyle>Certifications</SubLabel>
      <motion.div
        className={styles.certsGrid}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {CERTS.map(c => <CertCard key={c.id} cert={c} onOpen={openLightbox} />)}
      </motion.div>

    </section>
  )
}
