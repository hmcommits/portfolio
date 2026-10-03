import { useState } from 'react'
import { motion } from 'framer-motion'
import useTypewriter, { WORDS } from '../hooks/useTypewriter'
import { BrandIcon } from '../data/icons'
import styles from './Hero.module.css'
import profileImg from '/assets/profile.webp'

/* ── animation variants ── */
const fadeDown  = { hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }
const fadeUp    = { hidden: { opacity: 0, y:  20 }, show: { opacity: 1, y: 0 } }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

/* ── Social links data ── */
const SOCIALS = [
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/919372972446', cls: 'whatsapp' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-mayekar/', cls: 'linkedin' },
  { id: 'gmail', label: 'Email', href: 'mailto:hvpharsh0801@gmail.com', cls: 'email' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@harshmayekar6641', cls: 'youtube' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/hmcommits', cls: 'github' },
]

/* ── Profile photo with fallback ── */
function ProfilePhoto() {
  const [imgError, setImgError] = useState(false)
  return (
    <div className={styles.photoFrame}>
      <img
        src={profileImg}
        alt="Harsh Prakash Mayekar"
        className={styles.photo}
        style={{ display: imgError ? 'none' : 'block' }}
        onError={() => setImgError(true)}
        loading="eager"
        fetchPriority="high"
        width="800"
        height="1022"
      />
      {imgError && (
        <div className={styles.photoPlaceholder}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span>Add photo to<br />public/assets/profile.webp</span>
        </div>
      )}
    </div>
  )
}

/* ── Main Hero component ── */
export default function Hero() {
  const typedWord = useTypewriter()

  return (
    <section className={styles.hero} id="hero">
      {/* ── LEFT ── */}
      <motion.div
        className={styles.left}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div className={styles.badge} variants={fadeDown} transition={{ duration: 0.5 }}>
          <span className={styles.badgeDot} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 className={styles.name} variants={fadeDown} transition={{ duration: 0.55 }}>
          Hi, I am<br />
          <span className={styles.nameHighlight}>Harsh Prakash<br />Mayekar</span>
        </motion.h1>

        {/* Typewriter — decorative for screen readers; static list provided instead */}
        <motion.div className={styles.typewriterRow} variants={fadeDown} transition={{ duration: 0.55 }}>
          <span className="sr-only">I am a {WORDS.join(', ')}.</span>
          <span className={styles.typewriterPrefix} aria-hidden="true">I am a&nbsp;</span>
          <span className={styles.typewriterWord} aria-hidden="true">{typedWord}</span>
          <span className={styles.typewriterCursor} aria-hidden="true">|</span>
        </motion.div>

        {/* About */}
        <motion.div className={`${styles.aboutCard} glass-card`} variants={fadeUp} transition={{ duration: 0.6 }}>
          <div className={styles.aboutGlow} aria-hidden="true" />
          <p className={styles.aboutText}>
            I am a third-year Computer Engineering student at <strong>Datta Meghe College of Engineering</strong> specializing in scalable full-stack applications and AI-integrated systems.<br /><br />
            I focus on bridging the gap between complex backend architecture and seamless, user-centered design to build impactful digital products. I specialize in deploying robust solutions under tight deadlines. Whether competing solo or as a team leader for cross-functional teams.<br /><br />
            Open to <em>internships</em> and <em>collaborations</em>.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div className={styles.ctaRow} variants={fadeUp} transition={{ duration: 0.55 }}>
          <motion.a
            href="#contact"
            className={styles.btnPrimary}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,12 2,6"/>
            </svg>
            Get in Touch
          </motion.a>
          <motion.a
            href="/assets/resume.pdf"
            download="Harsh_Mayekar_Resume.pdf"
            className={styles.btnSecondary}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </motion.a>
          <motion.a
            href="https://github.com/hmcommits"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGithub}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <BrandIcon name="github" />
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── RIGHT ── */}
      <aside className={styles.right}>
        {/* Photo with floating stat cards anchored to its corners */}
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className={styles.photoRing} aria-hidden="true" />
          <ProfilePhoto />

          {/* Achievement top-left */}
          <motion.div
            className={`${styles.achievementPos} ${styles.achievementTop}`}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            whileHover={{ scale: 1.06 }}
          >
            <div className={`${styles.achievementCard} glass-card`}>
              <span className={styles.achieveIcon}>🏆</span>
              <div className={styles.achieveInfo}>
                <span className={styles.achieveNumber}>3×</span>
                <span className={styles.achieveLabel}>Hackathon Winner</span>
              </div>
            </div>
          </motion.div>

          {/* Achievement mid-left */}
          <motion.div
            className={`${styles.achievementPos} ${styles.achievementMid}`}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.06 }}
          >
            <div className={`${styles.achievementCard} glass-card`}>
              <span className={styles.achieveIcon}>💡</span>
              <div className={styles.achieveInfo}>
                <span className={styles.achieveNumber}>1×</span>
                <span className={styles.achieveLabel}>Ideathon Winner</span>
              </div>
            </div>
          </motion.div>

          {/* Achievement bottom-right */}
          <motion.div
            className={`${styles.achievementPos} ${styles.achievementBottom}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            whileHover={{ scale: 1.06 }}
          >
            <div className={`${styles.achievementCard} glass-card`}>
              <span className={styles.achieveIcon}>⭐</span>
              <div className={styles.achieveInfo}>
                <span className={styles.achieveNumber}>8+</span>
                <span className={styles.achieveLabel}>Achievements</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social bar */}
        <motion.div
          className={`${styles.socialBar} glass-card`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <span className={styles.socialLabel}>Connect</span>
          <div className={styles.socialIcons}>
            {SOCIALS.map((s) => (
              <motion.a
                key={s.id}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`${styles.socialIcon} ${styles[s.cls]}`}
                whileHover={{ y: -5, scale: 1.14 }}
                whileTap={{ scale: 0.95 }}
              >
                <BrandIcon name={s.id} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </aside>
    </section>
  )
}
