import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PublicSection from '@/components/sections/PublicSection';
import DifferencesSection from '@/components/sections/DifferencesSection';
import ProgramSection from '@/components/sections/ProgramSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PublicSection />
        <DifferencesSection />
        <ProgramSection />
        <FaqSection />
        <ContactSection />
      </main>
      <a
        href="https://api.whatsapp.com/send/?phone=5582982150582&text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+curso+Antropometria+na+Pr%C3%A1tica."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-ink text-white pl-5 pr-6 py-4 font-display text-base font-bold uppercase tracking-wider hover:bg-cyan hover:text-ink"
        aria-label="Falar no WhatsApp"
      >
        <span className="block w-2 h-2 bg-cyan animate-pulse-soft" />
        WhatsApp
      </a>
      <Footer />
    </>
  );
}
