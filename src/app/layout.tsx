import type { Metadata } from "next";
import { Unbounded, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://was.helderio.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WA.S · Wafunga Software — Benguela, Angola",
  description:
    "Software que resolve problemas reais de Angola. Sistemas, plataformas e aplicações para negócios e instituições, construídos com arquitetura própria.",
  openGraph: {
    title: "WA.S · Wafunga Software",
    description: "Software que resolve problemas reais de Angola.",
    url: siteUrl,
    siteName: "WA.S",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${unbounded.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
