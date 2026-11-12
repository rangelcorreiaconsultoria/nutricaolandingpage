import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StartSection from '@/components/sections/StartSection';
import ScienceSection from '@/components/sections/ScienceSection';
import GenericDietSection from '@/components/sections/GenericDietSection';
import StructureSection from '@/components/sections/StructureSection';
import ScaleSection from '@/components/sections/ScaleSection';
import ProfessionalSection from '@/components/sections/ProfessionalSection';
import PlansSection from '@/components/sections/PlansSection';
import LocationSection from '@/components/sections/LocationSection';
import FaqSection from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] bg-cyan text-ink px-5 py-3 font-display text-base font-bold uppercase tracking-wider"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-grow focus:outline-none">
        <HeroSection />
        <ScienceSection />
        <GenericDietSection />
        <StartSection />
        <StructureSection />
        <ScaleSection />
        <ProfessionalSection />
        <PlansSection />
        <LocationSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
