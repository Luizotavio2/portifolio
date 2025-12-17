"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { socialLinks } from "@/lib/data/social";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
};

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200 py-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-neutral-500 text-center"
          >
            © {currentYear} Luiz Otavio. {t.footer.copyright}.
          </motion.p>

      {/* Back to Top */}
      <motion.button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="text-neutral-600 hover:text-neutral-900 text-sm font-medium transition-colors"
        aria-label={t.footer.backToTop}
      >
        {t.footer.backToTop} ↑
      </motion.button>
        </div>
      </div>
    </footer>
  );
}

