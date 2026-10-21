# FM Dictionary Landing Page — AI Agent Guidelines & Architecture

Welcome AI Agent! This repository hosts the official standalone landing page website for **FM Dictionary** (Facility Management English Terminology Platform).

---

## 1. Modular Guides Index

* **📂 Rules (`.agents/rules/`)**:
  * `frontend.md`: Next.js 15 App Router conventions, Tailwind CSS rules, Framer Dark tokens, and React 19 best practices.
  * `global.md`: TypeScript strict standards, code simplicity, component file organization, and clean code hygiene.
  * `security.md`: Web security standards, sanitized input handling, and secure metadata headers.
  * `DESIGN.md`: Primary design constitution (Framer Dark Futuristic Architecture).
* **📂 Skills (`.agents/skills/`)**:
  * `taste`: Aesthetic enforcer for Framer dark canvas, negative tracking typography, spotlight gradients, and visual restraint.
  * `handoff`: Session handover generator tracking milestones and verification logs.
  * `threejs-optimiser`: Best practices for 60fps WebGL/Three.js rendering, canvas lifecycle, and low-power fallbacks.
  * `seo-audit`: OpenGraph, meta tags, sitemap, and Lighthouse performance checks.

---

## 2. Core Architecture Cheat Sheet

1. **Framework & Engine**: Next.js 15 (App Router) + React 19 + TypeScript 5.
2. **Styling System**: Tailwind CSS with custom Framer color tokens defined in `tailwind.config.ts` (`canvas`, `surface-1`, `surface-2`, `hairline`, `ink`, `ink-muted`, `accent-blue`, and `spotlight-*`).
3. **Interactive 3D**: Three.js WebGL canvas embedded in client components with clean `useEffect` / `requestAnimationFrame` lifecycle and canvas resize observers.
4. **Bilingual Support**: Zero-latency client-side language state (English & Tiếng Việt) with accessible language switcher.
5. **Quality Gates**:
   - `npm run lint`: 0 ESLint warnings/errors.
   - `npx tsc --noEmit`: 0 TypeScript type errors.
   - `npm run build`: Production bundle builds with 0 errors.

---

## 3. Behavioral Principles

1. **Simplicity First**: Write clean, concise code. Do not introduce speculative abstractions or unnecessary runtime state.
2. **Zero Visual Slop**: Adhere strictly to `DESIGN.md`. Near-black canvases, hairline borders (`#262626`), high-contrast white pill CTAs, and disciplined spotlight glows.
3. **Accessibility & Responsive**: Test all layouts from 360px mobile viewports up to 4K displays.
