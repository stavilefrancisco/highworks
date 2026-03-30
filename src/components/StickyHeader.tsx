import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/highworks-logo.png";
import { ctaPrimaryCompact } from "@/lib/cta-styles";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", to: "/", isRouter: true },
  { label: "Servicios", to: "/servicios", isRouter: true },
  { label: "Protección Anticaída", href: "/#luxtop" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Contacto", href: "/#contacto" },
] as const;

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (isActive: boolean) =>
    cn(
      "text-sm font-medium transition-colors duration-200",
      isHome && !scrolled ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-primary",
      isActive && !(isHome && !scrolled) && "text-primary font-semibold",
      isActive && isHome && !scrolled && "text-white font-semibold"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border/70 bg-card/95 shadow-md backdrop-blur-md" : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-main flex items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-90" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="High Works - Limpieza en Altura" className="h-10 md:h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {navItems.map((item) =>
            "to" in item && item.isRouter ? (
              <Link
                key={item.to}
                to={item.to}
                className={navLinkClass(location.pathname === item.to)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={"href" in item ? item.href : item.to}
                href={"href" in item ? item.href : item.to}
                className={navLinkClass(false)}
              >
                {item.label}
              </a>
            )
          )}
          <a href="/#contacto" className={cn(ctaPrimaryCompact)}>
            Solicitar Cotización
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-foreground transition-colors hover:text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden animate-fade-in border-t border-border bg-card" aria-label="Menú móvil">
          <div className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) =>
              "to" in item && item.isRouter ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    location.pathname === item.to ? "text-primary font-semibold" : "text-foreground/80"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={"href" in item ? item.href : item.to}
                  href={"href" in item ? item.href : item.to}
                  className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
            <a
              href="/#contacto"
              className={cn(ctaPrimaryCompact, "text-center")}
              onClick={() => setMenuOpen(false)}
            >
              Solicitar Cotización
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default StickyHeader;

