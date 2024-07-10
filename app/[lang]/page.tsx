import { Locale } from "@/i18n.config";

import Analytics from "@/components/home/Sections/Analytics";
import HeroSection from "@/components/home/Sections/HeroSection";
import Pricing from "@/components/home/Sections/Pricing";
import Testomonial from "@/components/home/Sections/Testomonial";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { page } = await getDictionary(lang);

  return (
    <div>
      <HeroSection lang={lang} />
      <Analytics />
      <Testomonial />
      <Pricing />
    </div>
  );
}
