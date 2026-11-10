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
import NewTabHint from '@/components/common/NewTabHint';
import { MSG_OBJECTIVES, whatsappUrl } from '@/lib/contact';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] bg-ink text-white px-5 py-3 font-display text-base font-bold uppercase tracking-wider"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-grow focus:outline-none">
        <HeroSection />
        <StartSection />
        <ScienceSection />
        <GenericDietSection />
        <StructureSection />
        <ScaleSection />
        <ProfessionalSection />
        <PlansSection />
        <LocationSection />
        <FaqSection />
      </main>
      <a
        href={whatsappUrl(MSG_OBJECTIVES)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-ink text-white pl-4 pr-5 py-3 md:pl-5 md:pr-6 md:py-4 font-display text-base font-bold uppercase tracking-wider hover:bg-cyan hover:text-ink"
      >
        <span className="block w-2 h-2 bg-cyan animate-pulse-soft" aria-hidden="true" />
        WhatsApp
        <NewTabHint />
      </a>
      <Footer />
    </>
  );
}
