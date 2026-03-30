import { Clock, Cog, Handshake, Search } from "lucide-react";
import { headingSection, iconTileInteractive, staggerChildren } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Clock,
    title: "Eficiencia y responsabilidad",
    body: "Nuestra capacidad de organización nos permite ofrecer los mejores plazos de entrega del mercado.",
  },
  {
    icon: Cog,
    title: "Versatilidad y experiencia",
    body: "Más de 10 años entregando calidad en cada trabajo, adaptándonos a todo tipo de proyecto y escenario.",
  },
  {
    icon: Handshake,
    title: "Atención personalizada",
    body: "Siempre atentos a los requerimientos y puntos de vista de nuestros clientes para alcanzar sus expectativas.",
  },
  {
    icon: Search,
    title: "Tu mejor solución",
    body: "Estudiamos cada caso y buscamos las mejores soluciones para hacer de tu proyecto una realidad.",
  },
];

const ValorDiferencialSection = () => {
  return (
    <section className="section-padding bg-background" aria-labelledby="valor-diferencial-heading">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2 id="valor-diferencial-heading" className={cn("text-2xl md:text-3xl font-bold text-foreground", headingSection)}>
            Por qué elegirnos
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Compromiso, experiencia y soluciones pensadas para cada proyecto.
          </p>
        </div>
        <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8", staggerChildren)}>
          {pillars.map((p) => (
            <div key={p.title} className="group text-left">
              <div className={cn(iconTileInteractive)}>
                <p.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground leading-snug">{p.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValorDiferencialSection;
