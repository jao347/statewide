import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import UTMTracker from "@/components/utm-tracker";
import LoadingScreen from "@/components/ui/loading";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Statewide Chimney Services",
  description:
    "Professional chimney cleaning, repair, and maintenance services",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-17637526458";

  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTagId}');
            `,
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<LoadingScreen />}>
          <Navigation />
          <UTMTracker />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
