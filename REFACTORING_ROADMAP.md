# 🚀 Portfolio Refactoring Roadmap

**Fecha de inicio:** 16 Diciembre 2025  
**Estrategia:** Performance First → Clean Code → Arquitectura → TypeScript

---

## 📊 RESUMEN DE PROGRESO

- **Total de Tickets:** 26
- **Completados:** 1 ✅
- **En Progreso:** 0 🔄
- **Pendientes:** 25 ⏳

---

## 🔴 PROBLEMAS CRÍTICOS IDENTIFICADOS

### Performance Issues
- [ ] LCP > 2.5s (Google Fonts bloqueantes)
- [ ] Imágenes sin optimización (60+ archivos)
- [ ] No hay lazy loading
- [ ] Bundle size no optimizado
- [ ] Re-renders innecesarios

### Code Quality Issues
- [ ] Violaciones SRP en `page.jsx` (129 líneas, 5+ responsabilidades)
- [ ] Violaciones SRP en `cardpaginas.jsx` (194 líneas, 6+ responsabilidades)
- [ ] Código duplicado (useEffect, lógica de modal)
- [ ] Código muerto (hexToRgb, Contexts no usados)

### Architecture Issues
- [ ] Gestión de estado inconsistente (Redux + Context sin usar)
- [ ] Props drilling excesivo
- [ ] No hay TypeScript
- [ ] Estructura de carpetas no escalable

---

## 📋 FASE 1: FUNDAMENTOS (Performance Crítica)

**Objetivo:** Mejorar Core Web Vitals en 1-2 días

### ✅ PERF-001: Migrar Google Fonts a next/font
**Status:** ✅ COMPLETADO  
**Prioridad:** 🔴 CRÍTICA  
**Impacto estimado:** LCP -0.5s

**Cambios realizados:**
- ✅ Montserrat agregada a `layout.js` con `next/font/google`
- ✅ Configurado `display: 'swap'` para evitar FOIT
- ✅ Weights optimizados: 300, 500, 700, 900
- ✅ Eliminado `<link>` bloqueante de `page.jsx`
- ✅ Variable CSS `--font-montserrat` disponible globalmente

**Archivos modificados:**
- ✅ `src/app/layout.js`
- ✅ `src/app/page.jsx`
- ✅ `src/app/globals.css`

**Commit:** `perf(fonts): migrate Google Fonts to next/font in layout`
**Fecha:** 16 Diciembre 2025

---

### ⏳ PERF-002: Auditar y convertir imágenes a WebP
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA  
**Impacto estimado:** Bundle -30%, LCP -0.3s

**Problema actual:**
- 60+ archivos PNG/JPEG/GIF en `/public`
- Tamaños sin optimizar
- GIFs pesados (`noise.gif`, `background.gif`)

**Solución:**
- Convertir PNG/JPEG → WebP
- Optimizar GIFs → CSS animations o video
- Eliminar imágenes no utilizadas

**Archivos afectados:**
- [ ] `/public/*.png` → `.webp`
- [ ] `/public/*.jpg` → `.webp`
- [ ] `/public/*.gif` → optimizar

**Commit:** `perf(images): convert PNG/JPEG to WebP format`

---

### ⏳ PERF-003: Reemplazar <img> por next/image con dimensiones
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA  
**Impacto estimado:** CLS -0.1, LCP -0.2s

**Problema actual:**
```jsx
// stack.jsx
<img src={icon.src} width={45} height={45} alt={icon.alt} />
```

**Solución:**
- Usar `next/image` con width/height explícitos
- Implementar `priority` para above-the-fold images
- Configurar `sizes` para responsive

**Archivos afectados:**
- [ ] `src/app/stack/stack.jsx`
- [ ] `src/app/landing/aboutMe.jsx`
- [ ] Otros componentes con `<img>`

**Commit:** `perf(images): replace img tags with next/image and explicit dimensions`

---

### ⏳ PERF-004: Implementar lazy loading para componentes below-the-fold
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA  
**Impacto estimado:** Initial Bundle -40%, FCP -0.4s

**Problema actual:**
```jsx
// page.jsx - todos los componentes se cargan al inicio
import AboutMe from "./landing/aboutMe";
import Language from "./language/language";
// ... 15+ imports
```

**Solución:**
- Usar `React.lazy()` y `Suspense`
- Lazy load componentes no visibles inicialmente
- Priorizar componentes above-the-fold

**Componentes para lazy load:**
- [ ] Github
- [ ] Stack
- [ ] Spotify
- [ ] SoyHenry
- [ ] Recomendaciones
- [ ] VideoPortfolio (modal)

**Archivos afectados:**
- [ ] `src/app/page.jsx`

**Commit:** `perf(lazy): implement lazy loading for below-the-fold components`

---

### ⏳ PERF-005: Optimizar GIFs → CSS/Video
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA  
**Impacto estimado:** Bundle -500KB, LCP -0.2s

**Problema actual:**
```jsx
// noise.jsx
background-image: url(../../public/noise.gif);
```

