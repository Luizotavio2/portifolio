"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { socialLinks } from "@/lib/data/social";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, open email client
    const subject = encodeURIComponent(`${t.contact.title} - ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:luiz.otav.2009@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
          {t.contact.title}
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {t.contact.description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-neutral-700 mb-2 font-medium">
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-500 transition-colors"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-neutral-700 mb-2 font-medium">
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-500 transition-colors"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-neutral-700 mb-2 font-medium">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-neutral-900 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              t.contact.sending
            ) : (
              <>
                {t.contact.send}
                <Send size={20} />
              </>
            )}
          </motion.button>

          {submitStatus === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-neutral-600 text-center"
            >
              {t.contact.success}
            </motion.p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              {t.contact.orReachOut}
            </h2>
            <p className="text-neutral-600 mb-6">
              {t.contact.preferMethod}
            </p>
          </div>

          <div className="space-y-4">
            {socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5, boxShadow: "0 4px 12px rgba(74, 222, 128, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg border border-neutral-200 hover:border-neutral-300 transition-all group shadow-sm"
                >
                  <div className="text-neutral-600 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

