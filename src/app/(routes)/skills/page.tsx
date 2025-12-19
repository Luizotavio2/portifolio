import SkillsShowcase from "@/app/components/skills/SkillsShowcase";
import SkillsPageClient from "./SkillsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Luiz Otavio",
  description: "Get to know Luiz Otavio's technical skills in web development, including frontend, backend, and tools.",
  openGraph: {
    title: "Skills - Luiz Otavio",
    description: "Technical skills in full-stack web development",
    type: "website",
  },
};

export default function SkillsPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-20 py-16 md:py-20 bg-neutral-50 text-neutral-700">
      <div className="w-full max-w-6xl">
        <SkillsPageClient />
        <SkillsShowcase />
      </div>
    </section>
  );
}

