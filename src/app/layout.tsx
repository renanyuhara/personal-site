import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renan Yuhara | Software Engineer",
  description: "Projetos, experiências e ideias de Renan Yuhara, engenheiro de software.",
  robots: { index: false, follow: false }, // Habilitar somente após revisão editorial e deploy.
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
