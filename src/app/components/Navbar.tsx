"use client";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-neutral-900/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center p-5">
        <a href="#hero"><h1 className="text-xl font-bold text-green-400">luiz.dev</h1></a>
        <Menu className="text-neutral-300 md:hidden" />
        <ul className="hidden md:flex space-x-5 text-neutral-300">
          <li><a href="#hero" className="hover:text-green-300">Home</a></li>
          <li><a href="#about" className="hover:text-green-300">Sobre</a></li>
          <li><a href="#skills" className="hover:text-green-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-green-300">Projetos</a></li>
          <li><a href="#contact" className="hover:text-green-300">Contato</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}
