"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-neutral-950 text-neutral-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-green-400 mb-8"
      >
        Contato
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center text-lg md:text-xl mb-12"
      >
        Ficarei feliz em conversar sobre oportunidades, colaborações ou ideias.  
        Você pode me encontrar nas redes abaixo ou enviar um e-mail diretamente.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8 text-neutral-400">
        <motion.a
          href="mailto:luiz.otav.2009@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <Mail size={40} />
          <span className="mt-2">E-mail</span>
        </motion.a>

        <motion.a
          href="https://github.com/Luizotavio2"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <Github size={40} />
          <span className="mt-2">GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/luiz-otavio-silva"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <Linkedin size={40} />
          <span className="mt-2">LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://wa.me/5519982135576"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center hover:text-green-400 transition"
        >
          <MessageCircle size={40} />
          <span className="mt-2">WhatsApp</span>
        </motion.a>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-sm text-neutral-500"
      >
        © {new Date().getFullYear()} Todos os direitos reservados.
      </motion.footer>
    </section>
  );
}
