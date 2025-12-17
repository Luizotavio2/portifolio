import { Project } from "@/types";

// Base project data (non-translatable fields)
export const projectsData = [
  {
    techs: ["Express", "APIs", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Luizotavio2/infobip-kpi-monitor",
    demo: "https://infobip-kpi-monitor.onrender.com/",
  },
  {
    techs: ["Next.js", "React", "Framer Motion", "TypeScript"],
    github: "https://github.com/Luizotavio2/portifolio",
    demo: "https://portifolio-xi-five-41.vercel.app/",
  },
  {
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Luizotavio2/catalogo-tati",
    demo: "https://catalogo-tati.vercel.app/",
  },
];

export function getTranslatedProjects(translations: { projects: { list: Array<{ title: string; description: string }> } }): Project[] {
  return translations.projects.list.map((project, index) => ({
    ...projectsData[index],
    title: project.title,
    description: project.description,
  }));
}

