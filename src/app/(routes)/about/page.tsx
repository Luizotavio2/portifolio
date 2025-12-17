import AboutContent from "@/app/components/about/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Luiz Otavio",
  description: "Learn more about Luiz Otavio, a web developer focused on creating innovative and efficient solutions.",
  openGraph: {
    title: "About - Luiz Otavio",
    description: "Web developer specialized in modern and efficient applications",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-neutral-50 text-neutral-700">
      <AboutContent />
    </section>
  );
}

