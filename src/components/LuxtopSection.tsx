import luxtopLogo from "@/assets/luxtop-logo.png";
import { ExternalLink } from "lucide-react";
import { ctaPrimary, headingAccentBar } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const LuxtopSection = () => {
  return (
    <section id="luxtop" className="section-padding bg-warm" aria-label="Representantes Luxtop">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Partner Oficial</p>
            <div className={cn(headingAccentBar)}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Representantes oficiales de Luxtop</h2>
              <p className="mt-2 text-xl font-medium text-foreground/80">Chile 🇨🇱 y Argentina 🇦🇷</p>
            </div>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Venta e instalación de sistemas anticaída certificados bajo normativa europea. Garantizamos la seguridad de su personal con productos de la más alta calidad y certificación internacional.
            </p>
            <a
              href="https://lineadevidaluxtop.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(ctaPrimary, "mt-8")}
            >
              Conocer Luxtop
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src={luxtopLogo}
              alt="Logo Luxtop - Sistemas de protección anticaída"
              className="w-48 md:w-64 h-auto drop-shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxtopSection;
