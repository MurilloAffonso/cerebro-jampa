import type { Metadata } from "next";
import { DM_Sans, Lora, Caveat } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://vempassearjampa.com.br"),
  title: {
    default: "Passeios em João Pessoa | Vem Passear em Jampa",
    template: "%s | Vem Passear em Jampa",
  },
  description:
    "Agência de turismo em João Pessoa com Cadastur ativo. Passeios para praias, piscinas naturais, city tour e pacotes. Atendimento direto pelo WhatsApp com orientação local.",
  openGraph: {
    type: "website",
    url: "https://vempassearjampa.com.br",
    siteName: "Vem Passear em Jampa",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${lora.variable} ${caveat.variable} font-sans flex flex-col min-h-screen overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
