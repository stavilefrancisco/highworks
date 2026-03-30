import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import StickyHeader from "@/components/StickyHeader";
import ServiciosDetalleSection from "@/components/ServiciosDetalleSection";
import ServiciosFAQSection from "@/components/ServiciosFAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { headingAccentBar, headingSection } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const SERVICIOS_META =
  "Catálogo de servicios en altura, pintura y señalización, protección colectiva Luxtop y mantenimiento integral. High Works — Chile y Argentina.";

const Servicios = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Servicios | High Works";
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? null;
    if (meta) meta.setAttribute("content", SERVICIOS_META);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <>
      <StickyHeader />
      <main>
        <section className="section-padding bg-background pt-28 md:pt-32" aria-label="Introducción">
          <div className="container-main">
            <nav className="text-sm text-muted-foreground mb-6 flex flex-wrap items-center gap-1" aria-label="Migas de pan">
              <Link to="/" className="transition-colors hover:text-primary">
                Inicio
              </Link>
              <ChevronRight className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
              <span className="text-foreground font-medium">Servicios</span>
            </nav>
            <div className={cn(headingAccentBar, "max-w-2xl")}>
              <h1 className={cn("text-3xl md:text-4xl font-bold text-foreground", headingSection)}>Catálogo de servicios</h1>
            </div>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Detalle de nuestras líneas de trabajo: acceso en altura, pintura y demarcación, sistemas anticaída y servicios
              complementarios. Solicitá cotización al final de la página.
            </p>
          </div>
        </section>
        <ServiciosDetalleSection />
        <ServiciosFAQSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Servicios;
