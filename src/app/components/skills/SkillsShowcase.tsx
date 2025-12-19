"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data/skills";
import { Skill } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Monitor, Globe, Braces, Rocket, Database, Settings, GitBranch, Layers, Shield, TestTube, Server, Key, Lock } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  // Backend
  "Node.js": Code2,
  "Nest.js": Code2,
  "APIs REST": Database,
  
  // Architecture
  "Clean Code": Code2,
  "Design Patterns": Layers,
  "Separation of Layers": Layers,
  
  // Databases
  "PostgreSQL": Database,
  "MongoDB": Database,
  
  // Testing
  "Unit Testing": TestTube,
  "TDD": TestTube,
  "BDD": TestTube,
  
  // Security
  "Authentication": Key,
  "Access Control": Shield,
  "Data Protection": Lock,
  
  // DevOps
  "Docker": Server,
  "Git/GitHub": GitBranch,
  
  // Languages
  "JavaScript": Braces,
  "TypeScript": Braces,
  "Go": Code2,
};

export default function SkillsShowcase() {
  const { t } = useLanguage();
  const categoryLabels = t.skills.categories;
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            {categoryLabels[category as keyof typeof categoryLabels]}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
            {categorySkills.map((skill, index) => {
              const Icon = iconMap[skill.name] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-neutral-200 hover:border-neutral-300 transition-all shadow-sm"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  role="listitem"
                  aria-label={skill.name}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-neutral-600">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

