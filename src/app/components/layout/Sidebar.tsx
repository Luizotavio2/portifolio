"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code2, FolderKanban, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navIcons = {
  home: Home,
  about: User,
  skills: Code2,
  projects: FolderKanban,
  contact: Mail,
};

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const navItems = [
    { href: "/", label: t.nav.home, icon: navIcons.home, key: "home" },
    { href: "/about", label: t.nav.about, icon: navIcons.about, key: "about" },
    { href: "/skills", label: t.nav.skills, icon: navIcons.skills, key: "skills" },
    { href: "/projects", label: t.nav.projects, icon: navIcons.projects, key: "projects" },
    { href: "/contact", label: t.nav.contact, icon: navIcons.contact, key: "contact" },
  ];

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded-lg border border-neutral-200 shadow-sm text-neutral-600 hover:text-neutral-900 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar - Desktop: always visible, Mobile: slide in/out */}
      <motion.aside
        className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-neutral-200 z-40 flex flex-col"
        initial={false}
        animate={{ 
          x: isDesktop ? 0 : (isMobileOpen ? 0 : -256)
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Logo */}
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
          <Link href="/" onClick={() => setIsMobileOpen(false)}>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
            >
              luiz.dev
            </motion.h1>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1 text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <li key={item.key || item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-neutral-900 bg-neutral-100 font-semibold"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer in sidebar */}
        <div className="p-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Luiz Otavio
          </p>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

