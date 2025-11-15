import React from 'react'
import { motion, useInView } from 'framer-motion'
import { UmkmCard } from '../../components/UmkmCard'
import { useUmkm } from '../../hooks/useUmkm'
import { MoveRight } from 'lucide-react'

const UmkmList = () => {
  const { umkmList } = useUmkm()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.3
  })

  const [displayedText, setDisplayedText] = React.useState('')
  const [typingComplete, setTypingComplete] = React.useState(false)
  const [showLine, setShowLine] = React.useState(false)
  const fullText = "Lagi rame nih di Bandung"

  React.useEffect(() => {
    if (isInView) {
      setDisplayedText('')
      setTypingComplete(false)
      setShowLine(false)
      
      // Munculkan garis setelah beberapa karakter terketik
      const lineTimer = setTimeout(() => {
        setShowLine(true)
      }, 300) // Garis muncul setelah 300ms typing dimulai
      
      let currentIndex = 0
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setTypingComplete(true)
        }
      }, 40)

      return () => {
        clearInterval(typingInterval)
        clearTimeout(lineTimer)
      }
    } else {
      setDisplayedText('')
      setTypingComplete(false)
      setShowLine(false)
    }
  }, [isInView])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="min-h-screen mb-5">
      <motion.div
        initial={{ y: '40vh' }}
        animate={typingComplete ? { y: 0 } : { y: '40vh' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl font-bold mb-2 text-navy text-center min-h-[2.5rem]">
          {displayedText}
          {isInView && !typingComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block"
            >
              |
            </motion.span>
          )}
        </h2>
        
        <motion.div 
          className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={showLine ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center" }}
        />
      </motion.div>

      <motion.button 
        className="flex justify-center items-end bg-dark/70 px-4 rounded-xl hover:scale-110 transition-all duration-500 py-2"
        initial={{ opacity: 0, x: -20 }}
        animate={typingComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="/umkm" className="text-accent flex items-center gap-1 font-medium hover:underline">
          <span>Selengkapnya</span>
          <MoveRight />
        </a>
      </motion.button>

      <motion.div 
        className="grid grid-cols-1 mt-5 sm:grid-cols-3 gap-4 place-items-center text-primary"
        variants={container}
        initial="hidden"
        animate={typingComplete ? "show" : "hidden"}
      >
        {umkmList.slice(0, 3).map((umkm, i) => (
          <motion.div key={i} variants={item}>
            <UmkmCard umkm={umkm} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default UmkmList