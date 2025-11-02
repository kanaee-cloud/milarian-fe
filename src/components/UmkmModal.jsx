import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Clock, Instagram  } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProductGallery } from "./ProductGallery";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const UmkmModal = ({ umkm, onClose }) => {
  if (!umkm) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-3 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-gray text-light rounded-2xl shadow-xl w-full max-w-2xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 120 }}
        >
          {/* Tombol close */}
          <button
            onClick={onClose}
            className="absolute z-50 bg-accent/80 hover:bg-accent/20 rounded-full top-3 right-3 p-1.5 text-gray-700 hover:text-red-500 transition"
          >
            <X size={20} />
          </button>

          {/* Gambar */}
          <div className="relative mb-5 rounded-xl overflow-hidden h-40 sm:h-56 md:h-64">
            <img
              src={umkm.documentation?.photos?.cover || "/placeholder.jpg"}
              alt={umkm.basicInfo?.businessName || "Foto UMKM"}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Info utama */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">
              {umkm.basicInfo?.businessName}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-accent">
              Rp
              {(umkm.productsAndServices.priceRange.min / 1000).toFixed(0)}K -{" "}
              {(umkm.productsAndServices.priceRange.max / 1000).toFixed(0)}K
            </p>
          </div>

          {/* Deskripsi */}
          <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
            {umkm.basicInfo?.shortDescription}
          </p>

          {/* Target Market */}
          <div className="flex flex-wrap gap-2 mb-4">
            {umkm.productsAndServices.targetMarket.map((market, i) => (
              <span
                key={i}
                className="bg-accent/20 text-accent text-xs sm:text-sm font-medium px-3 py-1 rounded-full"
              >
                {market}
              </span>
            ))}
          </div>

          {/* Info Tambahan */}
          <div className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base mb-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="flex-shrink-0" />
              <span>{umkm.basicInfo?.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="flex-shrink-0" />
              <span>{umkm.operational?.operatingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram  size={16} className="flex-shrink-0" />
              <span>{umkm.marketingAndDigital?.socialMedia?.instagram}</span>
            </div>
          </div>


          {umkm.documentation?.product?.length > 0 && (
            <ProductGallery images={umkm.documentation.product} />
          )}

          <div className="mb-4 mt-4">
            <h1 className="font-semibold md:text-xl">Lokasi</h1>
          </div>
          {umkm.basicInfo?.googleMapsLink && (
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-300">
              <iframe
                src={umkm.basicInfo.googleMapsLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
