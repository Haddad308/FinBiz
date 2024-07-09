"use client";

import Analytics from "@/components/home/Sections/Analytics";
import HeroSection from "@/components/home/Sections/HeroSection";
import Pricing from "@/components/home/Sections/Pricing";
import Testomonial from "@/components/home/Sections/Testomonial";
import { login, register } from "@/handlers";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    login("emilys", "emilyspass");
  }, []);

  return (
    <div>
      <HeroSection />
      <Analytics />
      <Testomonial />
      <Pricing />
    </div>
  );
}
