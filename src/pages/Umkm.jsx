import React, { useState, useMemo } from "react";
import { useUmkm } from "../hooks/useUmkm";
import { UmkmCard } from "../components/UmkmCard";
import { UmkmFilter } from "../components/UmkmFIlter";


const Umkm = () => {
  const { umkmList } = useUmkm();
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredUmkm = useMemo(() => {
    if (selectedCategory === "Semua") return umkmList;
    return umkmList.filter(
      (u) => u.productsAndServices.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [umkmList, selectedCategory]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-5 mb-10 mt-14">
      <h1 className="text-3xl font-bold text-center mb-5 text-navy">Daftar UMKM</h1>
      <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>


      <UmkmFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 mt-5 sm:grid-cols-3 gap-8 place-items-center text-primary">
        {filteredUmkm.length > 0 ? (
          filteredUmkm.map((umkm, i) => <UmkmCard key={i} umkm={umkm} />)
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Tidak ada UMKM dalam kategori ini.
          </p>
        )}
      </div>
    </section>
  );
};

export default Umkm;
