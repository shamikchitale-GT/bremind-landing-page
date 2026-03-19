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

export default function Home() {
  return (
    <main className="bg-[#FBFBFA] text-slate-950">
      <Navbar />
      <Hero />
      <Problem />
      <Science />
      <Method />
      <Skills />
      <HowItWorks />
      <ParentInsights />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}

