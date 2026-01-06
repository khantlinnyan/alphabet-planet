// import Galaxy from "@/components/Galaxy";
import SpaceBackground from "@/components/animation/space-background";
import About from "@/components/sections/about";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/hero";
import Inside from "@/components/sections/inside";
import LearningMaterials from "@/components/sections/learning-material/learning-material";
import TheBook from "@/components/sections/thebook";
// import HeroSection from "@/components/sections/hero-section";

const page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SpaceBackground />

      <div className="relative">
        <Hero />
        <TheBook />
        <LearningMaterials />
        <Inside />

        {/* <Reviews /> */}
        <About />
        {/* <BuyOptions />
        <Footer /> */}
        <Footer />
      </div>
    </main>
  );
};

export default page;
