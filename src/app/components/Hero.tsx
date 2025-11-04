"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-green-400 mb-4"
      >
        Olá, eu sou Luiz 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-xl text-neutral-400 max-w-2xl"
      >
        Desenvolverdor web focado em criar experiências digitais incríveis.
        Bem-vindo ao meu portfólio!
      </motion.p>
    </section>
  );
}
