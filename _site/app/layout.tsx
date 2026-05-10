import type { Metadata } from "next";
import { Inter, Fraunces, Caveat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
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

export const metadata: Metadata = {
  metadataBase: new URL("https://vempassearjampa.com.br"),
  title: {
    default: "Passeios em João Pessoa | Vem Passear em Jampa",
    template: "%s | Vem Passear em Jampa",
  },
  description:
    "Agência de turismo em João Pessoa com Cadastur ativo. Passeios para praias, piscinas naturais, city tour e pacotes. Atendimento direto pelo WhatsApp com orientação local.",
  keywords: [
    "passeios João Pessoa",
    "turismo em JP",
    "praias",
    "piscinas naturais",
    "seixas",
    "litoral sul",
    "agência turismo",
    "Cadastur",
    "Paraíba",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vempassearjampa.com.br",
    siteName: "Vem Passear em Jampa",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Vem Passear em Jampa — Passeios em João Pessoa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passeios em João Pessoa | Vem Passear em Jampa",
    description:
      "Passeios em João Pessoa com Cadastur ativo. Atendimento direto pelo WhatsApp com Murillo.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${fraunces.variable} ${caveat.variable} font-sans flex flex-col min-h-screen overflow-x-hidden antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
