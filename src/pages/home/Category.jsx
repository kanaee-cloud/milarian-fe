import React from 'react'
import { CategoryCard } from '../../components/CategoryCard'
import { Handbag, HardHat, Pickaxe, Utensils } from 'lucide-react'

const Category = () => {

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
    // {
    //   name: "Agribisnis",
    //   img: ""
    // },
    // {
    //   name: "Perdagangan",
    //   img: ""
    // },
  ]

  return (
    <section className='min-h-screen  text-primary'>
        <h1 className='font-semibold text-2xl'>Emang ada UMKM apa aja?</h1>
        <div className='grid grid-cols-4 gap-4'>
        {category.map((cat, index) => (
           <CategoryCard key={index} cat={cat}/>
        ))}
        </div>
    </section>
  )
}

export default Category