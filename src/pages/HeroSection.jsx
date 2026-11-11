import { motion } from 'framer-motion'
import styles from './HeroSection.module.css'

/* ─────────────────────────────────────────────
   Floating Heart
   Each heart rises along a slightly randomised
   path near the route arc with a soft repeating
   loop.
   ───────────────────────────────────────────── */
function FloatingHeart({ delay, x, startY, size = 14, duration = 4.5 }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${startY}%`,
        zIndex: 5,
      }}
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 0.85, 0.85, 0],
        y: [0, -40, -80, -120],
        scale: [0.5, 1, 1, 0.6],
        x: [0, 6, -4, 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1.2,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="var(--red)"
        opacity="0.7"
      />
    </motion.svg>
  )
}

/* ─────────────────────────────────────────────
   Heart-shaped Plane Icon (inline SVG)
   ───────────────────────────────────────────── */
function PlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red)">
      <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0011.5 2 1.5 1.5 0 0010 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Route Map SVG
   A stylised arc from Egypt (lower-right)
   to Milano (upper-left) with a smooth
   path-drawing animation.
   ───────────────────────────────────────────── */
function RouteMap() {
  // The curved flight path (cubic bezier from Egypt → Milano)
  const routePath =
    'M 340 200 C 300 140, 200 80, 80 50'

  return (
    <svg
      className={styles.mapSvg}
      viewBox="0 0 420 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle map-like grid dots for aesthetic */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={22 + col * 42}
            cy={20 + row * 32}
            r="1"
            fill="var(--red-pale)"
            opacity="0.25"
          />
        ))
      )}

      {/* Faint decorative coastline hints */}
      <path
        d="M 310 230 Q 350 210 370 240 Q 390 260 420 250"
        stroke="var(--red-pale)"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M 0 90 Q 30 70 60 80 Q 100 95 120 60 Q 140 40 100 20"
        stroke="var(--red-pale)"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
      />

      {/* Dashed guide path (static, subtle) */}
      <path
        d={routePath}
        stroke="var(--red-pale)"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.35"
      />

      {/* Animated main route path */}
      <motion.path
        d={routePath}
        stroke="var(--red)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 2.2, ease: 'easeInOut', delay: 0.5 },
          opacity: { duration: 0.3, delay: 0.5 },
        }}
      />

      {/* Egypt dot */}
      <motion.circle
        cx="340"
        cy="200"
        r="5"
        fill="var(--red-pale)"
        className={styles.cityDot}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      />
      {/* Egypt pulse ring */}
      <motion.circle
        cx="340"
        cy="200"
        r="5"
        fill="none"
        stroke="var(--red-pale)"
        strokeWidth="1.5"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
      />

      {/* Milano dot */}
      <motion.circle
        cx="80"
        cy="50"
        r="6"
        fill="var(--red)"
        className={styles.cityDot}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 200 }}
      />
      {/* Milano pulse ring */}
      <motion.circle
        cx="80"
        cy="50"
        r="6"
        fill="none"
        stroke="var(--red)"
        strokeWidth="1.5"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: 2.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 3 }}
      />

      {/* Plane icon at the end of route */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6, type: 'spring', stiffness: 180 }}
      >
        <g transform="translate(64, 28) scale(0.9) rotate(-30)">
          <path
            d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0011.5 2 1.5 1.5 0 0010 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="var(--red)"
          />
        </g>
      </motion.g>

      {/* City labels */}
      <motion.text
        x="340"
        y="228"
        textAnchor="middle"
        className={`${styles.cityLabel} ${styles.cityLabelEgypt}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Egypt 🇪🇬
      </motion.text>

      <motion.text
        x="80"
        y="80"
        textAnchor="middle"
        className={`${styles.cityLabel} ${styles.cityLabelMilano}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
      >
        Milano 🇮🇹
      </motion.text>
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Hearts config — each heart floats near
   the curved route arc
   ───────────────────────────────────────────── */
const hearts = [
  { delay: 1.0, x: 72, startY: 68, size: 12, duration: 4.0 },
  { delay: 2.0, x: 55, startY: 52, size: 16, duration: 5.0 },
  { delay: 3.2, x: 40, startY: 40, size: 10, duration: 4.2 },
  { delay: 1.8, x: 62, startY: 60, size: 14, duration: 4.8 },
  { delay: 2.8, x: 30, startY: 32, size: 12, duration: 4.5 },
  { delay: 3.8, x: 48, startY: 48, size: 11, duration: 5.2 },
  { delay: 4.5, x: 22, startY: 25, size: 13, duration: 4.0 },
  { delay: 0.5, x: 78, startY: 74, size: 10, duration: 4.6 },
]

/* ─────────────────────────────────────────────
   HeroSection Component
   ───────────────────────────────────────────── */
export default function HeroSection({ onContinue }) {
  return (
    <div className={styles.page}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.dashedTop} />

        <div className={styles.card}>
          {/* Subtitle badge */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            our love story ♡
          </motion.p>

          {/* Map with animated route */}
          <div className={styles.mapContainer}>
            <RouteMap />
            {/* Floating hearts overlay */}
            <div className={styles.heartsOverlay}>
              {hearts.map((h, i) => (
                <FloatingHeart key={i} {...h} />
              ))}
            </div>
          </div>

          {/* Title text */}
          <motion.div
            className={styles.titleGroup}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.6, duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <p className={styles.titleFrom}>from Egypt</p>
            <h1 className={styles.titleTo}>to Milano</h1>
          </motion.div>

          {/* Heart divider */}
          <motion.div
            className={styles.heartDivider}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 3.0, duration: 0.4 }}
          >
            <span className={styles.heartDividerLine} />
            <span>♡</span>
            <span className={styles.heartDividerLine} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            across borders, across skies <br />
            my heart always finds its way to you ♥️
          </motion.p>
        </div>

        <div className={styles.dashedBottom} />

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <button className="btn-return" onClick={onContinue}>
            CONTINUE ♡
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}
