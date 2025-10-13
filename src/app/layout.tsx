import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Script from "next/script";
import "./globals.css";
import LoadingScreen from "@/components/ui/loading";

const UTMTracker = React.lazy(() => import("@/components/utm-tracker"));

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Statewide Chimney Services",
  description:
    "Professional chimney cleaning, repair, and maintenance services",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-17637526458";
  const clarityId = "tnvty8npe8";
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="icon" href="/favicon.ico" />

        {isProd && (
          <>
            <Script
              id="gtag-lib"
              src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
              strategy="lazyOnload"
            />
            <Script
              id="gtag-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleTagId}', { send_page_view: false });
                `,
              }}
            />

            <Script
              id="microsoft-clarity"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
              }}
            />
          </>
        )}
      </head>

      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<LoadingScreen />}>
          <Navigation />

          <Suspense fallback={null}>
            <UTMTracker />
          </Suspense>

          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
