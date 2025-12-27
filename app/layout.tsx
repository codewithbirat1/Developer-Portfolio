import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Bebas_Neue, Inter, Playfair_Display, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Preloader from "@/components/preloader"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
  variable: "--font-poppins",
})

const siteUrl =  "https://birat.nexolinx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BIRAT — Founder & Web Developer",
    template: "%s | BIRAT",
  },
  description:
    "I help service and software businesses create memorable, optimised website experiences as quickly as they need.",
  applicationName: "BIRAT — Founder & Developer",
  keywords: [
    "Birat",
    "web developer",
    "founder",
    "portfolio",
    "Next.js",
    "React",
    "website design",
    "software",
    "frontend",
    "UI/UX",
  ],
  authors: [{ name: "BIRAT" }],
  creator: "BIRAT",
  publisher: "BIRAT",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BIRAT — Founder & Developer",
    description:
      "I help service and software businesses create memorable, optimissite experiences as quickly as they need.",
    siteName: "BIRAT",
    images: [
      {
        url: `${siteUrl}/apple-touch-icon.png`,
        width: 1200,
        height: 630,
        alt: "BIRAT — Founder & Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIRAT — Founder & Web Developer",
    description:
      "I help service and software businesses create memorable, optimised website experiences as quickly as they need.",
    images: [`${siteUrl}/apple-touch-icon.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${bebasNeue.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Preloader />
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "BIRAT",
              url: siteUrl,
              jobTitle: "Founder & Web Developer",
              sameAs: [],
            }),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: siteUrl,
              name: "BIRAT — Founder & Web Developer",
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
        <Analytics />
        <Header />
        <Footer />
      </body>
    </html>
  )
}
