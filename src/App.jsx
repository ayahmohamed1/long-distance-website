import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import content from './content.js'
import MusicToggle from './components/MusicToggle.jsx'
import HeroSection  from './pages/HeroSection.jsx'
import MemoriesPage from './pages/MemoriesPage.jsx'
import FlowersPage  from './pages/FlowersPage.jsx'
import SongPage     from './pages/SongPage.jsx'
import LetterPage   from './pages/LetterPage.jsx'

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit:    { opacity: 0 },
  transition: { duration: 0.35 },
}

export default function App() {
  const [page, setPage] = useState('hero')

  const go   = (p) => setPage(p)

  return (
    <>
      <MusicToggle src={content.music} />

      <AnimatePresence mode="wait">
        <motion.div key={page} {...fade}>

          {page === 'hero' && (
            <HeroSection
              onContinue={() => go('memories')}
            />
          )}

          {page === 'memories' && (
            <MemoriesPage
              onContinue={() => go('letter')}
              content={content}
            />
          )}

          {page === 'flowers' && (
            <FlowersPage content={content} />
          )}

          {page === 'song' && (
            <SongPage
              onContinue={() => go('flowers')}
              content={content}
            />
          )}

          {page === 'letter' && (
            <LetterPage
              onContinue={() => go('song')}
              content={content}
            />
          )}

        </motion.div>
      </AnimatePresence>
    </>
    
  )
}
