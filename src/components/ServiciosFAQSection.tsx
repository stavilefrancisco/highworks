import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { headingSection } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    q: "¿Trabajan bajo qué normativa de seguridad?",
    a: "Nuestros trabajos en altura y sistemas de protección colectiva se ejecutan con criterios alineados a estándares europeos y buenas prácticas del sector, con personal capacitado y equipamiento adecuado.",
  },
  {
    q: "¿En qué zonas operan?",
    a: "High Works tiene presencia en Chile y Argentina. Consultanos por tu ubicación y tipo de proyecto para confirmar disponibilidad.",
  },
  {
    q: "¿Cómo solicito una cotización?",
    a: "Podés completar el formulario de contacto en esta página, escribirnos por WhatsApp o enviar un correo. Cuanto más detalle nos des sobre el trabajo (altura, superficie, accesos), más precisa será nuestra respuesta.",
  },
  {
    q: "¿Instalan y certifican líneas de vida y puntos de anclaje?",
    a: "Sí. En sistemas de protección colectiva ofrecemos venta, instalación, certificación periódica y post-venta. Como representantes de Luxtop, contamos con respaldo de fabricante certificado.",
  },
  {
    q: "¿Realizan trabajos en horarios especiales o con mínima interrupción?",
    a: "Cuando el proyecto lo requiere, coordinamos ventanas de trabajo que minimicen el impacto en tu operación. Lo definimos en la visita o reunión previa.",
  },
];

const ServiciosFAQSection = () => {
  return (
    <section className="section-padding bg-warm" aria-label="Preguntas frecuentes">
      <div className="container-main max-w-3xl mx-auto">
        <h2 className={cn("text-2xl md:text-3xl font-bold text-foreground text-center mb-2", headingSection)}>
          Preguntas frecuentes
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Dudas habituales sobre servicios en altura y protección anticaída.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiciosFAQSection;