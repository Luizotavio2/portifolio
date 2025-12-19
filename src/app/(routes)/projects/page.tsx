import ProjectGrid from "@/app/components/projects/ProjectGrid";
import ProjectsPageClient from "./ProjectsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Luiz Otavio",
  description: "Explore projects developed by Luiz Otavio, including web applications, dashboards, and landing pages.",
  openGraph: {
    title: "Projects - Luiz Otavio",
    description: "Portfolio of projects developed with the most modern technologies",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-20 py-16 md:py-20 bg-neutral-50 text-neutral-700">
      <div className="w-full max-w-7xl">
        <ProjectsPageClient />
        <ProjectGrid />
      </div>
    </section>
  );
}

