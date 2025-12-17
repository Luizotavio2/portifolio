"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SkillsPageClient() {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
          {t.skills.title}
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {t.skills.description}
        </p>
      </div>
    </>
  );
}

