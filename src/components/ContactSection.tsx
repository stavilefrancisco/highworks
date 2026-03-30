import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cardElevated, ctaPrimary, headingSection } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = data.get("nombre") as string;
    const apellido = data.get("apellido") as string;
    const telefono = data.get("telefono") as string;
    const email = data.get("email") as string;
    const empresa = data.get("empresa") as string;

    const subject = encodeURIComponent(`Cotización - ${nombre} ${apellido} - ${empresa}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre} ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nEmpresa: ${empresa}`
    );

    window.location.href = `mailto:fstavile@highworks.cl?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const inputClass =
    "w-full rounded-md border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]";

  return (
    <section id="contacto" className="section-padding bg-warm" aria-label="Contacto">
      <div className="container-main">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className={cn("text-3xl md:text-4xl font-bold text-foreground", headingSection)}>Solicitá tu cotización</h2>
            <p className="mt-4 text-muted-foreground text-lg">Completá el formulario y nos pondremos en contacto a la brevedad.</p>
          </div>

          {submitted ? (
            <div className={cn("text-center rounded-lg bg-card p-10 animate-fade-in", cardElevated)}>
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" aria-hidden />
              <h3 className="text-2xl font-bold text-foreground">¡Mensaje enviado!</h3>
              <p className="mt-2 text-muted-foreground">Respondemos dentro del horario laboral.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={cn("rounded-lg bg-card p-6 md:p-10 space-y-5", cardElevated)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre *
                  </label>
                  <input type="text" id="nombre" name="nombre" required maxLength={100} className={inputClass} placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-foreground mb-1.5">
                    Apellido *
                  </label>
                  <input type="text" id="apellido" name="apellido" required maxLength={100} className={inputClass} placeholder="Tu apellido" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1.5">
                    Teléfono *
                  </label>
                  <input type="tel" id="telefono" name="telefono" required maxLength={20} className={inputClass} placeholder="+54 9 261..." />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" required maxLength={255} className={inputClass} placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-1.5">
                  Empresa
                </label>
                <input type="text" id="empresa" name="empresa" maxLength={200} className={inputClass} placeholder="Nombre de tu empresa" />
              </div>

              <button type="submit" disabled={loading} className={cn(ctaPrimary, "w-full disabled:pointer-events-none disabled:opacity-60")}>
                {loading ? "Enviando..." : "Enviar solicitud"}
                <Send className="h-4 w-4" aria-hidden />
              </button>
              <p className="text-center text-xs text-muted-foreground">Respondemos dentro del horario laboral.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
