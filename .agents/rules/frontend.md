# Frontend Development Standards — Next.js & Framer Dark

This document defines frontend conventions and styling rules for the **FM Dictionary Landing Page**.

---

## 1. Visual & Styling Standards (Framer Dark)

- **Canvas & Contrast**: Always use `bg-canvas` (`#090909`) for page backgrounds. Use `bg-surface-1` (`#141414`) for default cards and `bg-surface-2` (`#1c1c1c`) for elevated cards.
- **Hairline Borders**: Separate containers with `border border-hairline` (`#262626`). Avoid thick borders or overly heavy outlines.
- **Primary CTA**: White pill on dark canvas (`bg-ink text-black font-medium rounded-full px-7 py-3 hover:bg-neutral-200 transition-all`).
- **Typography Scale**: Display headlines must use tight negative tracking (`tracking-tight` or `tracking-tighter`) for a dense, poster-like look. Body text uses `text-ink-muted` (`#999999`) for comfortable contrast.
- **Atmosphere Gradients**: Use radial gradient background spotlights (e.g. `bg-gradient-to-tr from-spotlight-violet/20 via-spotlight-magenta/10 to-transparent blur-3xl`) behind key showcases.

---

## 2. Component Guidelines

- **Client vs Server Components**: Keep page wrappers and static content as Server Components by default. Use `'use client'` only when components need React state, browser APIs, or Three.js lifecycle.
- **Dynamic Imports for WebGL**: Always render Three.js canvas components client-side with proper cleanup on unmount (`cancelAnimationFrame`, `renderer.dispose()`, `geometry.dispose()`).
- **Icons**: Use `lucide-react` with standard `size={20}` or `size={18}` and consistent stroke widths.
