---
name: Framer-Engineering-Dual-Theme
version: 1.1.0
description: A disciplined, high-craft engineering and terminology design system for FM Dictionary. Features a seamless dual-theme architecture: a cinematic Dark Canvas mode optimized for low-light field environments and basements, and an ultra-clean, high-contrast Light Mode modeled after modern engineering consoles. Display typography utilizes tight letter-tracking, paired with single functional technical blue (#0099ff) and hairline boundaries.
---

# FM Dictionary Design System (`DESIGN.md`)

This specification defines the visual language, color tokens, layout hierarchy, and component rules for **FM Dictionary**, supporting both **Dark Mode** (default) and **Light Mode**.

---

## 1. Visual Theme & Dual-Mode Philosophy

* **Aesthetic Core:** Engineering-grade, distraction-free, high-legibility interface built for facility managers and MEP engineers.
* **Dual-Mode Ergonomics:**
  * **Dark Mode (Night & Field Operations):** Pure charcoal and near-black surfaces (`#090909`), deep voids, and luminous cyan/blue wireframes. Minimizes eye fatigue inside low-light plant rooms, generator vaults, and night-shift operations.
  * **Light Mode (Daylight & Office Reference):** Ice-gray background (`#f7f8f9`) with pure white elevated cards (`#ffffff`), crisp slate typography (`#0f172a`), and clean hairline dividers. Maximizes legibility when reading blueprints, schematics, and standards in bright daylight environments.
* **Layout Rhythm:** Treats the viewport like an interactive technical console—crisp card boundaries, generous breathing room, and structured information density without unnecessary decoration.

---

## 2. Color Palette & Semantic Tokens

Both themes map to unified semantic CSS variable tokens:

| Token Name | Dark Mode Hex | Light Mode Hex | Semantic Role / Context |
| :--- | :--- | :--- | :--- |
| `canvas` | `#090909` | `#f7f8f9` | Default full-viewport page background |
| `canvas-deep` | `#000000` | `#eceff2` | Deep section breaks, high-contrast container backdrops |
| `surface-1` | `#141414` | `#ffffff` | Primary cards, content panels, mockup containers |
| `surface-2` | `#1c1c1c` | `#f1f3f6` | Elevated cards, active pills, interactive buttons |
| `hairline` | `#262626` | `#e2e6eb` | Structural borders, card outlines, table dividers |
| `hairline-soft` | `#1a1a1a` | `#edf0f4` | Subdued separation lines inside components |
| `ink` | `#ffffff` | `#0f172a` | Display headings, primary copy, high-contrast text |
| `ink-muted` | `#999999` | `#64748b` | Secondary descriptions, metadata, inactive labels |
| `accent-blue` | `#0099ff` | `#0080e6` | Interactive focus, technical hyperlinks, active indicators |
| `semantic-success` | `#22c55e` | `#16a34a` | Positive status markers, verified badges, offline indicators |

### Atmosphere Gradients & Spotlight Panels
* **Dark Mode Spotlights:** Luminous radial glows (cyan/blue `#0099ff33`, violet `#6a4cf522`, amber `#ff7a3d22`) to highlight active interactive cards.
* **Light Mode Spotlights:** Subtle, soft diffuse ambient glows (soft blue `#0080e615`, subtle slate `#64748b10`) with enhanced card border definition.

---

## 3. Typography Rules & Hierarchy

* **Primary Typeface:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`
* **Letter-Spacing Principle:** Display titles feature aggressive negative tracking (`-0.03em` to `-0.05em`) for a confident, poster-like impact. Body copy maintains natural spacing for effortless reading.

| Tier | Font Size | Weight | Line Height | Letter Spacing | Usage Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display XXL** | 72px – 110px | 600 (Semibold) | 0.85 – 0.95 | `-0.05em` | Hero main statements |
| **Display XL** | 56px – 85px | 600 (Semibold) | 0.95 – 1.0 | `-0.04em` | Key section headliners |
| **Display LG** | 40px – 62px | 600 (Semibold) | 1.0 – 1.1 | `-0.03em` | Feature & topic titles |
| **Display MD** | 24px – 32px | 500 (Medium) | 1.15 | `-0.02em` | Card groups, section headers |
| **Headline** | 18px – 20px | 500 (Medium) | 1.25 | `-0.01em` | Term titles, interactive prompts |
| **Body LG** | 16px – 18px | 400 (Regular) | 1.5 | normal | Lead paragraphs & hero intros |
| **Body** | 14px – 15px | 400 (Regular) | 1.5 | normal | Default descriptions (`ink-muted`) |
| **Caption / Code** | 11px – 13px | 500 (Medium) | 1.4 | `+0.01em` | Badges, standards (ASHRAE/ISO), metadata |

---

## 4. Component Styling & Interactive States

### Buttons & CTAs
* **Primary CTA Pill:**
  * **Dark Mode:** High-contrast solid white (`#ffffff`) background with pure black (`#000000`) text.
  * **Light Mode:** High-contrast solid dark slate (`#0f172a`) background with pure white (`#ffffff`) text.
  * Shape: Pill (`rounded-full`), tactile scale hover (`hover:opacity-90 active:scale-95`).
* **Secondary Action Button:**
  * Background `surface-2` with thin `hairline` border, text `ink`.
  * Subtle hover state (`hover:bg-surface-1 transition-colors`).
* **Theme & Language Switchers:**
  * Compact pill-shaped toggles on the Navbar (`border border-hairline bg-surface-1`).

### Cards & Modular Containers
* **Surface Containers:** Built on `surface-1` with a 1px `hairline` border and `rounded-2xl` corners.
* **Spotlight Card (`SpotlightCard.tsx`):** Tracks cursor coordinates to project an ambient radial illumination layer, functioning harmoniously in both dark and light modes.
* **Technical Spec Badges:** Compact pills with `bg-surface-2` and `text-accent-blue` for standards such as ASHRAE 90.1, NFPA 90A, and ISO 16484.

---

## 5. Layout Principles & Guardrails

* **Do:**
  * Maintain strict contrast ratios (WCAG AA/AAA) across both Dark and Light modes.
  * Keep visual elements honest, grounded, and focused on actual MEP and facility management needs.
  * Use the functional accent blue (`#0099ff` / `#0080e6`) strictly for interactive links, active states, and technical tags.
  * Ensure 100% responsive behavior from 360px mobile displays up to 4K desktop screens.
* **Don't:**
  * Do not use pure white (`#ffffff`) for page canvas in Light Mode; use `#f7f8f9` to avoid harsh glare.
  * Do not introduce exaggerated corporate marketing claims or fictitious testimonials.
  * Avoid low-contrast gray text on dark or light backgrounds; always preserve crisp legibility.
