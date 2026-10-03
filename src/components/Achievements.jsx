import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'
import styles from './Achievements.module.css'

/* ── Safe image — hides on load error ── */
function SafeImg({ src, alt, className, width, height, style }) {
  const [err, setErr] = useState(false)
  if (err) return (
    <div className={className} style={{ ...style, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(255,255,255,0.03)' }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    </div>
  )
  return (
    <img
      src={src} alt={alt} className={className} style={style}
      width={width} height={height}
      onError={() => setErr(true)} loading="lazy" decoding="async"
    />
  )
}

/* Keyboard activation for card-as-button pattern (Enter + Space) */
const pressKeys = (fn) => (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    fn()
  }
}

/* ════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════ */
const HACKATHONS = [
  {
    id: 'rocketride',
    medal: '🥈',
    rank: '1st Runner Up (Team Leader)',
    rankClass: 'rankGold',
    title: 'RocketRide × HackwithIndia Hackathon',
    org: 'BVUDET NM Chapter, Navi Mumbai',
    image: '/assets/rocketride.webp',
    imageWidth: 1599, imageHeight: 899,
    desc: 'Secured 1st Runner-Up at a hackathon organized by RocketRide, Devnovate, and HackwithIndia, hosted at Bharati Vidyapeeth University, Navi Mumbai. Pitched directly to Rod Christensen and Ryan Christensen — the founders behind RocketRide — making this milestone genuinely unforgettable.',
  },
  {
    id: 'nhitm',
    medal: '🥈',
    rank: '2nd Position (Team Leader)',
    rankClass: 'rankGold',
    title: 'Pitch-Perfect Ideathon',
    org: 'NHITM — IIC & R&D Cell, Navi Mumbai',
    image: '/assets/nhitm.webp',
    imageWidth: 1536, imageHeight: 1089,
    desc: 'Secured 2nd Position at Pitch-Perfect, organized by New Horizon Institute of Technology & Management (IIC & R&D Cell). Pitched NeelKavach — a robust blockchain-based verification solution to eliminate fraudulent claims and ghost forests in mangrove restoration projects.',
  },
  {
    id: 'unsaid',
    medal: '🥈',
    rank: '1st Runner Up (Solo)',
    rankClass: 'rankGold',
    title: 'AttentionX Hackathon',
    org: 'by UnsaidTalks',
    image: '/assets/unsaidtalkshackathon.webp',
    imageWidth: 1400, imageHeight: 990,
    desc: 'Built AttentionX — an autonomous AI video repurposing engine that converts long-form podcasts into viral 60-second Shorts using Narrative Intelligence.',
  },
  {
    id: 'devlynix',
    medal: '🥉',
    rank: '2nd Runner Up (Solo)',
    rankClass: 'rankSilver',
    title: 'Devlynix Buildathon',
    org: 'by Devlynix',
    image: '/assets/devlynixhackathon.webp',
    imageWidth: 1400, imageHeight: 992,
    desc: 'Competed against top developers in an intensive buildathon and secured 2nd Runner Up, delivering a high-quality product under time constraints.',
  },
]

const ACHIEVEMENTS = [
  {
    id: 'coral',
    emoji: '🌊',
    title: 'Top 50 — WeMakeDevs × Coral Hackathon',
    sub: 'WeMakeDevs × Coral Protocol',
    badge: 'Top 50 Internationally',
    image: '/assets/coralhackathon.webp',
    imageWidth: 1400, imageHeight: 786,
  },
]

const CERTS = [
  {
    id: 'jpmorgan',
    badge: 'Certification',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co.',
    image: '/assets/jpmorganjobsim.webp',
    imageWidth: 1400, imageHeight: 992,
    issuerColor: '#1a5276',
  },
  {
    id: 'acmegrade',
    badge: 'Training Program',
    title: 'Artificial Intelligence Training',
    issuer: 'Acmegrade',
    image: '/assets/aiacmegrade.webp',
    imageWidth: 1400, imageHeight: 1068,
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
  const open = () => onOpen(hack.image, hack.title)
  return (
    <motion.article
      className={`${styles.hackCard} ${styles.clickable}`}
      variants={fadeUp}
      whileHover={{ y: -5 }}
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={pressKeys(open)}
      title="Click to view certificate"
    >
      <SafeImg
        src={hack.image}
        alt={hack.title}
        width={hack.imageWidth}
        height={hack.imageHeight}
        className={styles.hackImg}
      />

      <div className={styles.hackBody}>
        <div className={styles.hackRankRow}>
          <span className={styles.hackMedal}>{hack.medal}</span>
          <span className={`${styles.hackRank} ${styles[hack.rankClass]}`}>{hack.rank}</span>
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
  const open = () => onOpen(item.image, item.title)
  return (
    <motion.article
      className={`${styles.achieveCard} ${styles.clickable}`}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={pressKeys(open)}
      title="Click to view certificate"
    >
      <SafeImg src={item.image} alt={item.title} width={item.imageWidth} height={item.imageHeight} className={styles.achieveImg} />
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
  const open = () => onOpen(cert.image, cert.title)
  return (
    <motion.article
      className={`${styles.certCard} ${styles.clickable}`}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={pressKeys(open)}
      title="Click to view certificate"
    >
      <div className={styles.certImgWrapper}>
        <SafeImg
          src={cert.image}
          alt={cert.title}
          width={cert.imageWidth}
          height={cert.imageHeight}
          className={styles.certImg}
        />
      </div>

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
      <Lightbox item={lightbox} onClose={closeLightbox} />

      {/* Header */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className={styles.sectionTag}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
          Recognition
        </div>
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
