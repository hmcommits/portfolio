import { useEffect, useState } from 'react'

const WORDS = ['Developer', 'Problem Solver', 'Tech Enthusiast']
const TYPE_SPEED = 80
const DELETE_SPEED = 45
const PAUSE_AFTER_TYPE = 1600
const PAUSE_AFTER_DELETE = 400

export default function useTypewriter() {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'pausing' | 'deleting' | 'waiting'

  useEffect(() => {
    const word = WORDS[wordIndex]

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), TYPE_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setWordIndex((i) => (i + 1) % WORDS.length)
          setPhase('typing')
        }, PAUSE_AFTER_DELETE)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, phase, wordIndex])

  return displayed
}