**Solución:**
- `noise.gif` → CSS filter o SVG pattern
- `background.gif` → video MP4 (mejor compresión)
- Implementar lazy loading para backgrounds

**Archivos afectados:**
- [ ] `/public/noise.gif`
- [ ] `/public/background.gif`
- [ ] `src/app/noise/noise.jsx`
- [ ] `src/app/helpers/NoiseBackground.jsx`

**Commit:** `perf(assets): replace heavy GIFs with CSS/video alternatives`

---

### ⏳ PERF-006: Configurar next.config.js para optimización
**Status:** Pendiente  
**Prioridad:** 🟡 MEDIA  
**Impacto estimado:** Bundle -10%

**Problema actual:**
```javascript
// next.config.js
const nextConfig = {};
module.exports = { images: { domains: [...] }};
```

**Solución:**
```javascript
module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
}
```

**Archivos afectados:**
- [ ] `next.config.js`

**Commit:** `perf(config): optimize next.config for images and bundle size`

---

## 📋 FASE 2: CLEAN CODE (SOLID)

### ⏳ REFACTOR-001: Eliminar código muerto
**Status:** Pendiente  
**Prioridad:** 🟢 MEDIA

**Código a eliminar:**
- [ ] `hexToRgb` function (cardpaginas.jsx línea 62-70) - nunca usada
- [ ] `DarkModeContext.js` - no utilizado (se usa Redux)
- [ ] `LanguageContext.js` - no utilizado (se usa Redux)
- [ ] `useEffect` duplicado (page.jsx líneas 29-36)

**Archivos afectados:**
- [ ] `src/app/projects/cardpaginas.jsx`
- [ ] `src/app/contexts/DarkModeContext.js`
- [ ] `src/app/contexts/LanguageContext.js`
- [ ] `src/app/page.jsx`

**Commit:** `refactor(cleanup): remove dead code and unused contexts`

---

### ⏳ REFACTOR-002: Extraer lógica de modal a custom hook
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA

**Problema:** Lógica de modal repetida en 3 componentes

**Crear:**
```javascript
// src/app/hooks/useModal.js
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback((e) => {
    e?.stopPropagation();
    setIsOpen(false);
  }, []);
  return { isOpen, open, close };
}
```

**Archivos afectados:**
- [ ] Crear `src/app/hooks/useModal.js`
- [ ] Refactor `src/app/projects/cardpaginas.jsx`
- [ ] Refactor `src/app/videoPortfolio/videoPortfolio.jsx`
- [ ] Refactor `src/app/recomendaciones/recomendaciones.jsx`

**Commit:** `refactor(hooks): extract modal logic to useModal custom hook`

---

### ⏳ REFACTOR-003: Extraer detección táctil a useTouchDevice
**Status:** Pendiente  
**Prioridad:** 🟢 MEDIA

**Crear:**
```javascript
// src/app/hooks/useTouchDevice.js
export function useTouchDevice() {
  return useMemo(() => (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  ), []);
}
```

**Archivos afectados:**
- [ ] Crear `src/app/hooks/useTouchDevice.js`
- [ ] Refactor `src/app/projects/cardpaginas.jsx`

**Commit:** `refactor(hooks): extract touch detection to useTouchDevice hook`

---

### ⏳ REFACTOR-004: Crear componente GridLayout
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA

**Objetivo:** Reducir `page.jsx` de 129 a ~50 líneas

**Crear:**
- `src/app/components/layouts/GridLayout.jsx`
- `src/app/components/layouts/MobileLayout.jsx`

**Archivos afectados:**
- [ ] Crear componentes layout
- [ ] Refactor `src/app/page.jsx`

**Commit:** `refactor(layout): extract grid layout to separate component`

---

### ⏳ REFACTOR-005: Dividir Card component (SRP)
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA

**Objetivo:** Card.jsx 194 líneas → 3 archivos < 70 líneas c/u

**Crear:**
- `Card.jsx` (presentational, 50 líneas)
- `useCardLogic.js` (business logic, 40 líneas)
- `CardModal.jsx` (modal UI, 60 líneas)

**Archivos afectados:**
- [ ] Dividir `src/app/projects/cardpaginas.jsx`

**Commit:** `refactor(card): split Card component following SRP`

---

### ⏳ REFACTOR-006: Crear ModalOverlay reutilizable
**Status:** Pendiente  
**Prioridad:** 🟢 MEDIA

**Crear:**
```javascript
// src/app/components/ui/ModalOverlay.jsx
export function ModalOverlay({ isOpen, onClose, children, ...props }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} {...props}>
      {children}
    </Modal>
  );
}
```

**Archivos afectados:**
- [ ] Crear `src/app/components/ui/ModalOverlay.jsx`
- [ ] Refactor todos los componentes con modales

**Commit:** `refactor(ui): create reusable ModalOverlay component`

---

### ⏳ REFACTOR-007: Extraer constantes de estilo
**Status:** Pendiente  
**Prioridad:** 🟢 BAJA

**Crear:**
```javascript
// src/app/config/modalStyles.js
export const MODAL_STYLES = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(5px)",
  },
  // ...
};
```

