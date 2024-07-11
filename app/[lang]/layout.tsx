// "use client";

import "./globals.css";
import { Providers } from "./providors";
import Footer from "@/components/layout/Footer";
import { Rights } from "@/components/layout/Rights";
import Head from "next/head"; // Assuming you are using Next.js for server-side rendering
import { Suspense } from "react";
import { Locale, i18n } from "@/i18n.config";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Msaaq - Home"
};

export default function RootLayout({
  // Layouts must accept a children prop.
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      suppressHydrationWarning={true}
    >
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <NavBar lang={params.lang} />
            {children}
            <Footer />
            <Rights />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
