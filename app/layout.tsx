import type { Metadata, Viewport } from "next";
import { Sora, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lume — Sua página de agendamento pronta em 24h | Estética",
  description:
    "A Lume cria em até 24 horas uma página profissional com agendamento integrado para profissionais da estética venderem mais, organizarem a agenda e pararem de depender do WhatsApp para tudo.",
  keywords: [
    "landing page estética",
    "agendamento online",
    "página para manicure",
    "página para lash designer",
    "link da bio profissional",
    "site para esteticista",
  ],
  openGraph: {
    title: "Lume — Presença digital pronta para converter",
    description:
      "Página profissional com agendamento integrado em até 24 horas para profissionais da estética.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#7B102B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${inter.variable} ${cormorant.variable} overflow-x-hidden`}
    >
      <body className="overflow-x-hidden bg-offwhite text-grafite antialiased">{children}</body>
    </html>
  );
}
