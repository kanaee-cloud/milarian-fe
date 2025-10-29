  // import { section } from "framer-motion/client";
  import { UmkmCard } from '../../components/UmkmCard'
  import { useUmkm } from '../../hooks/useUmkm'
  import { MoveRight } from 'lucide-react';

  const UmkmList = () => {
    const { umkmList } = useUmkm()

    // if (isLoading) return <p className="text-light">Memuat data UMKM...</p>;
    // if (error) return <p className="text-red-400">Gagal memuat data.</p>;

    return (
      <section className="min-h-screen mb-5">
        <h2 className="text-3xl font-bold mb-2 text-navy text-center">
          Lagi rame nih di Bandung
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>
        <button className=" flex justify-center items-end bg-dark/70 px-4 rounded-xl hover:scale-110 transition-all duration-500 py-2">
          <a href="/umkm" className=" text-accent flex items-center  gap-1 font-medium hover:underline">
            <span>Selengkapnya</span>
            <MoveRight />
          </a>
        </button>
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-3 gap-4 place-items-center text-primary">
          {umkmList.slice(0, 3).map((umkm, i) => (
            <UmkmCard key={i} umkm={umkm} />
          ))}
        </div>
      </section>
    )
  }

  export default UmkmList
