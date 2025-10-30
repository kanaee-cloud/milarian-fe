import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock } from "lucide-react";

export const UmkmModal = ({ umkm, onClose }) => {
  if (!umkm) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-gray rounded-2xl shadow-xl w-[90%] max-w-2xl p-6 overflow-y-auto max-h-[85vh]"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 120 }}
        >

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 bg-accent z-50 rounded-lg transition"
          >
            <X size={22} />
          </button>

          {/* Gambar */}
          <div className="w-full h-48 rounded-xl bg-hero bg-cover bg-center mb-4 relative">
            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          </div>

          {/* Nama & Harga */}
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-2xl font-bold text-gray-800">
              {umkm.basicInfo.businessName}
            </h2>
            <p className="text-lg font-semibold text-accent">
              Rp{(umkm.productsAndServices.priceRange.min / 1000).toFixed(0)}K -{" "}
              {(umkm.productsAndServices.priceRange.max / 1000).toFixed(0)}K
            </p>
          </div>

          {/* Deskripsi */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {umkm.basicInfo.shortDescription}
          </p>

          {/* Target Market */}
          <div className="flex flex-wrap gap-2 mb-4">
            {umkm.productsAndServices.targetMarket.map((market, i) => (
              <span
                key={i}
                className="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full"
              >
                {market}
              </span>
            ))}
          </div>

          {/* Info Lokasi & Jam Operasional */}
          <div className="flex flex-col gap-3 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{umkm.basicInfo.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{umkm.operational.operatingHours}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
