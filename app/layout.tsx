import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { Providers } from "./providors";
import Footer from "@/components/layout/Footer";
import { Rights } from "@/components/layout/Rights";

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
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <Rights />
        </Providers>
      </body>
    </html>
  );
}
