import Analytics from "@/components/home/Sections/Analytics";
import HeroSection from "@/components/home/Sections/HeroSection";
import Pricing from "@/components/home/Sections/Pricing";
import Testomonial from "@/components/home/Sections/Testomonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Analytics />
      <Testomonial />
      <Pricing />
    </div>
  );
}
