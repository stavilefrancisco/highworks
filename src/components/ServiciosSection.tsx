import { Link } from "react-router-dom";
import { serviceCategories } from "@/data/servicios";
import { ctaPrimary, headingSection, interactiveCard, interactiveCardIcon, linkAccent, staggerChildren } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const ServiciosSection = () => {
  return (
    <section id="servicios" className="section-padding bg-card" aria-label="Servicios">
      <div className="container-main">
        <div className="divider-gradient mb-12 md:mb-14" aria-hidden />
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground", headingSection)}>Nuestros Servicios</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Soluciones integrales para el mantenimiento y seguridad en altura con los más altos estándares de calidad.
          </p>
        </div>

        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8", staggerChildren)}>
          {serviceCategories.map((cat) => (
            <div key={cat.id} className={interactiveCard}>
              <div className={cn(interactiveCardIcon)}>
                <cat.summaryIcon className="h-6 w-6 text-primary" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-bold text-foreground leading-snug">{cat.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{cat.subtitle}</p>
              <Link to={`/servicios#${cat.id}`} className={cn(linkAccent, "mt-5 inline-flex")}>
                Ver servicios
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/servicios" className={cn(ctaPrimary)}>
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
