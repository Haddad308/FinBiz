import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { Providers } from "./providors";
import Footer from "@/components/layout/Footer";
import { Rights } from "@/components/layout/Rights";
import Head from "next/head"; // Assuming you are using Next.js for server-side rendering
import { Suspense } from "react";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
    >
      <body>
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
            <NavBar />
            {children}
            <Footer />
            <Rights />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
