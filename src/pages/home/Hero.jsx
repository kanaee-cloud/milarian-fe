import React from 'react'
import { motion, useInView } from 'framer-motion'
import ActionSelector from '../../components/ActionSelector'

const Hero = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: false, // Animasi akan trigger setiap kali masuk viewport
    amount: 0.3 // Trigger saat 30% element terlihat
  })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex justify-left px-8 items-center bg-hero bg-cover bg-center my-6 rounded-2xl overflow-hidden mt-11"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-light">
        <motion.div 
          className='mb-6'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="md:text-4xl text-xl font-bold text-left">
            Milarian: Apa yang kamu Cari? <br />
            Temukan UMKM Terbaik di Sini.
          </h1>
        </motion.div>

        <motion.div 
          className="glass-card px-6 py-8 rounded-2xl max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <ActionSelector />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero