import React from 'react'

export const CategoryCard = ({ cat }) => {
    const Icon = cat.icon

    return (
        <div className='
        bg-gray
      relative 
      px-4 py-6 my-4 
      flex flex-col items-center justify-center text-center 
      rounded-2xl shadow-md 
      transition-all duration-300 ease-out 
      hover:-translate-y-2 hover:scale-105 hover:shadow-xl 
      group
    '>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className='p-4 bg-dark rounded-full mb-3 shadow-inner group-hover:shadow-lg transition-all duration-300'>
                    <Icon className='text-4xl text-accent group-hover:text-light transition-colors duration-300' />
                </div>
                <h2 className='text-light font-medium text-lg group-hover:text-light transition-colors duration-300'>
                    {cat.name}
                </h2>
            </div>
        </div>
    )
}
