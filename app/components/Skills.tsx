"use client";
import { motion } from "framer-motion";
import { Code2, Monitor, Database, Globe, Terminal } from "lucide-react";

const skills = [
  { icon: <Code2 size={40} />, name: "Node js" },
  { icon: <Database size={40} />, name: "SQL" },
  { icon: <Monitor size={40} />, name: "Next js" },
  { icon: <Globe size={40} />, name: "HTML / CSS" },
  { icon: <Terminal size={40} />, name: "Linux" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-neutral-950 px-6 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-green-400 mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-neutral-300">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center hover:text-green-400 transition-colors"
          >
            {skill.icon}
            <span className="mt-2 text-lg font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
