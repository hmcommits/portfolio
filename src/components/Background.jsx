import styles from './Background.module.css'

export default function Background() {
  return (
    <div className={styles.bgContainer} aria-hidden="true">
      <div className={styles.dotGrid} />
    </div>
  )
}
