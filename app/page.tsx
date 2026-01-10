// import Galaxy from "@/components/Galaxy";
import SpaceBackground from "@/components/sections/space-background";
import About from "@/components/sections/about";
import Footer from "@/components/sections/Footer";
import FeatureCards from "@/components/sections/feature-cards";
import Hero from "@/components/sections/hero";
import LeadMagnet from "@/components/sections/lead-magnet";
import ProblemSolution from "@/components/sections/problem-solution";
import ProductKit from "@/components/sections/product-kit";
import SplitFunnel from "@/components/sections/split-funnel";
// import HeroSection from "@/components/sections/hero-section";

const page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SpaceBackground />

      <div className="relative">
        <Hero />
        <FeatureCards />
        <ProblemSolution />
        <SplitFunnel />
        <ProductKit />
        <LeadMagnet />
        <About />
        <Footer />
      </div>
    </main>
  );
};

export default page;
