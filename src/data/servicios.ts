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
  imageSrc?: string;
  imageAlt?: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "altura",
    title: "Servicios en Altura y Áreas de Difícil Acceso",
    subtitle: "Acceso especializado con máxima seguridad y reducción de riesgos",
    summaryIcon: Building2,
    imageSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Trabajos en altura y limpieza de fachadas",
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
    imageSrc: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Pintura industrial y demarcación",
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
    imageSrc: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Sistemas de líneas de vida y protección anticaída",
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
    imageSrc: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Mantenimiento integral y servicios complementarios",
    items: [
      { icon: TreePine, title: "Jardinería en altura y grandes áreas", desc: "Mantenimiento de áreas verdes en zonas complejas." },
      { icon: Sparkles, title: "Lavado de alfombras, cortinas y sillones", desc: "Limpieza profunda profesional para espacios corporativos." },
      { icon: Users, title: "RRHH para mantenimiento", desc: "Personal capacitado para limpieza de áreas públicas." },
      { icon: Factory, title: "Maestranza y desengrase industrial", desc: "Lavado y desengrase de galpones y playas industriales." },
      { icon: Bug, title: "Control de plagas", desc: "Servicios especializados para el control de plagas." },
    ],
  },
];