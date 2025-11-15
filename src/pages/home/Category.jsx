import React from 'react'
import { motion, useInView } from 'framer-motion'
import { CategoryCard } from '../../components/CategoryCard'
import { Handbag, HardHat, Pickaxe, Utensils } from 'lucide-react'

const Category = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.2
  })

  const category = [
    {
      name: "Kuliner",
      icon: Utensils 
    },
    {
      name: "Fashion",
      icon: Handbag 
    },
    {
      name: "Kriya",
      icon: Pickaxe 
    },
    {
      name: "Jasa",
      icon: HardHat 
    },
    {
      name: "Jasa",
      icon: HardHat 
    },
    {
      name: "Jasa",
      icon: HardHat 
    },
    {
      name: "Jasa",
      icon: HardHat 
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Delay 0.1s antar item (cepat & smooth)
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
    <section ref={ref} className='min-h-screen text-light'>
        <motion.h1 
          className='font-semibold text-2xl'
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Emang ada UMKM apa aja?
        </motion.h1>
        
        <motion.div 
          className='grid grid-cols-2 md:grid-cols-4 gap-4'
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {category.map((cat, index) => (
            <motion.div key={index} variants={item}>
              <CategoryCard cat={cat}/>
            </motion.div>
          ))}
        </motion.div>
    </section>
    </>
  )
}

export default Category