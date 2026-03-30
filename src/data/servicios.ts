import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Paintbrush,
  ShieldCheck,
  Wrench,
  Droplets,
  Sun,
  Zap,
  Layers,
  CircleDot,
  Cable,
  Grid3X3,
  TreePine,
  Sparkles,
  Bug,
  Factory,
  Users,
} from "lucide-react";

export type ServiceCategoryId = "altura" | "pintura" | "proteccion" | "otros";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceCategory {
  id: ServiceCategoryId;
  title: string;
  subtitle: string;
  summaryIcon: LucideIcon;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "altura",
    title: "Servicios en Altura y Áreas de Difícil Acceso",
    subtitle: "Acceso especializado con máxima seguridad y reducción de riesgos",
    summaryIcon: Building2,
    items: [
      { icon: Building2, title: "Limpieza de cartelería, techos y fachadas", desc: "Mantenimiento integral en altura con equipos certificados." },
      { icon: Droplets, title: "Limpieza de vidrios en altura", desc: "Resultados impecables con técnicas profesionales de acceso." },
      { icon: CircleDot, title: "Limpieza de cúpulas", desc: "Acceso seguro a estructuras complejas y de difícil alcance." },
      { icon: Wrench, title: "Mantenimiento y reparación en altura", desc: "Reparaciones especializadas sin interrumpir sus operaciones." },
      { icon: Zap, title: "Instalación eléctrica de cartelería", desc: "Instalación y reparación eléctrica en altura y superficie." },
      { icon: Sun, title: "Mantenimiento de paneles solares", desc: "Limpieza y mantenimiento para máximo rendimiento energético." },
    ],
  },
  {
    id: "pintura",
    title: "Pintura de Señalización y Grandes Áreas",
    subtitle: "Ejecución profesional con materiales de alta durabilidad",
    summaryIcon: Paintbrush,
    items: [
      { icon: Paintbrush, title: "Pintura en altura", desc: "Acabados profesionales en fachadas y estructuras elevadas." },
      { icon: Layers, title: "Texturado en altura", desc: "Aplicación de texturas con técnicas industriales avanzadas." },
      { icon: Grid3X3, title: "Demarcación de estacionamientos", desc: "Señalización vial y demarcación con pintura de alto tráfico." },
    ],
  },
  {
    id: "proteccion",
    title: "Sistemas de Protección Colectiva",
    subtitle: "Cumplimiento normativo y certificación bajo estándares europeos",
    summaryIcon: ShieldCheck,
    items: [
      { icon: CircleDot, title: "Puntos de anclaje", desc: "Venta e instalación certificada de puntos de anclaje." },
      { icon: Cable, title: "Líneas de vida", desc: "Sistemas horizontales y verticales bajo normativa europea." },
      { icon: ShieldCheck, title: "Redes protectoras y barandas", desc: "Instalación de redes y barandas en cubierta." },
      { icon: ShieldCheck, title: "Certificación periódica", desc: "Inspección según requisitos de fabricantes certificados." },
      { icon: Wrench, title: "Servicio post-venta", desc: "Mantenimiento, instructivo de uso y soporte continuo." },
    ],
  },
  {
    id: "otros",
    title: "Otros Servicios",
    subtitle: "Soluciones complementarias para el mantenimiento integral",
    summaryIcon: TreePine,
    items: [
      { icon: TreePine, title: "Jardinería en altura y grandes áreas", desc: "Mantenimiento de áreas verdes en zonas complejas." },
      { icon: Sparkles, title: "Lavado de alfombras, cortinas y sillones", desc: "Limpieza profunda profesional para espacios corporativos." },
      { icon: Users, title: "RRHH para mantenimiento", desc: "Personal capacitado para limpieza de áreas públicas." },
      { icon: Factory, title: "Maestranza y desengrase industrial", desc: "Lavado y desengrase de galpones y playas industriales." },
      { icon: Bug, title: "Control de plagas", desc: "Servicios especializados para el control de plagas." },
    ],
  },
];
