import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cultivar Memórias — Projeto Solidário",
  description:
    "Uma iniciativa solidária que aproxima gerações através da agricultura, da partilha e do convívio. Levamos os produtos da nossa horta a entidades ERPI e Centros de Dia.",
  keywords: [
    "solidariedade",
    "agricultura",
    "gerações",
    "horta",
    "ERPI",
    "centros de dia",
    "voluntariado",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Cultivar Memórias",
    description:
      "Uma iniciativa solidária que aproxima gerações através da agricultura, da partilha e do convívio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
