import { motion } from 'framer-motion'
import styles from './Contact.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    
    // Build mailto link
    const mailtoLink = `mailto:hvpharsh0801@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    
    // Open default email client
    window.location.href = mailtoLink
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
          <motion.div className={styles.infoCard} variants={fadeUp}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className={styles.infoDetails}>
              <span className={styles.infoLabel}>Email</span>
              <span className={styles.infoValue}>hvpharsh0801@gmail.com</span>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div className={styles.infoCard} variants={fadeUp}>
            <div className={styles.iconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className={styles.infoDetails}>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>+91 9372972446</span>
            </div>
          </motion.div>

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
              <a href="https://github.com/hmcommits" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/harsh-mayekar/" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@harshmayekar6641" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Form ── */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>Your Name</label>
                <input type="text" id="name" name="name" className={styles.inputField} placeholder="John Doe" required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.inputLabel}>Your Email</label>
                <input type="email" id="email" name="email" className={styles.inputField} placeholder="john@example.com" required />
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

            {/* Spam protection */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <button type="submit" className={styles.submitBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <div className={styles.footerText}>
        Designed & Built by Harsh Prakash Mayekar with <span className={styles.footerHeart}>❤</span>
      </div>
    </section>
  )
}
