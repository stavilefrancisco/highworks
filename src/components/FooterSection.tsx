import { Link } from "react-router-dom";
import logoBlanco from "@/assets/highworks-logo-blanco.png";

const footerLinks = [
  { label: "Servicios", to: "/servicios", router: true },
  { label: "Protección Anticaída", href: "/#luxtop" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Contacto", href: "/#contacto" },
] as const;

const FooterSection = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground" aria-label="Pie de página">
      <div className="container-main px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/">
              <img src={logoBlanco} alt="High Works" className="h-12 w-auto mb-4" loading="lazy" />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Empresa especializada en servicios en altura y áreas de difícil acceso con normativa europea.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary-foreground/80">
              Navegación
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) =>
                "router" in link && link.router ? (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-secondary-foreground/80">
              Contacto
            </h3>
            <a
              href="mailto:fstavile@highworks.cl"
              className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
            >
              fstavile@highworks.cl
            </a>
            <p className="mt-2 text-sm text-secondary-foreground/70">+54 9 261 624 1234</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} High Works. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;