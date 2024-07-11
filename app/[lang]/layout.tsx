// "use client";

import "./globals.css";
import { Providers } from "./providors";
import Footer from "@/components/layout/Footer";
import { Rights } from "@/components/layout/Rights";
import { Suspense } from "react";
import { Locale, i18n } from "@/i18n.config";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Msaaq - Home",
  description: "Welcome to Msaaq, the best place for all your needs."
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
      suppressHydrationWarning={false}
    >
      <head>
        <link
          rel="icon"
          href="https://msaaq.com/wp-content/uploads/2020/11/favicon.svg"
        />
      </head>
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
