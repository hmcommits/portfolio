import { useState } from 'react'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'
import styles from './Hero.module.css'
import profileImg from '/assets/profile.jpeg'

/* ── animation variants ── */
const fadeDown  = { hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } }
const fadeUp    = { hidden: { opacity: 0, y:  20 }, show: { opacity: 1, y: 0 } }
const fadeIn    = { hidden: { opacity: 0          }, show: { opacity: 1       } }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

/* ── Social links data ── */
const SOCIALS = [
  {
    id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/your-number',
    cls: styles.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/your-profile',
    cls: styles.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'medium', label: 'Medium', href: 'https://medium.com/@your-profile',
    cls: styles.medium,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    ),
  },
  {
    id: 'youtube', label: 'YouTube', href: 'https://youtube.com/@your-channel',
    cls: styles.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    id: 'github', label: 'GitHub', href: 'https://github.com/your-username',
    cls: styles.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
]

/* ── Profile photo with fallback ── */
function ProfilePhoto() {
  const [imgError, setImgError] = useState(false)
  return (
    <div className={styles.photoFrame}>
      {!imgError ? (
        <img
          src={profileImg}
          alt="Harsh Prakash Mayekar"
          className={styles.photo}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={styles.photoPlaceholder}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span>Add photo to<br />public/assets/profile.jpeg</span>
        </div>
      )}
    </div>
  )
}

/* ── Main Hero component ── */
export default function Hero() {
  const typedWord = useTypewriter()

  return (
    <>
      {/* Sidebar accent */}
      <aside className={styles.sidebar} aria-hidden="true">
        <div className={styles.sidebarLine} />
        <div className={styles.sidebarDot} />
        <div className={styles.sidebarDot} />
        <div className={styles.sidebarDot} />
      </aside>

      <main className={styles.hero}>
        {/* ── LEFT ── */}
        <motion.section
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

          {/* Typewriter */}
          <motion.div className={styles.typewriterRow} variants={fadeDown} transition={{ duration: 0.55 }}>
            <span className={styles.typewriterPrefix}>I am a&nbsp;</span>
            <span className={styles.typewriterWord} aria-live="polite">{typedWord}</span>
            <span className={styles.typewriterCursor} aria-hidden="true">|</span>
          </motion.div>

          {/* About */}
          <motion.div className={`${styles.aboutCard} glass-card`} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className={styles.aboutGlow} aria-hidden="true" />
            <p className={styles.aboutText}>
              Computer Engineering student at <strong>Datta Meghe College of Engineering</strong>.<br /><br />
              Full-stack developer passionate about building impactful digital products.
              I develop scalable web and mobile applications with modern technologies.
              Experienced in creating AI-powered features and reliable backend systems.
              Focused on delivering clean, user-centered, and high-performance solutions.<br /><br />
              Open to <em>internships</em> and <em>collaborations</em>.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div className={styles.ctaRow} variants={fadeUp} transition={{ duration: 0.55 }}>
            <motion.a
              href="mailto:harshpmayekar@gmail.com"
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
              download
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
          </motion.div>
        </motion.section>

        {/* ── RIGHT ── */}
        <aside className={styles.right}>
          {/* Achievement top */}
          <motion.div
            className={`${styles.achievementCard} ${styles.achievementTop} glass-card`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ y: -5 }}
          >
            <span className={styles.achieveIcon}>🏆</span>
            <div className={styles.achieveInfo}>
              <span className={styles.achieveNumber}>2×</span>
              <span className={styles.achieveLabel}>Hackathon Winner</span>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className={styles.photoWrapper}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.photoRing} aria-hidden="true" />
            <ProfilePhoto />
          </motion.div>

          {/* Achievement bottom */}
          <motion.div
            className={`${styles.achievementCard} ${styles.achievementBottom} glass-card`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ y: -5 }}
          >
            <span className={styles.achieveIcon}>⭐</span>
            <div className={styles.achieveInfo}>
              <span className={styles.achieveNumber}>5+</span>
              <span className={styles.achieveLabel}>Achievements</span>
            </div>
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`${styles.socialIcon} ${s.cls}`}
                  whileHover={{ y: -5, scale: 1.14 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </aside>
      </main>
    </>
  )
}
