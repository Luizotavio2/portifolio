"use client";
import { getTranslatedProjects } from "@/lib/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const { t } = useLanguage();
  const projects = getTranslatedProjects(t);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}

