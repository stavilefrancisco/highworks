import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { serviceCategories, type ServiceCategory, type ServiceCategoryId } from "@/data/servicios";
import { detailServiceCard, detailServiceIcon, linkAccent } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const LUXTOP_URL = "https://lineadevidaluxtop.cl/";

function CategoryHero({ cat }: { cat: ServiceCategory }) {
  const [broken, setBroken] = useState(false);
  const showPhoto = Boolean(cat.imageSrc) && !broken;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-muted shadow-sm transition-shadow duration-300 hover:shadow-md">
      {showPhoto && (
        <img
          src={cat.imageSrc}
          alt={cat.imageAlt ?? cat.title}
          className="service-hero-photo h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
      {!showPhoto && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 to-muted" aria-hidden>
          <cat.summaryIcon className="h-16 w-16 text-primary/40" strokeWidth={1.25} />
        </div>
      )}
    </div>
  );
}

const ServiciosDetalleSection = () => {
  const [expandedCat, setExpandedCat] = useState<ServiceCategoryId | null>(null);

  return (
    <section className="section-padding bg-card" aria-label="Detalle de servicios">
      <div className="container-main space-y-20">
        {serviceCategories.map((cat, catIdx) => {
          const isOther = cat.id === "otros";
          const isExpanded = expandedCat === cat.id;
          const visibleItems = isOther && !isExpanded ? cat.items.slice(0, 3) : cat.items;

          return (
            <div
              key={cat.id}
              id={cat.id}
              className="scroll-mt-28 animate-fade-in-up"
              style={{ animationDelay: `${catIdx * 0.08}s` }}
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{cat.title}</h2>
                  <p className="mt-2 text-muted-foreground text-lg">{cat.subtitle}</p>
                  {cat.id === "proteccion" && (
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      Como{" "}
                      <Link to="/#luxtop" className={linkAccent}>
                        representantes oficiales de Luxtop
                      </Link>{" "}
                      en Chile y Argentina, ofrecemos sistemas certificados y soporte alineado con estándares europeos.{" "}
                      <a href={LUXTOP_URL} target="_blank" rel="noopener noreferrer" className={cn(linkAccent, "inline-flex items-center gap-1")}>
                        Conocer Luxtop
                        <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      </a>
                    </p>
                  )}
                </div>
                <CategoryHero cat={cat} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleItems.map((item, idx) => (
                  <div key={idx} className={detailServiceCard}>
                    <div className="flex items-start gap-4">
                      <div className={detailServiceIcon}>
                        <item.icon className="h-5 w-5 text-primary" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                        <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {isOther && cat.items.length > 3 && (
                <button
                  type="button"
                  onClick={() => setExpandedCat(isExpanded ? null : cat.id)}
                  className={cn(linkAccent, "mt-4 bg-transparent p-0 text-left")}
                >
                  {isExpanded ? "Ver menos" : `Ver todos los servicios (${cat.items.length})`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiciosDetalleSection;
