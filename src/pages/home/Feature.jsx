import { section } from 'framer-motion/client'
import { Sparkles } from 'lucide-react'
import React from 'react'

const Feature = () => {
    return (
        <section className='min-h-screen flex flex-col justify-center items-center px-5 text-center bg-lightGray'>
            <h1 className='font-semibold md:text-2xl mb-4'>Bingung Mau Cari UMKM kayak gimana?</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>
            <div className=' bg-gray py-4 px-8 rounded-lg shadow-xl'>
                <p className='text-xl text-center font-semibold'>
                    Stop scroll tanpa henti. Cukup deskripsikan apa yang kamu butuhin, dan biarkan Gemini memberikan rekomendasi paling personal buat kamu.
                </p>
            </div>
            <button className='mt-4 py-2 px-4 bg-accent flex items-center gap-x-4 text-dark font-semibold rounded-full hover:bg-gray hover:text-accent transition-all duration-500'>

                <span>
                    Coba Fitur
                </span>
                <Sparkles />
            </button>
        </section>
    )
}

export default Feature