"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-neutral-950 text-neutral-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-green-400 mb-8"
      >
        Sobre mim
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center text-lg md:text-xl leading-relaxed"
      >
        Olá, eu me chamo <span className="text-green-400 font-semibold">Luiz</span>. Trabalho com 
        <span className="text-green-400"> desenvolvimento de aplicações</span> automação e design de sistemas eficientes.  
        Busco unir visão tradicional e pensamento inovador para criar soluções que realmente façam a diferença.
      </motion.p>
    </section>
  );
}
