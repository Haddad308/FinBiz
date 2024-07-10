import { Locale } from "@/i18n.config";
import Analytics from "@/components/home/Sections/Analytics";
import HeroSection from "@/components/home/Sections/HeroSection";
import Pricing from "@/components/home/Sections/Pricing";
import Testomonial from "@/components/home/Sections/Testomonial";

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <div>
      <HeroSection lang={lang} />
      <Analytics />
      <Testomonial />
      <Pricing />
    </div>
  );
}
