import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ProductGallery = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Galeri Produk</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-xl product-gallery"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative group rounded-xl overflow-hidden">
              <img
                src={src}
                alt={`Produk ${i + 1}`}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};
