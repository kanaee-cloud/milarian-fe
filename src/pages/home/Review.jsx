import React from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
    {
        name: "Rina Andriani",
        text: "Gampang banget sekarang nyari UMKM yang ga kesorot.",
        job: "Mahasiswa",
    },
    {
        name: "Rina Andriani",
        text: "Gampang banget sekarang nyari UMKM yang ga kesorot.",
        job: "Mahasiswa",
    },
    {
        name: "Rina Andriani",
        text: "Gampang banget sekarang nyari UMKM yang ga kesorot.",
        job: "Mahasiswa",
    },
];

const Review = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { 
        once: false,
        amount: 0.3
    });

    return (
        <section ref={ref} className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto w-full text-center">
                <motion.h2 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-navy px-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Apa kata mereka?
                </motion.h2>

                <motion.div 
                    className="w-16 sm:w-20 h-1 bg-accent mx-auto mb-8 sm:mb-10 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    style={{ transformOrigin: "center" }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="w-full"
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ 
                            clickable: true,
                            dynamicBullets: true
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { 
                                slidesPerView: 1,
                                spaceBetween: 20 
                            },
                            768: { 
                                slidesPerView: 2,
                                spaceBetween: 25 
                            },
                            1024: { 
                                slidesPerView: 3,
                                spaceBetween: 30 
                            },
                        }}
                        className="pb-12 sm:pb-14"
                    >
                        {reviews.map((review, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-gray/70 rounded-2xl shadow-lg p-5 sm:p-6 mx-2 sm:mx-4 hover:scale-105 transition-transform duration-200 h-full">
                                    <p className="text-sm sm:text-base text-gray-700 italic mb-4 leading-relaxed">
                                        "{review.text}"
                                    </p>
                                    <hr className="border-2 opacity-70 border-accent"/>
                                    <div className="mt-4">
                                        <h3 className="text-navy font-semibold text-base sm:text-lg">{review.name}</h3>
                                        <span className="text-blue text-xs sm:text-sm">{review.job}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default Review;