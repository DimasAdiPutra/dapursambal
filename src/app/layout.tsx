import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F0F10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dapur Sambal Bu Nur | Autentik Citarasa Nusantara",
  description: "Sambal Kemasan Premium & Katering Lezat dari Resep Legenda Bu Nur.",
  metadataBase: new URL("https://dapursambalbunur.com"),
  openGraph: {
    title: "Dapur Sambal Bu Nur | Autentik Citarasa Nusantara",
    description: "Sambal Kemasan Premium & Katering Lezat dari Resep Legenda Bu Nur.",
    type: "website",
    locale: "id_ID",
    siteName: "Dapur Sambal Bu Nur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dapur Sambal Bu Nur | Autentik Citarasa Nusantara",
    description: "Sambal Kemasan Premium & Katering Lezat dari Resep Legenda Bu Nur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body
        className={`${plusJakartaSans.className} bg-zinc-950 text-zinc-50 antialiased min-h-screen selection:bg-red-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
