import type { Metadata } from "next";
import { DM_Sans, Lora, Caveat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { buildLocaleAlternates, generateLocalBusinessSchema, SITE_URL } from "@/lib/seo";
import { routing, type Locale } from "@/i18n/routing";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600"],
  display: "swap",
});

const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

const OG_LOCALE: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Seo" });
  const typedLocale = locale as Locale;
  const rootAlternates = buildLocaleAlternates(locale, "/");
  const canonical = rootAlternates.canonical;
  const ogAlternates: Locale[] = routing.locales.filter((l) => l !== typedLocale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("titleDefault"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    alternates: {
      canonical,
      languages: rootAlternates.languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Vem Passear em Jampa",
      title: t("titleDefault"),
      description: t("description"),
      locale: OG_LOCALE[typedLocale],
      alternateLocale: ogAlternates.map((l) => OG_LOCALE[l]),
      images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleDefault"),
      description: t("description"),
      images: ["/og-image.svg"],
    },
    robots: { index: true, follow: true },
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
      : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const localBusinessSchema = generateLocalBusinessSchema();
  const htmlLang = HTML_LANG[locale as Locale];

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${lora.variable} ${caveat.variable} font-sans flex flex-col min-h-screen overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <Analytics />
          <VercelAnalytics />
          <Header />
          <main className="flex-1" style={{ paddingTop: "var(--header-h)" }}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
