import { motion } from 'framer-motion'
import styles from './FlowersPage.module.css'

export default function FlowersPage({ content }) {
  const f = content.flowers
  const middle = Math.ceil(f.poems.length / 2)
  const leftPoems = f.poems.slice(0, middle)
  const rightPoems = f.poems.slice(middle)

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <h1 className={styles.title} dir="auto">{f.title}</h1>

        <div className={styles.layout}>
          <div className={styles.poemCol}>
            {leftPoems.map((message, i) => (
              <motion.div
                key={i}
                className={styles.message}
                dir="auto"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {message}
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.flowerCenter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 140, damping: 16 }}
          >
            <motion.img
              src="/images/hello-kitty-flowers.jpg"
              alt="Hello Kitty with flowers"
              className={styles.flowerSticker}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className={styles.flowerName} dir="auto">{f.flowerName}</span>
            <span className={styles.flowerSubtitle} dir="auto">{f.flowerSubtitle}</span>
          </motion.div>

          <div className={styles.poemCol}>
            {rightPoems.map((message, i) => (
              <motion.div
                key={middle + i}
                className={styles.message}
                dir="auto"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {message}
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.dashedBottom} />

      </div>
    </div>
  )
}
