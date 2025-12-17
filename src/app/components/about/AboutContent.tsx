"use client";
import { motion } from "framer-motion";
import { Code2, Rocket, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutContent() {
  const { t, language } = useLanguage();
  
  const aboutPoints = [
    {
      icon: <Code2 size={32} />,
      title: t.about.development,
      description: t.about.developmentDesc,
    },
    {
      icon: <Rocket size={32} />,
      title: t.about.innovation,
      description: t.about.innovationDesc,
    },
    {
      icon: <Target size={32} />,
      title: t.about.results,
      description: t.about.resultsDesc,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
          {t.about.title}
        </h1>
        <div className="w-24 h-1 bg-neutral-300 mx-auto mb-8" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-neutral-900">
            {t.about.greeting}{" "}
            <span className="text-neutral-800">{t.about.name}</span>
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t.about.description1}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            {t.about.description2}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200"
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            {t.about.specialties}
          </h3>
          <div className="space-y-4">
            {aboutPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex gap-4 items-start"
              >
                <div className="text-neutral-600 mt-1">{point.icon}</div>
                <div>
                  <h4 className="text-neutral-900 font-medium mb-1">
                    {point.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

