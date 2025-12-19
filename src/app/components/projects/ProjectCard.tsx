"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-all duration-300 group shadow-md hover:shadow-xl flex flex-col"
    >
      {/* Project Image - Destaque */}
      {project.image && (
        <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-neutral-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Title overlay on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>
      )}
      
      <div className="p-6 h-full flex flex-col">
        {!project.image && (
          <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
            {project.title}
          </h3>
        )}
        {project.image && (
          <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
            {project.title}
          </h3>
        )}
        
        <p className="text-neutral-600 mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech, i) => (
            <span
              key={i}
              className="bg-neutral-100 text-xs px-2.5 py-1 rounded-full text-neutral-700 border border-neutral-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4 mt-auto border-t border-neutral-200">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded"
              aria-label={`Ver código do projeto ${project.title}`}
            >
              <Github size={20} />
              <span>{t.projects.code}</span>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 rounded"
              aria-label={`Ver demo do projeto ${project.title}`}
            >
              <ExternalLink size={20} />
              <span>{t.projects.demo}</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

