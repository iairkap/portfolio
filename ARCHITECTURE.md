# 🏗️ ARQUITECTURA DEL PORTFOLIO

**Proyecto:** Portfolio Personal  
**Framework:** Next.js 16.0.10 (App Router)  
**Última actualización:** 17 Diciembre 2025  
**Estado Refactoring:** 21/27 tickets (78%)

---

## 📋 ÍNDICE

1. [Visión General](#visión-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Patrones de Arquitectura](#patrones-de-arquitectura)
4. [Gestión de Estado](#gestión-de-estado)
5. [Hooks Personalizados](#hooks-personalizados)
6. [Sistema de Routing](#sistema-de-routing)
7. [Optimizaciones de Performance](#optimizaciones-de-performance)
8. [Convenciones de Código](#convenciones-de-código)
9. [Decisiones Técnicas](#decisiones-técnicas)

---

## 🎯 VISIÓN GENERAL

### Stack Tecnológico

```
Frontend:
├─ React 19.2.3
├─ Next.js 16.0.10 (Turbopack)
├─ Redux Toolkit 1.9.5 (state management)
└─ Framer Motion 10.13.0 (animations)

Styling:
├─ CSS Modules (component scoping)
├─ Tailwind CSS (utility-first)
└─ Emotion (MUI integration)

Development:
├─ ESLint 9 (code quality)
├─ Prettier (formatting)
└─ TypeScript 5.x (typing - in progress)

Build & Deploy:
├─ Next.js Turbopack (bundler)
├─ Vercel (deployment - recommended)
└─ Git (version control)
```

### Principios de Diseño

1. **Performance First**: Lazy loading, memoization, optimized assets
2. **Clean Code**: SOLID principles, DRY, separation of concerns
3. **Type Safety**: Gradual TypeScript migration
4. **Maintainability**: Barrel exports, clear folder structure
5. **User Experience**: Error boundaries, responsive design, accessibility

---

## 📂 ESTRUCTURA DEL PROYECTO

```
portfolio/
├── public/                    # Assets estáticos
│   ├── icons/                # Iconos WebP optimizados (500KB total)
│   ├── avatar/               # Imágenes de perfil
│   ├── *.webp               # Imágenes optimizadas
│   └── noise.svg            # SVG para efecto de ruido
│
├── src/app/                  # App Router de Next.js
│   ├── layout.js            # Root layout con providers
│   ├── page.jsx             # Home page
│   ├── globals.css          # Estilos globales
│   │
│   ├── components/          # Componentes compartidos
│   │   ├── index.js        # ✅ Barrel export
│   │   ├── ErrorBoundary.jsx
│   │   ├── VideoGrid.jsx
│   │   ├── headerProjects.jsx
│   │   ├── ui/              # UI primitivos
│   │   │   ├── index.js    # ✅ Barrel export
│   │   │   └── ModalOverlay.jsx
│   │   └── layouts/         # Layout components
│   │       └── GridLayout.jsx (desktop)
│   │
│   ├── hooks/               # Custom hooks centralizados
│   │   ├── index.js        # ✅ Barrel export
│   │   ├── useTheme.js     # Redux selector wrapper
│   │   ├── useLanguage.js  # Redux selector wrapper
│   │   ├── useModal.js     # Modal state logic
│   │   ├── useTouchDevice.js  # Device detection (SSR-safe)
│   │   └── useCardLogic.js # Card business logic
│   │
│   ├── redux/               # State management
│   │   ├── index.js        # ✅ Barrel export
│   │   ├── store.js        # Redux store config
│   │   ├── darkm.js        # Dark mode slice
│   │   ├── languageSlice.js # i18n slice
│   │   └── selectors.js    # ✅ Reselect memoized selectors
│   │
│   ├── config/              # Configuración
│   │   └── modalStyles.js  # Estilos de modales centralizados
│   │
│   ├── constants/           # Constantes y datos
│   │   └── audiovisualProyects.js
│   │
│   ├── helpers/             # Utilities
│   │   └── NoiseBackground.jsx
│   │
│   ├── projects/            # Página de proyectos web
│   │   ├── page.jsx
│   │   ├── cardpaginas.jsx # Card component
│   │   ├── CardModal.jsx   # Modal (SRP)
│   │   └── *.module.css
│   │
│   ├── audiovisual/         # Página audiovisual
│   │   └── page.jsx
│   │
│   └── [otros features]/    # Componentes por feature
│       ├── darkMode/
│       ├── language/
│       ├── github/
│       ├── linkedin/
│       └── ... (16 features)
│
├── scripts/                  # Utilidades de build
│   └── optimize-images.js   # Conversión a WebP
│
└── Configuration files
    ├── next.config.js       # Next.js config
    ├── eslint.config.mjs    # ESLint 9 flat config
    ├── .prettierrc          # Prettier config
    ├── tailwind.config.js   # Tailwind config
    └── tsconfig.json        # TypeScript config
```

---

## 🎨 PATRONES DE ARQUITECTURA

### 1. App Router (Next.js 16)

```javascript
// Layout Hierarchy
RootLayout (layout.js)
  └─ ReduxProvider
     └─ ErrorBoundary (app-wide)
        └─ children (pages)

// Routing
/ → page.jsx (Home)
/projects → projects/page.jsx (Web projects)
/audiovisual → audiovisual/page.jsx (Video portfolio)
```

**Ventajas:**
- Server Components por defecto
- Streaming y Suspense nativo
- Layouts compartidos
- Optimizaciones automáticas

### 2. Component Composition

```jsx
// ❌ Antes: Monolito
function Card() {
  // 300+ líneas de lógica, UI, estado, modal
}

// ✅ Después: Composición (SRP)
function Card() {
  const logic = useCardLogic();  // Business logic
  return (
    <>
      <CardUI {...logic} />        // Presentation
      <CardModal {...modal} />     // Feature específico
    </>
  );
}
```

### 3. Barrel Exports Pattern

```javascript
// components/index.js
export { default as ErrorBoundary } from "./ErrorBoundary";
export { default as VideoGrid } from "./VideoGrid";

// Usage
import { ErrorBoundary, VideoGrid } from "../components";
// vs
import ErrorBoundary from "../components/ErrorBoundary";
import VideoGrid from "../components/VideoGrid";
```

**Beneficios:**
- Imports limpios
- Single source of truth
- Facilita refactoring
- Mejor tree-shaking

### 4. CSS Modules Pattern

```jsx
// Component
import styles from "./component.module.css";

function Component() {
  return <div className={styles.container}>...</div>;
}

// CSS (scoped)
.container { /* solo aplica a este componente */ }
```

**Ventajas:**
- Scoping automático (no colisiones)
- Type-safe con TypeScript
- Bundle optimization
- Performance mejorada vs CSS-in-JS

---

## 🔄 GESTIÓN DE ESTADO

### Redux Toolkit (Single Source of Truth)

**Decisión:** Redux único, Context API eliminado (ARCH-001)

```javascript
// Store Structure
{
  darkMode: {
    value: boolean  // true = dark, false = light
  },
  language: {
    value: "ES" | "EN"
  }
}
```

### Slices

```javascript
// darkm.js
export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: { value: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.value = !state.value;
    }
  }
});

// languageSlice.js
export const languageSlice = createSlice({
  name: "language",
  initialState: { value: "ES" },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    }
  }
});
```

### Memoized Selectors (Reselect)

```javascript
// selectors.js
import { createSelector } from 'reselect';

const selectDarkModeState = (state) => state.darkMode;

export const selectDarkMode = createSelector(
  [selectDarkModeState],
  (darkModeState) => darkModeState.value
);
```

**Ventajas:**
- Memoización automática
- Prevención de re-renders innecesarios
- Performance optimizada
- Caching de valores derivados

### Persistence

```javascript
// Redux Persist (disabled actualmente)
// Persistencia en localStorage para darkMode y language
// Configurado pero no activo (ver store.js)
```

---

## 🪝 HOOKS PERSONALIZADOS

### useTheme

```javascript
/**
 * Centraliza acceso al estado de darkMode
 * Usa selector memoizado para optimizar performance
 */
export function useTheme() {
  return useSelector(selectDarkMode);
}

// Usage
const darkMode = useTheme();
const styles = darkMode ? styles.dark : styles.light;
```

### useLanguage

```javascript
/**
 * Centraliza acceso al idioma actual
 * Usa selector memoizado de Redux
 */
export function useLanguage() {
  return useSelector(selectLanguage);
}

// Usage
const language = useLanguage();
const text = language === "ES" ? "Hola" : "Hello";
```

### useModal

```javascript
/**
 * Lógica reutilizable para modales
 * Estado + callbacks memoizados
 */
export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  
  return { isOpen, openModal, closeModal };
}
```

### useTouchDevice

```javascript
/**
 * Detección de dispositivos touch
 * SSR-safe (no accede a window hasta mounting)
 */
export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );
  }, []);
  
  return isTouchDevice;
}
```

### useCardLogic

```javascript
/**
 * Lógica de negocio para Card components
 * Separa business logic de presentación (SRP)
 */
export function useCardLogic() {
  const language = useLanguage();
  const darkMode = useTheme();
  const { isOpen, openModal, closeModal } = useModal();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return {
    language,
    darkMode,
    isMobile,
    modal: { isOpen, openModal, closeModal }
  };
}
```

---

## 🛣️ SISTEMA DE ROUTING

### Rutas Principales

```
/ (Home)
├─ GridLayout (desktop)
│  ├─ AboutMe
│  ├─ Stack
│  ├─ Language
│  ├─ DarkMode
│  ├─ Github (lazy)
│  ├─ VideoPortfolio (lazy)
│  └─ ... (16 components total)
│
├─ Mobile Layout
│  └─ (responsive components)
│
/projects
├─ HeaderProjects
├─ Card Grid
└─ CardModal (on click)

/audiovisual
├─ HeaderProjects
└─ VideoGrid
```

### Lazy Loading Strategy

```javascript
// page.jsx
const Github = dynamic(() => import("../github/github"), { ssr: false });
const Stack = dynamic(() => import("../stack/stack"), { ssr: false });
// ... 7 more lazy components

// Ventajas:
// - Reducción de bundle inicial
// - Carga on-demand de features no críticos
// - Suspense boundaries automáticos
```

---

## ⚡ OPTIMIZACIONES DE PERFORMANCE

### 1. Imágenes

**Antes:**
- PNG/JPEG sin optimizar: ~90 MB
- `<img>` tags sin lazy loading

**Después:**
- WebP optimizado: ~9.8 MB (-89%)
- `next/image` con lazy loading automático
- Responsive sizes y srcset

```jsx
<Image
  src="/icons/project.webp"
  alt="Project"
  width={300}
  height={200}
  loading="lazy"  // Automático con next/image
/>
```

### 2. React Optimization

```javascript
// React.memo para componentes puros
export default memo(function Github() {
  // ...
});

// useCallback para funciones estables
const handleClick = useCallback(() => {
  // ...
}, [dependencies]);

// useMemo para cálculos costosos
const icons = useMemo(() => [
  { name: "react", icon: <FaReact /> },
  // ...
], []);
```

**16 componentes con memo:**
- AboutMe, Stack, Github, English, Email
- Spotify, Whatsapp, SoyHenry, Linkedin
- Proyectos, Recomendaciones, DarkMode
- Language, Edad, VideoPortfolio, Card

### 3. Bundle Optimization

```javascript
// next.config.js
{
  swcMinify: true,        // SWC minification (Rust-based, rápido)
  optimizeFonts: true,   // Font optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
```

### 4. Code Splitting

- Lazy loading de 9 componentes
- Dynamic imports para features no críticos
- Suspense boundaries
- Tree-shaking automático con Turbopack

### 5. Métricas Actuales

```
Build Time: 4.5s (Turbopack)
Bundle JS: ~808 KB (compressed)
Public Assets: 9.8 MB (WebP optimizado)

Performance Metrics:
- FCP: ~1.8s (-48%)
- LCP: ~4.5s (-31%)
- TTI: ~5.0s (-31%)
- CLS: ~0.05 (-80%)
```

---

## 📝 CONVENCIONES DE CÓDIGO

### Naming Conventions

```javascript
// Components: PascalCase
ErrorBoundary.jsx
VideoGrid.jsx

// Hooks: camelCase con 'use' prefix
useTheme.js
useLanguage.js

// Constants: UPPER_SNAKE_CASE
const MODAL_STYLES = { ... };

// CSS Modules: kebab-case
cardpaginas.module.css
error-boundary.module.css
```

### File Organization

```
feature/
├── component.jsx         # Component logic
├── component.module.css  # Scoped styles
└── index.js             # Barrel export (opcional)
```

### Import Order

```javascript
// 1. React & Next.js
import React from "react";
import Image from "next/image";

// 2. External libraries
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

// 3. Internal: hooks, redux, components
import { useTheme, useLanguage } from "../hooks";
import { setLanguage } from "../redux";
import { ErrorBoundary } from "../components";

// 4. Styles
import styles from "./component.module.css";

// 5. Assets
import logo from "../../../public/logo.svg";
```

### ESLint Rules

```javascript
// SOLID Principles
"max-lines-per-function": ["warn", 50],
"complexity": ["warn", 10],
"max-depth": ["warn", 3],

// Performance
"no-console": ["warn", { "allow": ["warn", "error"] }],

// Code Quality
"prefer-const": "warn",
"no-var": "error",
"eqeqeq": ["error", "always"]
```

---

## 🤔 DECISIONES TÉCNICAS

### 1. ¿Por qué Redux en lugar de Context API?

**Decisión (ARCH-001):** Redux único, eliminar Context API

**Razones:**
- ✅ Performance: Reselect memoization
- ✅ DevTools: Time-travel debugging
- ✅ Middleware: Redux Thunk para async
- ✅ Persistence: Redux Persist ready
- ✅ Escalabilidad: Mejor para estado complejo

**Context API removido:**
- ❌ LanguageContext.js (eliminado)
- ❌ Re-renders innecesarios
- ❌ No memoization built-in

### 2. ¿Por qué CSS Modules sobre styled-components?

**Decisión:** CSS Modules + Tailwind

**Razones:**
- ✅ Performance: Sin runtime overhead
- ✅ Bundle size: CSS puro minificado
- ✅ SSR: Sin hydration issues
- ✅ Familiar: Sintaxis CSS estándar
- ✅ Scoping: Automático sin JS

### 3. ¿Por qué Lazy Loading selectivo?

**Decisión:** 9 componentes lazy, 7 eager

**Criterios:**
- **Lazy:** Below-the-fold, no críticos
- **Eager:** Above-the-fold, interactivos

**Componentes Lazy:**
```
Github, Stack, English, VideoPortfolio
Whatsapp, Email, Spotify, SoyHenry, Edad
```

### 4. ¿Por qué Next.js 16 con Turbopack?

**Razones:**
- ✅ Build speed: 5x más rápido que Webpack
- ✅ HMR: Instant feedback en development
- ✅ App Router: Server Components
- ✅ Optimizaciones: Image, Font, Script automáticos

### 5. ¿Por qué TypeScript gradual?

**Decisión:** Migración progresiva

**Estrategia:**
1. Phase 1: Config + interfaces (TS-001)
2. Phase 2: Redux + hooks (TS-002)
3. Phase 3: Core components (TS-003)
4. Phase 4: Resto del proyecto (TS-004)

**Beneficios:**
- ✅ Zero breaking changes
- ✅ Incremental adoption
- ✅ Time to market controlado

---

## 📊 ESTADO DEL REFACTORING

**Completados: 21/27 (78%)**

### ✅ Performance (7/7)
- next/font optimization
- WebP images (-89%)
- next/image component
- Lazy loading (9 components)
- GIF → SVG (-99.96%)
- next.config optimizations
- Next.js 13→16, React 18→19

### ✅ Clean Code (9/10)
- Dead code removal
- Custom hooks (5 hooks)
- Component extraction (GridLayout, CardModal)
- Memoization (16 components)
- Config centralization

### ✅ Architecture (5/6)
- State consolidation (Redux only)
- Reselect memoization
- Error boundaries
- ESLint + Prettier
- Barrel exports

### ⏳ Pending (6 tickets)
- REFACTOR-010: Feature-based structure
- ARCH-006: This documentation ✅
- TS-001-004: TypeScript migration (4 tickets)

---

## 🚀 PRÓXIMOS PASOS

1. **Completar REFACTOR-010**
   - Reorganizar por features
   - Coubicación de archivos relacionados

2. **TypeScript Migration**
   - Fase 1: tsconfig + interfaces
   - Fase 2: Redux typing
   - Fase 3: Component typing
   - Fase 4: Complete migration

3. **Performance Monitoring**
   - Lighthouse CI
   - Web Vitals tracking
   - Bundle analyzer integration

4. **Testing**
   - Unit tests con Vitest
   - Integration tests con Testing Library
   - E2E tests con Playwright

---

## 📚 REFERENCIAS

- [Next.js Docs](https://nextjs.org/docs)
- [React 19 Features](https://react.dev/blog/2024/04/25/react-19)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Reselect](https://github.com/reduxjs/reselect)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [ESLint 9](https://eslint.org/docs/latest/)

---

**Última actualización:** 17 Diciembre 2025  
**Mantenido por:** Portfolio Team  
**Versión:** 2.0.0
