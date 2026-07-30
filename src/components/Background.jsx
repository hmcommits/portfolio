import styles from './Background.module.css'

const PARTICLES = [
  { size: 3, color: '#6c63ff', top: '15%', left: '20%', dur: '14s', delay: '0s' },
  { size: 4, color: '#00d4ff', top: '60%', left: '75%', dur: '11s', delay: '2s' },
  { size: 2, color: '#ff6b9d', top: '35%', left: '55%', dur: '16s', delay: '4s' },
  { size: 5, color: '#ffd166', top: '80%', left: '30%', dur: '13s', delay: '1s' },
  { size: 3, color: '#00d4ff', top: '25%', left: '85%', dur: '10s', delay: '6s' },
  { size: 2, color: '#6c63ff', top: '70%', left: '10%', dur: '15s', delay: '3s' },
]

export default function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.bgGradient} />
      <div className={styles.particles}>
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              top: p.top,
              left: p.left,
              '--dur': p.dur,
              '--delay': p.delay,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
