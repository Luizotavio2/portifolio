"use client";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:border-neutral-300 transition-all duration-300 group shadow-sm"
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-neutral-600 mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech, i) => (
            <span
              key={i}
                  className="bg-neutral-100 text-sm px-3 py-1 rounded-full text-neutral-700 border border-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

            <div className="flex gap-4 pt-4 border-t border-neutral-200">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
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
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

