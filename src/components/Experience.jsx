import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Lightbox from './Lightbox'
import styles from './Experience.module.css'

/* ── Safe Image component ── */
function SafeImg({ src, alt, className }) {
  const [err, setErr] = useState(false)
  if (err) return null
  return <img src={src} alt={alt} className={className} onError={() => setErr(true)} loading="lazy" decoding="async" />
}

/* Keyboard activation for card-as-button pattern (Enter + Space) */
const pressKeys = (fn) => (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    fn()
  }
}

/* ════════════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════════════ */
const EXPERIENCE_DATA = [
  {
    id: 'mindopiia',
    role: 'Technology & Digital Product Intern',
    company: 'Mindopiia Counselling Center',
    date: 'Oct 2025 – Dec 2025',
    description: "Led the end-to-end design and development of internal web applications using React to streamline digital workflows and operational efficiency. Contributed to the clinic's UI/UX by building responsive, accessible layouts in Figma, translating complex psychological concepts into user-friendly digital content. Delivered over 100+ professional digital assets and worked cross-functionally with psychologists to align tech solutions with clinical requirements.",
    skills: ['React.js', 'JavaScript', 'UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Cross-Functional Collaboration'],
    documents: [
      {
        id: 'cert',
        title: 'Certificate of Internship',
        image: '/assets/mccinternshipcertificate.webp',
      },
      {
        id: 'lor',
        title: 'Letter of Recommendation',
        image: '/assets/mccinternshiplor.webp',
      }
    ]
  }
]

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* ════════════════════════════════════════════════════
   Component
   ════════════════════════════════════════════════════ */
export default function Experience() {
  const [lightbox, setLightbox] = useState(null) // { src, alt }
  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <section className={styles.section} id="experience">
      <Lightbox item={lightbox} onClose={closeLightbox} />

      {/* ── Header ── */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className={styles.sectionTag}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
          Career
        </div>
        <h2 className={styles.sectionTitle}>
          Professional{' '}
          <span className={styles.titleGrad}>Experience</span>
        </h2>
      </motion.div>

      {/* ── Experience Timeline / Cards ── */}
      <div className={styles.timeline}>
        {EXPERIENCE_DATA.map((exp) => (
          <motion.article
            key={exp.id}
            className={styles.expCard}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.roleInfo}>
                <h3 className={styles.roleTitle}>{exp.role}</h3>
                <p className={styles.companyName}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  {exp.company}
                </p>
              </div>
              <div className={styles.dateRange}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {exp.date}
              </div>
            </div>

            <p className={styles.description}>
              {exp.description}
            </p>

            <div className={styles.skillsList}>
              {exp.skills.map(skill => (
                <span key={skill} className={styles.skillPill}>{skill}</span>
              ))}
            </div>

            {/* Documents Section */}
            {exp.documents && exp.documents.length > 0 && (
              <div className={styles.documentsArea}>
                <p className={styles.docsTitle}>Credentials & Attachments</p>
                <div className={styles.docsGrid}>
                  {exp.documents.map(doc => (
                    <motion.div
                      key={doc.id}
                      className={styles.docCard}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => openLightbox(doc.image, doc.title)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={pressKeys(() => openLightbox(doc.image, doc.title))}
                      title={`View ${doc.title}`}
                    >
                      <div className={styles.docImgWrapper}>
                        <SafeImg src={doc.image} alt={doc.title} className={styles.docImg} />
                      </div>
                      <div className={styles.docInfo}>
                        <span className={styles.docName}>{doc.title}</span>
                        <svg className={styles.docIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3"/>
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>

    </section>
  )
}
