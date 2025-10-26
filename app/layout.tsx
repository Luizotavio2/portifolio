import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Portfólio | Luiz",
  description: "Portfólio pessoal desenvolvido em Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 font-sans">
        {children}
      </body>
    </html>
  );
}
