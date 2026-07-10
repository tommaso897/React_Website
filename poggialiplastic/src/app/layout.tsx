import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.poggialiplastic.it"),
  title: {
    default: "Poggiali Plastic Creations - Stampaggio Plastica a Iniezione",
    template: "%s | Poggiali Plastic Creations",
  },
  description: "Stampaggio di materie plastiche ad iniezione dal 1961 a Massa Lombarda (RA). Specializzati in articoli per divani, reti da letto e tecnopolimeri di precisione.",
  keywords: ["stampaggio plastica", "iniezione plastica", "articoli per divani", "tappi per tubi", "tecnopolimeri", "Massa Lombarda", "Ravenna", "stampaggio ad iniezione"],
  authors: [{ name: "Poggiali Plastic Creations" }],
  creator: "Poggiali Plastic Creations",
  publisher: "Poggiali Plastic Creations",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Poggiali Plastic Creations - Stampaggio Plastica a Iniezione",
    description: "Stampaggio di materie plastiche ad iniezione dal 1961 a Massa Lombarda (RA). Specializzati in articoli per divani, reti da letto e tecnopolimeri di precisione.",
    url: "https://www.poggialiplastic.it",
    siteName: "Poggiali Plastic Creations",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Poggiali Plastic Creations - Stampaggio Plastica ad Iniezione dal 1961",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poggiali Plastic Creations - Stampaggio Plastica a Iniezione",
    description: "Stampaggio di materie plastiche ad iniezione dal 1961 a Massa Lombarda (RA). Specializzati in articoli per divani, reti da letto e tecnopolimeri di precisione.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}


