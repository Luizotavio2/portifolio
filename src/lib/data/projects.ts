import { Project } from "@/types";

// Project data with translations
export const projectsData = [
  {
    techs: ["Express", "APIs", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Luizotavio2/infobip-kpi-monitor",
    demo: "https://infobip-kpi-monitor.onrender.com/",
    image: "/infobip.png",
    type: "fullstack" as const,
    title: {
      pt: "Painel de Tickets Infobip",
      en: "Infobip Tickets Dashboard",
    },
    description: {
      pt: "Dashboard interativo em HTML, CSS e JavaScript para o frontend, e axios e express para o backend. A aplicação realiza o monitoramento de tickets e SLAs com filtros por semana, mês e dia.",
      en: "Interactive dashboard built with HTML, CSS, JavaScript for the frontend, and axios and express for the backend. The application monitors tickets and SLAs with filters for week, month, and day.",
    },
  },
  {
    techs: ["Next.js", "React", "Framer Motion", "TypeScript"],
    github: "https://github.com/Luizotavio2/landinpage-camilla",
    demo: "https://landinpage-camilla.vercel.app/",
    image: "/pagina-cammila.png",
    type: "frontend" as const,
    title: {
      pt: "Landing Page Camilla",
      en: "Camilla Landing Page",
    },
    description: {
      pt: "Landing page desenvolvida em Next.js com tema limpo, animações suaves e design responsivo.",
      en: "Landing page developed with Next.js featuring a clean theme, smooth animations, and responsive design.",
    },
  },
  {
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Luizotavio2/catalogo-tati",
    demo: "https://catalogo-tati.vercel.app/",
    image: "/pagina-afiliada.png",
    type: "frontend" as const,
    title: {
      pt: "Landing Page de Afiliado",
      en: "Affiliate Landing Page",
    },
    description: {
      pt: "Landing page desenvolvida para promover produtos como afiliado, com design atraente e otimizado para conversão.",
      en: "Landing page developed to promote products as an affiliate, with attractive design optimized for conversion.",
    },
  },
];

export function getTranslatedProjects(language: 'pt' | 'en'): Project[] {
  return projectsData.map((project) => ({
    techs: project.techs,
    github: project.github,
    demo: project.demo,
    image: project.image,
    type: project.type,
    title: project.title[language],
    description: project.description[language],
  }));
}

