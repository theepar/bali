import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

// --- Google Analytics Script ---
const GA_ID = "G-XXXXXXXXXX"; // Ganti dengan ID Analytics Anda

export const metadata: Metadata = {
  title: "Bali Tourism – Wisata, Budaya, & Pengalaman Unik",
  description:
    "Jelajahi keindahan Pulau Dewata Bali. Temukan destinasi wisata terbaik, budaya tradisional, pengalaman kuliner, dan petualangan alam yang tak terlupakan. Panduan lengkap untuk liburan Anda di Bali.",
  keywords: [
    "Bali",
    "Wisata Bali",
    "Pariwisata Bali",
    "Destinasi Bali",
    "Budaya Bali",
    "Kuliner Bali",
    "Pantai Bali",
    "Liburan Bali",
    "Travel Bali",
    "Tour Bali"
  ],
  openGraph: {
    title: "Bali Tourism – Wisata, Budaya, & Pengalaman Unik",
    description:
      "Panduan wisata Bali: destinasi, budaya, kuliner, dan pengalaman terbaik di Pulau Dewata.",
    url: "https://your-domain.com",
    siteName: "Bali Tourism",
    images: [
      {
        url: "https://images.unsplash.com/photo-1668276490368-409a6002756d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Wisata Bali",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Tourism – Wisata, Budaya, & Pengalaman Unik",
    description:
      "Jelajahi destinasi dan budaya Bali. Panduan wisata lengkap untuk liburan Anda.",
    images: [
      "https://images.unsplash.com/photo-1668276490368-409a6002756d?auto=format&fit=crop&w=1200&q=80",
    ],
    site: "@yourtwitter",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full bg-black">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Analytics /> {/* Tambahkan di sini */}
      </body>
    </html>
  );
}
