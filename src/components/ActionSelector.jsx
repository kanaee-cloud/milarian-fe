import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react"; // ikon dari lucide-react

const ActionSelector = () => {
  const [mode, setMode] = useState("search");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    console.log("Searching for:", query);
  };

  return (
    <div className="w-full text-center text-light">
      <h2 className="text-lg mb-4 font-semibold">Mau Ngapain hari ini?</h2>


      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setMode("search")}
          className={`px-4 py-2 rounded-xl transition-all duration-200 ${
            mode === "search"
              ? "bg-accent text-light font-bold"
              : "bg-transparent border border-accent text-light hover:bg-accent/20"
          }`}
        >
          Cari UMKM
        </button>

        <button
          onClick={() => setMode("redirect")}
          className={`px-4 py-2 rounded-xl transition-all duration-200 ${
            mode === "redirect"
              ? "bg-accent text-light font-bold"
              : "bg-transparent border border-accent text-light hover:bg-accent/20"
          }`}
        >
          Kunjungi Halaman
        </button>
      </div>


      <div className="relative overflow-hidden h-20">
        <AnimatePresence mode="wait">
          {mode === "search" ? (
            <motion.div
              key="search"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative flex justify-center"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Coba jelasin kamu lagi pengen apa"
                className="w-full px-4 py-4 pr-12 rounded-full bg-light/10 border border-light/20 focus:outline-none text-light placeholder:text-light/50"
              />


              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-accent text-primary hover:scale-105 transition-transform duration-200"
              >
                <Search size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="redirect"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <button
                onClick={() => (window.location.href = "/umkm")}
                className="bg-accent text-primary font-semibold px-6 py-2 rounded-xl hover:scale-105 transition-transform duration-200"
              >
                Lihat Semua UMKM
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ActionSelector;
