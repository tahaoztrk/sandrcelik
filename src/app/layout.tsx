import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sandr Çelik Yapı | Geleceği İnşa Ediyoruz",
  description: "Endüstriyel çelik yapılar, modern mimari çözümler ve mühendislik hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased bg-primary text-text-main`}
      >
        {children}
      </body>
    </html>
  );
}
