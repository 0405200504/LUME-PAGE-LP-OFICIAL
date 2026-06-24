import type { Metadata, Viewport } from "next";
import { Sora, Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
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
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1700853197905257&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="overflow-x-hidden bg-offwhite text-grafite antialiased">
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1700853197905257');
              fbq('track', 'PageView');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
