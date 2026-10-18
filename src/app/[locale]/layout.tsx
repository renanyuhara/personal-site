import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import "../../app/globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: "Renan Yuhara | Software Engineer",
    description: locale === "en"
      ? "Projects, experience, and ideas from Renan Yuhara, software engineer."
      : "Projetos, experiências e ideias de Renan Yuhara, engenheiro de software.",
    alternates: {
      languages: {
        en: "/en",
        pt: "/pt",
        "x-default": `/${defaultLocale}`,
      },
    },
    robots: { index: false, follow: false },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale as Locale}>
      <body>{children}</body>
    </html>
  );
}
