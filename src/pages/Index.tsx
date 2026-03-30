import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ValorDiferencialSection from "@/components/ValorDiferencialSection";
import ServiciosSection from "@/components/ServiciosSection";
import LuxtopSection from "@/components/LuxtopSection";
import ClientesSection from "@/components/ClientesSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <ValorDiferencialSection />
        <ServiciosSection />
        <LuxtopSection />
        <ClientesSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Index;