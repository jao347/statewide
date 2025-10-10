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
  const clarityId = "tnvty8npe8";

  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        {isProd && (
          <>
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
          </>
        )}

        {isProd && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}
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
