"use client";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import TrustSection from "./components/sections/TrustSection";
import UseCasesMarquee from "./components/sections/UseCasesMarquee";
import OperatingReality from "./components/sections/OperatingReality";
import SecuritySection from "./components/sections/SecuritySection";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <UseCasesMarquee />
        <OperatingReality />
        <SecuritySection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
