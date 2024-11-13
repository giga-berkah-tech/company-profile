// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gigaberkahteknologi.com"),
  title: {
    template: "%s | PT. Giga Berkah Teknologi",
    default: "PT. Giga Berkah Teknologi - Web & Mobile App Development Company",
  },
  description:
    "Professional web and mobile app development services in Indonesia. Specializing in React, Next.js, Flutter, and native mobile development.",
  keywords: [
    "cheap web development service",
    "cheap mobile app development service",
    "affordable React development service",
    "cheap Next.js Programmer Service",
    "affordable Flutter Programmer Service",
    "affordable Android development service",
    "cheap iOS development service",
    "Affordable IT solutions from Indonesia",
    "software house Malang indonesia",
    "PT Giga Berkah Teknologi",
    "jasa pembuatan aplikasi mobile",
    "jasa programmer murah",
    "jasa pembuatan website modern",
    "software house flutter, reactjs, nextjs",
  ],
  authors: [{ name: "PT. Giga Berkah Teknologi" }],
  creator: "PT. Giga Berkah Teknologi",
  publisher: "PT. Giga Berkah Teknologi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    siteName: "PT. Giga Berkah Teknologi",
    title: "PT. Giga Berkah Teknologi - Web & Mobile App Development Company",
    description:
      "Professional web and mobile app development services in Indonesia. Specializing in React, Next.js, Flutter, and native mobile development.",
    images: [
      {
        url: "https://company.aplikasiku.web.id/_next/static/media/hero.6eece42f.png",
        width: 1200,
        height: 630,
        alt: "Rent for Flutter & React programmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Giga Berkah Teknologi - Web & Mobile App Development Company",
    description:
      "Professional web and mobile app development services in Indonesia. Specializing in React, Next.js, Flutter, and native mobile development.",
    images: [
      "https://company.aplikasiku.web.id/_next/static/media/hero.6eece42f.png",
    ],
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
  verification: {
    google: "qerVLV6teRmnE1ekPWcKVTZ211nPjrB4CeWlbk-S3UI",
  },
  alternates: {
    canonical: "https://company.aplikasiku.web.id/",
    languages: {
      "en-US": "https://company.aplikasiku.web.id/?lang=en",
      "id-ID": "https://company.aplikasiku.web.id/?lang=id",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-950`}>
        <Suspense>
          <ThemeProvider attribute="class">
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWidget />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
