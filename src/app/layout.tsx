import type { Metadata } from "next";
import "./globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL('https://qlout.studio'),
  title: {
    default: 'QLOUT Studio – Strategische Markenplattformen',
    template: '%s | QLOUT Studio'
  },
  description: 'QLOUT Studio entwickelt strategische Markenplattformen an der Schnittstelle von Branding, UX/UI und Technologie. Design mit Substanz für Unternehmen, die Wert auf Qualität legen.',
  keywords: ['Branding Agentur', 'UX/UI Design', 'Webentwicklung', 'Markenidentität', 'Design Studio', 'Corporate Design', 'Digitale Markenplattformen', 'Webdesign Agentur'],
  authors: [{ name: 'QLOUT Studio' }],
  creator: 'QLOUT Studio',
  publisher: 'QLOUT Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://qlout.studio',
    siteName: 'QLOUT Studio',
    title: 'QLOUT Studio – Strategische Markenplattformen',
    description: 'Design Studio für Branding, UX/UI und Webentwicklung. Wir entwickeln strategische Markenplattformen mit Substanz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QLOUT Studio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QLOUT Studio – Strategische Markenplattformen',
    description: 'Design Studio für Branding, UX/UI und Webentwicklung.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://qlout.studio',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1A1B1F" />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
