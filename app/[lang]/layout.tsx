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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Your meta description here."
          />
          <title>Your Page Title</title>
          {/* Other meta tags and links as needed */}
        </Head>
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
