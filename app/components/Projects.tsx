"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Painel de Tickets Infobip",
    description:
      "Dashboard interativo em html, css, javaScrip para front, e axios e express para back. A aplicação realiza o monitoramento de tickets e SLAs. Filtros por semana, mês e dia.",
    techs: ["Express", "APIs", "html/css"],
    github: "https://github.com/Luizotavio2/infobip-kpi-monitor",
    demo: "https://infobip-kpi-monitor.onrender.com/",
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Este próprio portfólio desenvolvido em Next.js com tema escuro, animações suaves e design responsivo.",
    techs: ["Next.js", "React", "Framer Motion"],
    github: "https://github.com/Luizotavio2/portifolio",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-neutral-950 text-neutral-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-green-400 mb-12"
      >
        Projetos
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-900 rounded-2xl shadow-lg p-6 hover:shadow-green-500/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                {proj.title}
              </h3>
              <p className="text-neutral-400 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 text-sm px-3 py-1 rounded-full text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition"
                >
                  <Github size={20} /> Código
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-400 transition"
                >
                  <ExternalLink size={20} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
