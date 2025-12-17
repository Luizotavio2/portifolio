import Hero from "@/app/components/home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Luiz Otavio - Web Developer",
  description: "Portfolio of Luiz Otavio, full-stack web developer specialized in creating amazing digital experiences.",
  openGraph: {
    title: "Luiz Otavio - Web Developer",
    description: "Full-stack web developer creating amazing digital experiences",
    type: "website",
  },
};

export default function HomePage() {
  return <Hero />;
}

