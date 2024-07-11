import "./globals.css";
import { Providers } from "./providors";
import Footer from "@/components/layout/Footer";
import { Rights } from "@/components/layout/Rights";
import { Locale } from "@/i18n.config";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

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
      suppressHydrationWarning={true}
    >
      <head>
        <link
          rel="icon"
          href="https://msaaq.com/wp-content/uploads/2020/11/favicon.svg"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <NavBar lang={params.lang} />
          {children}
          <Footer />
          <Rights />
        </Providers>
      </body>
    </html>
  );
}
