import styles from './Background.module.css'

export default function Background() {
  return (
    <div className={styles.bgContainer} aria-hidden="true">
      <div className={styles.gridOverlay} />
      <div className={styles.glowPoint1} />
      <div className={styles.glowPoint2} />
    </div>
  )
}
