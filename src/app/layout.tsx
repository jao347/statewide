import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Suspense } from "react";
import "./globals.css";
import UTMTracker from "@/components/utm-tracker";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <UTMTracker />

          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
