import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vempassearjampa.com.br"),
  title: {
    default: "Passeios em João Pessoa | Vem Passear em Jampa",
    template: "%s | Vem Passear em Jampa",
  },
  description:
    "Agência de turismo em João Pessoa. Passeios para praias, piscinas naturais, city tour e muito mais. Atendimento rápido, confiança e orientação local.",
  keywords: [
    "passeios João Pessoa",
    "turismo em JP",
    "praias",
    "piscinas naturais",
    "seixas",
    "litoral sul",
    "agência turismo",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen overflow-x-hidden`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
