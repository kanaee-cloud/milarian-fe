import { section } from "framer-motion/client";
import { UmkmCard } from "../../components/UmkmCard";
import { useUmkm } from "../../hooks/useUmkm";

const UmkmList = () => {
  const { umkmList } = useUmkm();

  // if (isLoading) return <p className="text-light">Memuat data UMKM...</p>;
  // if (error) return <p className="text-red-400">Gagal memuat data.</p>;

  return (
    <section className="min-h-screen ">
      <h2 className="text-3xl font-bold mb-2 text-navy text-center">Lagi rame nih di Bandung</h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-primary">
        {umkmList.map((umkm, i) => (
          <UmkmCard key={i} umkm={umkm} />
        ))}
      </div>
    </section>

  );
};

export default UmkmList;
