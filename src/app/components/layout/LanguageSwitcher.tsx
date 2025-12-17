"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const currentFlag = language === 'pt' ? '🇧🇷' : '🇺🇸';
  const nextFlag = language === 'pt' ? '🇺🇸' : '🇧🇷';

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-2xl p-2 rounded-lg hover:bg-neutral-50 transition-colors"
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Português'}`}
      title={language === 'pt' ? 'Switch to English' : 'Alternar para Português'}
    >
      <motion.span
        key={language}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {currentFlag}
      </motion.span>
    </motion.button>
  );
}

