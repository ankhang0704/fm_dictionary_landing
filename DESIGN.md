---
name: Framer-design-analysis
version: alpha
description: A confident dark-canvas builder marketing site that treats the page like a working artboard — pure black surfaces, white display type set with aggressive negative tracking, and a single confident blue (#0099ff) reserved for hyperlinks and selection states. The page rhythm is broken by oversized vibrant gradient atmosphere panels — magenta, violet, orange spotlights — that act as living showcase tiles, not decoration. Every CTA is a white pill on dark; every card is a translucent or charcoal surface; every section title pulls letter-spacing tight enough to feel like a poster.
---

# Framer Design System (`DESIGN.md`)

This specification defines the visual language, layout principles, and component behavior of **Framer Dark Futuristic Architecture**, optimized for AI coding agents and design-generation tools.

---

## 1. Visual Theme & Atmosphere

* **Aesthetic Core:** Motion-first, design-forward, dark cinematic canvas.
* **Canvas Philosophy:** Treats the web page like an active digital artboard or interactive stage rather than a traditional scrolling document.
* **Layout Rhythm:** Where lighter brands use white space to partition content, Framer utilizes long expansions of absolute black interrupted by stark, oversized statements.
* **Section Transitions:** Sections shift via mode changes — transitioning from charcoal card grids to absolute black fields lit by gradient spotlight bands, creating a cinematic rhythm.

---

## 2. Color Palette & Semantic Roles

| Role | Token Name | Hex Code | Usage Context |
| :--- | :--- | :--- | :--- |
| **Primary Base** | `canvas` | `#090909` | Default full-viewport page background (near-black with subtle warmth) |
| **Absolute Black** | `black` | `#000000` | Deep section breaks, massive canvas voids |
| **Surface Level 1** | `surface-1` | `#141414` | Secondary background blocks, pricing cards, mockup containers |
| **Surface Level 2** | `surface-2` | `#1c1c1c` | Featured cards, elevated panels, active tabs |
| **Hairline Borders** | `hairline` | `#262626` | Structural borders, card boundaries, dividers |
| **Hairline Soft** | `hairline-soft` | `#1a1a1a` | Subdued separation lines inside components |
| **Brand Ink** | `on-primary` / `ink` | `#ffffff` | Display headers, primary text, high-contrast CTA pills |
| **Muted Ink** | `ink-muted` | `#999999` | Secondary descriptions, metadata, inactive labels |
| **Accent Blue** | `accent-blue` | `#0099ff` | Hyperlinks, active states, interactive focus rings, selection states |
| **Success State** | `semantic-success` | `#22c55e` | Positive status markers, verified badges |

### Atmosphere Gradients (Spotlight Panels)
* **Magenta Spotlight:** `#d44df0`
* **Violet Spotlight:** `#6a4cf5`
* **Orange Spotlight:** `#ff7a3d`
* **Coral Spotlight:** `#ff5577`

---

## 3. Typography Rules & Hierarchy

* **Primary Typeface:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
* **Characteristic Styling:** Display headlines feature aggressive negative tracking (tight letter-spacing) to project a poster-like, high-impact aesthetic.

| Tier | Font Size | Weight | Line Height | Letter Spacing | Features / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display XXL** | 72px – 110px | 500 (Medium) / 600 (Semibold) | 0.85 – 0.95 | `-0.05em` | Hero statements, massive single-line takeovers |
| **Display XL** | 56px – 85px | 500 (Medium) | 0.95 – 1.0 | `-0.04em` | Feature highlights |
| **Display LG** | 40px – 62px | 500 (Medium) | 1.0 – 1.1 | `-0.03em` | Major section titles |
| **Display MD** | 24px – 32px | 500 (Medium) | 1.15 | `-0.02em` | Sub-section headers |
| **Headline** | 18px – 20px | 500 (Medium) | 1.25 | `-0.01em` | Card titles, feature headers |
| **Body LG** | 16px – 18px | 400 (Regular) | 1.5 | normal | Lead paragraphs |
| **Body** | 14px – 15px | 400 (Regular) | 1.5 | normal | Default content copy (`ink-muted`) |
| **Caption / Micro** | 11px – 12px | 500 (Medium) | 1.4 | `+0.02em` | Badges, metadata tags, UI labels |

---

## 4. Component Styling & Interactive States

### Buttons & CTAs
* **Primary CTA Pill:** Solid bright white (`#ffffff`) background with pure black (`#000000`) text, pill-shaped (`rounded-full`), highly prominent, with tactile hover state (`hover:bg-neutral-200 transition-all`).
* **Secondary Action:** Transparent or dark charcoal (`surface-1`) background with thin hairline border (`#262626`), white text, and subtle hover brighten.
* **Hover Micro-Interactions:** Smooth scale-up (`scale-[1.02]`) or brightness shift. Border highlights transition to `accent-blue` (`#0099ff`) on interactive focus.

### Cards & Containers
* **Surface Cards:** Built on `surface-1` (`#141414`) or `surface-2` (`#1c1c1c`) fields wrapped in subtle `hairline` borders (`#262626`).
* **Border Radius:** Clean modern rounded corners (`rounded-2xl` / `16px` for cards, `rounded-full` for pill elements).
* **Spotlight Cards:** Dark container panels overlaid with blurred, radiant background splashes (magenta/violet/orange) to emphasize interactive focus or dynamic tooling capabilities.

---

## 5. Layout Principles & Guardrails

* **Do:**
  * Embrace high-contrast typography against near-black canvases (`#090909` / `#000000`).
  * Use tight, negative letter-spacing on large display headings to capture editorial motion-design qualities.
  * Break up heavy layouts with striking, vibrant gradient atmosphere panels and interactive Three.js 3D geometry.
  * Restrict chromatic accents strictly to blue (`#0099ff`) for functional links and active states.
* **Don't:**
  * Do not use light backgrounds or white page wrappers; the entire environment must remain dark-first.
  * Do not scatter random chromatic colors across components; maintain disciplined minimalism backed only by controlled gradient splashes.
  * Avoid loose, uncompressed heading letter-spacing; display copy must look dense and confident.
