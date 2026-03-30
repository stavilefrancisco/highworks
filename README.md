# High Works — Sitio web

Aplicación **Vite + React + TypeScript** con Tailwind CSS y componentes estilo shadcn/ui.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura destacada

- `src/pages/Index.tsx` — página de inicio.
- `src/pages/Servicios.tsx` — catálogo detallado de servicios (`/servicios`).
- `src/data/servicios.ts` — datos de categorías e ítems (fuente única).
- `src/index.css` — utilidades de marca (`.cta-primary`, `.interactive-card`, etc.).
- `src/lib/cta-styles.ts` — nombres de clases reutilizables para CTAs y tarjetas.

## Favicon

- `public/favicon.png` — icono del sitio (basado en el logo).

## Imágenes de referencia (servicios)

Las fotos del catálogo (`/servicios`) se cargan desde **Unsplash** (URLs en `src/data/servicios.ts`). Son referenciales; podés sustituirlas por fotos propias en `public/` y actualizar las rutas.

| Uso en sitio | Unsplash (foto) |
|--------------|-----------------|
| Altura / obra | [photo-1581092160562](https://unsplash.com/photos/1581092160562-40aa08e78837) |
| Demarcación / pintura | [photo-1565008576549](https://unsplash.com/photos/1565008576549-57569a49371d) |
| Trabajo técnico / seguridad | [photo-1621905252507](https://unsplash.com/photos/1621905252507-b35492cc74b4) |
| Limpieza / mantenimiento | [photo-1581578731548](https://unsplash.com/photos/1581578731548-c64695cc6952) |

Condiciones de uso: [Unsplash License](https://unsplash.com/license).

## Tests

```bash
npm run test
```
