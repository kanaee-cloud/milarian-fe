import React from 'react'
import { AiSearch } from '../components/AiSearch'

const AiFeature = () => {
    return (
        <section className="min-h-screen mt-16 px-5">
            <h1 className="text-2xl font-bold text-center mb-5">Mau cari UMKM kayak gimana?</h1>
            <div className='w-20 bg-accent h-1 flex justify-center items-center mx-auto'></div>
            <AiSearch />
        </section>
    )
}

export default AiFeature