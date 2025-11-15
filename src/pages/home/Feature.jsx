import React from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const Feature = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-100px"
  });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center px-5 text-center bg-lightGray"
    >
      <motion.h1
        className="font-semibold md:text-2xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Bingung Mau Cari UMKM kayak gimana?
      </motion.h1>

      <motion.div
        className="w-20 h-1 bg-accent mx-auto mb-10 rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "center" }}
      />

      <motion.div
        className="bg-gray py-4 px-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xl text-center font-semibold">
          Stop scroll tanpa henti. Cukup deskripsikan apa yang kamu butuhin, dan
          biarkan Gemini memberikan rekomendasi paling personal buat kamu.
        </p>
      </motion.div>

      <a href="/Feature">
        <motion.button
          className="mt-4 py-4 px-8 bg-accent flex items-center gap-x-4 text-light font-semibold rounded-full hover:bg-gray hover:text-accent transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Coba Fitur</span>
          <Sparkles />
        </motion.button>
      </a>
    </section>
  );
};

export default Feature;