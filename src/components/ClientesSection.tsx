import client1 from "@/assets/clients/client-1.webp";
import client2 from "@/assets/clients/client-2.webp";
import client3 from "@/assets/clients/client-3.webp";
import client4 from "@/assets/clients/client-4.webp";
import client5 from "@/assets/clients/client-5.webp";
import client6 from "@/assets/clients/client-6.webp";
import client7 from "@/assets/clients/client-7.webp";
import client8 from "@/assets/clients/client-8.webp";
import client9 from "@/assets/clients/client-9.webp";
import client10 from "@/assets/clients/client-10.webp";
import client11 from "@/assets/clients/client-11.webp";
import client12 from "@/assets/clients/client-12.webp";
import { headingSection, logoStripItem } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const clients = [
  { src: client1, alt: "Cliente 1" },
  { src: client2, alt: "Cliente 2" },
  { src: client3, alt: "Cliente 3" },
  { src: client4, alt: "Cliente 4" },
  { src: client5, alt: "Cliente 5" },
  { src: client6, alt: "Cliente 6" },
  { src: client7, alt: "Cliente 7" },
  { src: client8, alt: "Cliente 8" },
  { src: client9, alt: "Cliente 9" },
  { src: client10, alt: "Cliente 10" },
  { src: client11, alt: "Cliente 11" },
  { src: client12, alt: "Cliente 12" },
];

const ClientesSection = () => {
  return (
    <section id="clientes" className="section-padding bg-card" aria-label="Clientes">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground", headingSection)}>Clientes que nos eligen</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Grandes marcas confían en nuestra calidad y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client, idx) => (
            <div key={idx} className={logoStripItem}>
              <img src={client.src} alt={client.alt} className="max-h-16 w-auto object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientesSection;
