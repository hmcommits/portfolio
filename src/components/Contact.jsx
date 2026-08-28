import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrandIcon } from '../data/icons'
import styles from './Contact.module.css'

/*
 * ── Contact form backend ──
 * Free, no-server email delivery via Web3Forms (https://web3forms.com).
 * 1. Sign up with your email → you get an Access Key.
 * 2. Paste it below. Done — submissions land in your inbox.
 * Until a key is set, the form falls back to opening the visitor's email app.
 */
const WEB3FORMS_ACCESS_KEY = ''

const EMAIL = 'hvpharsh0801@gmail.com'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/hmcommits' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-mayekar/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@harshmayekar6641' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/919372972446' },
]

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const sending = status.state === 'sending'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    // Honeypot: bots fill the hidden field, humans never see it
    if (data.get('botcheck')) return

    // No backend key configured → fall back to the visitor's email app
    if (!WEB3FORMS_ACCESS_KEY) {
      const subject = data.get('subject')
      const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus({
        state: 'info',
        message: `Opening your email app… If nothing happens, write to me directly at ${EMAIL}.`,
      })
      return
    }

    setStatus({ state: 'sending', message: '' })
    try {
      data.append('access_key', WEB3FORMS_ACCESS_KEY)
      data.append('from_name', 'Portfolio Contact Form')
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()
      if (!json.success) throw new Error(json.message || 'Submission failed')
      form.reset()
      setStatus({ state: 'success', message: "Message sent! I'll get back to you soon. 🚀" })
    } catch {
      setStatus({
        state: 'error',
        message: `Something went wrong. Please email me directly at ${EMAIL}.`,
      })
    }
  }

  return (
    <section className={styles.section} id="contact">
      {/* ── Header ── */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sectionTag}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><circle cx="5" cy="5" r="5"/></svg>
          Contact
        </div>
        <h2 className={styles.sectionTitle}>Say Hi, Don't Be Shy</h2>
      </motion.div>

      <div className={styles.container}>
        {/* ── Left Column: Contact Info ── */}
        <motion.div
          className={styles.infoPanel}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Email */}
          <motion.a href={`mailto:${EMAIL}`} className={styles.infoCard} variants={fadeUp}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className={styles.infoDetails}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>{EMAIL}</span>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a href="tel:+919372972446" className={styles.infoCard} variants={fadeUp}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className={styles.infoDetails}>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>+91 9372972446</span>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div className={styles.infoCard} variants={fadeUp}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className={styles.infoDetails}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Navi Mumbai, India</span>
            </div>
          </motion.div>

          {/* Connect With Me (Socials) */}
          <motion.div className={styles.socialSection} variants={fadeUp}>
            <h3 className={styles.socialTitle}>Connect With Me</h3>
            <div className={styles.socialRow}>
              {SOCIALS.map(({ id, label, href }) => (
                <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label={label}>
                  <BrandIcon name={id} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Form ── */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>Your Name</label>
                <input type="text" id="name" name="name" className={styles.inputField} placeholder="John Doe" autoComplete="name" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>Your Email</label>
                <input type="email" id="email" name="email" className={styles.inputField} placeholder="john@example.com" autoComplete="email" required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="subject" className={styles.inputLabel}>Subject</label>
              <input type="text" id="subject" name="subject" className={styles.inputField} placeholder="How can I help you?" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>Message</label>
              <textarea id="message" name="message" className={styles.textArea} placeholder="Your message here..." required />
            </div>

            {/* Spam honeypot — hidden from humans */}
            <input type="checkbox" name="botcheck" tabIndex="-1" aria-hidden="true" style={{ display: 'none' }} />

            <button type="submit" className={styles.submitBtn} disabled={sending}>
              {sending ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </>
              )}
            </button>

            {status.message && (
              <p
                className={`${styles.statusMsg} ${styles['status_' + status.state] || ''}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
