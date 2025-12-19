"use client";
import { motion } from "framer-motion";
import { getTranslatedProjects } from "@/lib/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard from "./ProjectCard";
import { Code2, Server } from "lucide-react";

export default function ProjectGrid() {
  const { language, t } = useLanguage();
  const projects = getTranslatedProjects(language);

  // Group projects by type
  const frontendProjects = projects.filter((p) => p.type === 'frontend');
  const backendProjects = projects.filter((p) => p.type === 'backend');
  const fullstackProjects = projects.filter((p) => p.type === 'fullstack');

  const renderProjectSection = (
    title: string,
    projects: typeof frontendProjects,
    icon: React.ReactNode,
    borderColor: string,
    bgColor: string,
    iconColor: string,
    index: number
  ) => {
    if (projects.length === 0) return null;

    return (
      <motion.div
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="mb-16"
      >
        {/* Section Header */}
        <div className={`flex items-center gap-4 mb-10 pb-5 border-b-2 ${borderColor} relative`}>
          <div className={`p-3 rounded-xl shadow-sm ${bgColor}`}>
            {icon}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{title}</h2>
            <p className="text-neutral-600 text-sm font-medium">
              {projects.length} {projects.length === 1 ? t.projects.project : t.projects.projects}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, projectIndex) => (
            <ProjectCard
              key={projectIndex}
              project={project}
              index={projectIndex}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-16">
      {renderProjectSection(
        t.projects.fullstack,
        fullstackProjects,
        <Code2 size={28} className="text-blue-600" />,
        "border-blue-500",
        "bg-blue-100",
        "text-blue-600",
        0
      )}
      {renderProjectSection(
        t.projects.frontend,
        frontendProjects,
        <Code2 size={28} className="text-purple-600" />,
        "border-purple-500",
        "bg-purple-100",
        "text-purple-600",
        1
      )}
      {renderProjectSection(
        t.projects.backend,
        backendProjects,
        <Server size={28} className="text-green-600" />,
        "border-green-500",
        "bg-green-100",
        "text-green-600",
        2
      )}
    </div>
  );
}

