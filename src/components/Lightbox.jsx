import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Lightbox.module.css'

/*
 * Shared image lightbox.
 * Render it ALWAYS (it handles its own AnimatePresence) and control it
 * with the `item` prop: { src, alt } | null.
 * Locks body scroll and manages focus while open.
 */
export default function Lightbox({ item, onClose }) {
  const closeBtnRef = useRef(null)
  const restoreFocusRef = useRef(null)

  useEffect(() => {
    if (!item) return

    restoreFocusRef.current = document.activeElement
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()

    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      // primitive focus trap: only the close button is focusable inside
      if (e.key === 'Tab') {
        e.preventDefault()
        closeBtnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
      restoreFocusRef.current?.focus?.()
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className={styles.backdrop}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <motion.div
            className={styles.inner}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <button ref={closeBtnRef} className={styles.close} onClick={onClose} aria-label="Close image viewer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={item.src} alt={item.alt} className={styles.img} />
            {item.alt && <p className={styles.caption}>{item.alt}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
