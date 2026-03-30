import { Shield, Users, Mountain, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { ctaPrimary, ctaOutlineDark, heroBadge } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const badges = [
  { icon: Shield, label: "Normativa Europea" },
  { icon: Users, label: "Personal Certificado" },
  { icon: Mountain, label: "Seguridad en Altura" },
  { icon: MapPin, label: "Chile y Argentina" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      <div className="hero-media-frame">
        <img
          src={heroBg}
          alt="Trabajador realizando servicios en altura en fachada de edificio"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative container-main px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in-up">
            Servicios en altura y áreas de difícil acceso
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed animate-fade-in-up animation-delay-100">
            Somos especialistas en trabajos en altura con los más altos estándares de seguridad bajo normativa europea. Personal certificado y equipamiento profesional.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
            <a href="/#contacto" className={cn(ctaPrimary)}>
              Solicitar Cotización
            </a>
            <a
              href="https://wa.me/5492616241234"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(ctaOutlineDark)}
            >
              Contactar por WhatsApp
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children-animate">
            {badges.map((badge) => (
              <div key={badge.label} className={cn(heroBadge)}>
                <badge.icon className="h-5 w-5 text-accent flex-shrink-0" aria-hidden />
                <span className="text-xs font-medium text-primary-foreground/90">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
