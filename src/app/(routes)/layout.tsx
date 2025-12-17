import Sidebar from "@/app/components/layout/Sidebar";
import PageTransition from "@/app/components/layout/PageTransition";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ReactNode } from "react";

export default function RoutesLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-64 min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
      </div>
    </LanguageProvider>
  );
}

