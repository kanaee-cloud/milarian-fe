import React, { useMemo, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useSearch } from "../context/SearchContext";
import { useUmkm } from "../hooks/useUmkm";
import { UmkmCard } from "../components/UmkmCard";
import SearchBar from "../components/search/SearchBar";
import { UmkmFilter } from "../components/UmkmFIlter";

// Component wrapper untuk setiap card dengan scroll animation
const AnimatedCardWrapper = ({ umkm }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.1, // Lebih sensitif, trigger saat 10% terlihat
    margin: "100px 0px 100px 0px" // Margin lebih besar untuk deteksi lebih awal
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeInOut" 
      }}
    >
      <UmkmCard umkm={umkm} />
    </motion.div>
  );
};

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
      <motion.h1 
        className="text-3xl font-bold text-center mb-5 text-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Daftar UMKM
      </motion.h1>

      <motion.div 
        className="w-full max-w-md mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari UMKM..."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <UmkmFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </motion.div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 text-primary mt-8 w-full">
        {filteredUmkm.length > 0 ? (
          filteredUmkm.map((umkm, i) => (
            <AnimatedCardWrapper 
              key={`${selectedCategory}-${searchQuery}-${umkm.basicInfo.businessName}-${i}`}
              umkm={umkm}
            />
          ))
        ) : (
          <motion.p 
            className="text-light/70 col-span-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            UMKM tidak ditemukan.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Umkm;