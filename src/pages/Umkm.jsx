import React, { useState, useMemo } from "react";
import { useUmkm } from "../hooks/useUmkm";
import { UmkmCard } from "../components/UmkmCard";
import { UmkmFilter } from "../components/UmkmFilter";
import { UmkmModal } from "../components/UmkmModal";

const Umkm = () => {
  const { umkmList } = useUmkm();
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedUmkm, setSelectedUmkm] = useState(null);

  const filteredUmkm = useMemo(() => {
    if (selectedCategory === "Semua") return umkmList;
    return umkmList.filter(
      (u) =>
        u.productsAndServices.category.toLowerCase() ===
        selectedCategory.toLowerCase()
    );
  }, [umkmList, selectedCategory]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-5 mb-10 mt-14">
      <h1 className="text-3xl font-bold text-center mb-5 text-navy">
        Daftar UMKM
      </h1>
      <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>

      <UmkmFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 sm:grid-cols-2 gap-8 place-items-center text-primary">
        {filteredUmkm.length > 0 ? (
          filteredUmkm.map((umkm, i) => (
            <UmkmCard key={i} umkm={umkm} onDetail={setSelectedUmkm} />
          ))
        ) : (
          <section className="min-h-screen text-center flex flex-col justify-center items-center col-span-full">
            <p className="text-light text-center col-span-full">
              Tidak ada Kategori UMKM
            </p>
          </section>
        )}
      </div>

      <UmkmModal umkm={selectedUmkm} onClose={() => setSelectedUmkm(null)} />
    </section>
  );
};

export default Umkm;
