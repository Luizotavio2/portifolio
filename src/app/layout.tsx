import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: {
    default: "Luiz Otavio - Web Developer",
    template: "%s | Luiz Otavio",
  },
  description: "Personal portfolio of Luiz Otavio, full-stack web developer specialized in creating amazing digital experiences.",
  keywords: ["web developer", "portfolio", "Next.js", "React", "full-stack"],
  authors: [{ name: "Luiz Otavio" }],
  creator: "Luiz Otavio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Luiz Otavio - Portfolio",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-50 text-neutral-900 font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
