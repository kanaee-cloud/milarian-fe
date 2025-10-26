import React from 'react'
import ActionSelector from '../../components/ActionSelector'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex justify-left px-8 items-center bg-hero bg-cover bg-center  my-6 rounded-2xl overflow-hidden mt-11">
      <div className="absolute inset-0 bg-black/60"></div>


      <div className="relative z-10 text-light">
        <div className='mb-6'>
            <h1 className="md:text-4xl text-xl font-bold text-left">Milarian: Apa yang kamu Cari? <br />Temukan UMKM Terbaik di Sini.</h1>
        </div>
        <div className="glass-card px-6 py-8 rounded-2xl max-w-xl">
          <ActionSelector />
        </div>
      </div>
    </section>
  )
}

export default Hero
