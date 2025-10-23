import React from "react";
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
    return (
        <section className="min-h-screen" id="review">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-2 text-navy">Apa kata mereka?</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"></div>

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
                    className="pb-12"
                >
                    {reviews.map((review, i) => (
                        <SwiperSlide key={i}>
                            <div className="glass-card rounded-2xl shadow-lg p-6 mx-4 border hover:scale-105 transition-transform duration-200">
                                <p className="text-gray-700 italic mb-4">
                                    “{review.text}”
                                </p>
                                <div className="mt-4">
                                    <h3 className="text-navy font-semibold">{review.name}</h3>
                                    <span className="text-blue text-sm">{review.job}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Review;
