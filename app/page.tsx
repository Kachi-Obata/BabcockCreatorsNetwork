import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import AboutSection from "./components/AboutSection";
import DisciplinesGrid from "./components/DisciplinesGrid";
import BenefitsSection from "./components/BenefitsSection";
import ValuesSection from "./components/ValuesSection";
import WaitlistCTA from "./components/WaitlistCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="isolate">
        <HeroVideo />
        <AboutSection />
        <DisciplinesGrid />
        <BenefitsSection />
        <ValuesSection />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
