import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eleva Imobiliária | Recife - PE",
  description:
    "Encontre o imóvel que faz sentido para você. A Eleva Imobiliária orienta decisões patrimoniais seguras em Recife e região.",
  keywords: [
    "Eleva Imobiliária",
    "imobiliária em Recife",
    "imóveis em Recife",
    "imóveis em Pernambuco",
    "comprar imóvel em Recife",
    "investimento imobiliário em Recife",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
  title: "Eleva Imobiliária | Recife - PE",
  description:
    "Encontre o imóvel que faz sentido para você. A Eleva Imobiliária orienta decisões patrimoniais seguras em Recife e região.",
  type: "website",
  locale: "pt_BR",
  images: ["/og-eleva.png"],
  siteName: "Eleva Imobiliária",
},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
