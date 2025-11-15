import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock, Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProductGallery } from "./ProductGallery";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const UmkmModal = ({ umkm, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi selesai sebelum close
    setTimeout(() => {
      onClose();
    }, 300); // Sesuaikan dengan durasi exit animation
  };

  if (!umkm) return null;

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-3 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose} // Close saat klik backdrop
        >
          <motion.div
            className="relative bg-gray text-light rounded-2xl shadow-xl w-full max-w-2xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent close saat klik modal content
          >
            {/* Tombol close */}
            <motion.button
              onClick={handleClose}
              className="absolute z-50 bg-accent/80 hover:bg-accent rounded-full top-3 right-3 p-1.5 text-light hover:text-red-500 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.button>

            {/* Gambar */}
            <motion.div
              className="relative mb-5 rounded-xl overflow-hidden h-40 sm:h-56 md:h-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <img
                src={umkm.documentation?.photos?.cover || "/placeholder.jpg"}
                alt={umkm.basicInfo?.businessName || "Foto UMKM"}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>

            {/* Info utama */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
                {umkm.basicInfo?.businessName}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-accent">
                Rp
                {(umkm.productsAndServices.priceRange.min / 1000).toFixed(0)}K -{" "}
                {(umkm.productsAndServices.priceRange.max / 1000).toFixed(0)}K
              </p>
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {umkm.basicInfo?.shortDescription}
            </motion.p>

            {/* Target Market */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              {umkm.productsAndServices.targetMarket.map((market, i) => (
                <span
                  key={i}
                  className="bg-accent/20 text-accent text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
                >
                  {market}
                </span>
              ))}
            </motion.div>

            {/* Info Tambahan */}
            <motion.div
              className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="flex-shrink-0" />
                <span>{umkm.basicInfo?.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="flex-shrink-0" />
                <span>{umkm.operational?.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram size={16} className="flex-shrink-0" />
                <span>{umkm.marketingAndDigital?.socialMedia?.instagram}</span>
              </div>
            </motion.div>

            {umkm.documentation?.product?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <ProductGallery images={umkm.documentation.product} />
              </motion.div>
            )}

            <motion.div
              className="mb-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 className="font-semibold md:text-xl">Lokasi</h1>
            </motion.div>

            {umkm.basicInfo?.googleMapsLink && (
              <motion.div
                className="w-full aspect-video rounded-xl overflow-hidden border border-gray-300"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <iframe
                  src={umkm.basicInfo.googleMapsLink}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};