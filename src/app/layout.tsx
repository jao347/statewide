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

// ✅ Font optimization
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
        {/* <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        /> */}

        <link rel="icon" href="/favicon.ico" />

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
                  gtag('config', '${googleTagId}', { send_page_view: false });
                `,
              }}
            />
          </>
        )}

        {isProd && (
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              setTimeout(() => {
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              }, 3000);
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
