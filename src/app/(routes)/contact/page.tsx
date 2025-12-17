import ContactForm from "@/app/components/contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Luiz Otavio",
  description: "Get in touch with Luiz Otavio to discuss opportunities, collaborations, or projects.",
  openGraph: {
    title: "Contact - Luiz Otavio",
    description: "Let's talk about your next project",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-neutral-50 text-neutral-700">
      <ContactForm />
    </section>
  );
}

