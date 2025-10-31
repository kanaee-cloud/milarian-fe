import React, { useMemo, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useUmkm } from "../hooks/useUmkm";
import { UmkmCard } from "../components/UmkmCard";
import SearchBar from "../components/search/SearchBar";
import { UmkmFilter } from "../components/UmkmFIlter";


const Umkm = () => {
  const { umkmList } = useUmkm();
  const { searchQuery, setSearchQuery } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredUmkm = useMemo(() => {
    const lower = searchQuery.toLowerCase();

    return umkmList.filter((u) => {
      const matchSearch = u.basicInfo.businessName.toLowerCase().includes(lower);
      const matchCategory =
        selectedCategory === "Semua" ||
        u.productsAndServices.category.toLowerCase() ===
          selectedCategory.toLowerCase();

      return matchSearch && matchCategory;
    });
  }, [umkmList, searchQuery, selectedCategory]);

  return (
    <section className="min-h-screen flex flex-col items-center px-5 mt-14 mb-10">
      <h1 className="text-3xl font-bold text-center mb-5 text-light">
        Daftar UMKM
      </h1>


      <div className="w-full max-w-md mb-6">
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari UMKM..."
        />
      </div>

      <UmkmFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />


      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-primary">
        {filteredUmkm.length > 0 ? (
          filteredUmkm.map((umkm, i) => <UmkmCard key={i} umkm={umkm} />)
        ) : (
          <p className="text-light/70">UMKM tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default Umkm;
