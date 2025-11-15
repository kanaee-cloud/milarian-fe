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
        <section ref={ref} className="min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2 
                    className="text-3xl font-bold mb-2 text-navy"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Apa kata mereka?
                </motion.h2>

                <motion.div 
                    className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 80 } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-12 h-full"
                    >
                        {reviews.map((review, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-gray/70 rounded-2xl shadow-lg p-6 mx-4 hover:scale-105 transition-transform duration-200">
                                    <p className="text-gray-700 italic mb-4">
                                        "{review.text}"
                                    </p>
                                    <hr className="border-2 opacity-70 border-accent"/>
                                    <div className="mt-4">
                                        <h3 className="text-navy font-semibold">{review.name}</h3>
                                        <span className="text-blue text-sm">{review.job}</span>
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