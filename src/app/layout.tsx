import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxProviderWrapper from "@/components/providers/ParallaxProviderWrapper";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";

const titilliumWeb = Titillium_Web({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  title: "BUILDCO | Professional Construction & Renovation Services",
  description:
    "Expert construction and renovation services for residential, commercial, and industrial projects. Delivering quality craftsmanship and innovative solutions since 1995.",
  keywords: [
    "Construction Company",
    "Renovation Services",
    "Building Contractor",
    "Home Renovation",
    "Commercial Construction",
    "Industrial Construction",
    "Construction Management",
    "Professional Builders",
  ],
  authors: [{ name: "BUILDCO Construction" }],
  openGraph: {
    title: "BUILDCO | Professional Construction & Renovation Services",
    description:
      "Transform your space with our expert construction and renovation services. Quality craftsmanship guaranteed.",
    type: "website",
    locale: "en_US",
    siteName: "BUILDCO Construction",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUILDCO Construction & Renovation",
    description:
      "Transform your space with our expert construction and renovation services. Quality craftsmanship guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titilliumWeb.variable} font-titillium`}>
        <ParallaxProviderWrapper>
          <Suspense fallback={<Loading />}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </ParallaxProviderWrapper>
      </body>
    </html>
  );
}
