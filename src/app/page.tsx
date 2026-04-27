import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Method from "@/components/Method";
import Navbar from "@/components/Navbar";
import ParentInsights from "@/components/ParentInsights";
import Problem from "@/components/Problem";
import Science from "@/components/Science";
import Skills from "@/components/Skills";
import Waitlist from "@/components/Waitlist";

// NEW IMPORTS
import BQ from "@/components/BQ";
import Differentiation from "@/components/Differentiation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* FLOW STARTS */}
      <Problem />

      {/* NEW SECTIONS (VERY IMPORTANT POSITION) */}
      <BQ />
      <Differentiation />

      <ParentInsights />
      <HowItWorks />
      <Method />
      <Skills />
      <Science />
      <Waitlist />
      <FAQ />
      <Footer />
    </>
  );
}

