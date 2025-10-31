import React, { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useUmkm } from "../hooks/useUmkm";
import { UmkmCard } from "../components/UmkmCard";
import SearchBar from "../components/search/SearchBar";

const Umkm = () => {
  const { umkmList } = useUmkm(); 
  const { searchQuery, setSearchQuery } = useSearch();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const lower = searchQuery.toLowerCase();
    const result = umkmList.filter((item) =>
      item.basicInfo.businessName.toLowerCase().includes(lower)
    );
    setFiltered(result);
  }, [searchQuery, umkmList]);

  return (
    <section className="min-h-screen flex flex-col items-center px-5 mt-14 mb-10">
      <h1 className="text-3xl font-bold text-center mb-5 text-light">
        Daftar UMKM
      </h1>

      <div className="w-full max-w-md mb-8">
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={() => {}}
          placeholder="Cari UMKM..."
        />
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-primary">
        {filtered.length > 0 ? (
          filtered.map((umkm, i) => <UmkmCard key={i} umkm={umkm} />)
        ) : (
          <p className="text-light/70">UMKM tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default Umkm;