**Archivos afectados:**
- [ ] Crear `src/app/config/modalStyles.js`
- [ ] Refactor componentes que usan inline styles

**Commit:** `refactor(config): extract inline styles to configuration file`

---

### ⏳ REFACTOR-008: Crear hooks folder y centralizar
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA

**Crear:**
- `src/app/hooks/useTheme.js`
- `src/app/hooks/useLanguage.js`
- `src/app/hooks/useModal.js`
- `src/app/hooks/useTouchDevice.js`
- `src/app/hooks/index.js` (barrel export)

**Archivos afectados:**
- [ ] Crear carpeta y hooks
- [ ] Actualizar imports en componentes

**Commit:** `refactor(hooks): centralize custom hooks in dedicated folder`

---

### ⏳ REFACTOR-009: Implementar memoización
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA

**Aplicar:**
- `React.memo` a componentes puros (AboutMe, Stack, etc.)
- `useCallback` para event handlers
- `useMemo` para cálculos costosos

**Archivos afectados:**
- [ ] Todos los componentes presentacionales

**Commit:** `perf(memo): implement React.memo and useCallback to prevent re-renders`

---

### ⏳ REFACTOR-010: Reorganizar en features
**Status:** Pendiente  
**Prioridad:** 🟡 MEDIA

**Nueva estructura:**
```
src/app/
├── features/
│   ├── portfolio/
│   ├── audiovisual/
│   ├── theme/
│   └── i18n/
├── components/
│   ├── ui/
│   └── layouts/
└── hooks/
```

**Commit:** `refactor(structure): reorganize codebase by feature domains`

---

## 📋 FASE 3: ARQUITECTURA

### ⏳ ARCH-001: Consolidar gestión de estado
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA

**Decisión:** Mantener Redux, eliminar Contexts no usados

**Archivos afectados:**
- [ ] Eliminar `DarkModeContext.js`
- [ ] Eliminar `LanguageContext.js`
- [ ] Documentar decisión

**Commit:** `arch(state): consolidate state management using Redux only`

---

### ⏳ ARCH-002: Optimizar Redux con reselect
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA

**Implementar:**
- Selectores memoizados
- Slices por feature

**Commit:** `arch(redux): implement memoized selectors with reselect`

---

### ⏳ ARCH-003: Crear barrel exports
**Status:** Pendiente  
**Prioridad:** 🟢 BAJA

**Commit:** `arch(exports): add barrel exports for cleaner imports`

---

### ⏳ ARCH-004: Implementar error boundaries
**Status:** Pendiente  
**Prioridad:** 🟡 MEDIA

**Commit:** `arch(errors): add error boundaries for graceful failure handling`

---

### ⏳ ARCH-005: Configurar ESLint + Prettier
**Status:** Pendiente  
**Prioridad:** 🟡 MEDIA

**Commit:** `arch(lint): configure ESLint with SOLID and performance rules`

---

### ⏳ ARCH-006: Documentar arquitectura
**Status:** Pendiente  
**Prioridad:** 🟢 BAJA

**Crear:** `ARCHITECTURE.md`

**Commit:** `docs(arch): add architecture documentation`

---

## 📋 FASE 4: TYPESCRIPT MIGRATION

### ⏳ TS-001: Configurar TypeScript
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA

**Commit:** `feat(ts): initialize TypeScript configuration`

---

### ⏳ TS-002: Crear interfaces
**Status:** Pendiente  
**Prioridad:** 🔴 CRÍTICA

**Commit:** `feat(ts): define TypeScript interfaces for components`

---

### ⏳ TS-003: Tipar Redux store
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA

**Commit:** `feat(ts): add TypeScript types to Redux store`

---

### ⏳ TS-004: Habilitar strict mode
**Status:** Pendiente  
**Prioridad:** 🟡 ALTA

**Commit:** `feat(ts): enable strict mode and resolve type errors`

---

## 📈 MÉTRICAS OBJETIVO

### Core Web Vitals
| Métrica | Actual | Objetivo | Estado |
|---------|--------|----------|--------|
| LCP | ~4.0s | < 2.5s | ⏳ |
| FID | ~200ms | < 100ms | ⏳ |
| CLS | ~0.15 | < 0.1 | ⏳ |

### Bundle Size
| Tipo | Actual | Objetivo | Estado |
|------|--------|----------|--------|
| First Load JS | ~280KB | < 200KB | ⏳ |
| Total Bundle | ~2MB | < 1MB | ⏳ |

---

## 🎯 SESIÓN ACTUAL

**Fecha:** 16 Diciembre 2025  
**Objetivo:** Completar FASE 1 (PERF-001 a PERF-006)

### ✅ Completado
- **PERF-001:** Migrar Google Fonts a next/font

### Próximo Ticket
**→ PERF-002: Auditar y convertir imágenes a WebP**

---

## 📝 NOTAS

- Cada ticket debe resultar en un commit atómico
- Testear después de cada cambio
- Actualizar este archivo después de cada commit
- Priorizar tickets con mayor impacto/esfuerzo ratio

---

**Última actualización:** 16 Diciembre 2025 - PERF-001 completado ✅
