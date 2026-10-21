# FM Dictionary — Official Landing Page

> Modern, motion-forward landing page and product showcase for **FM Dictionary** (Facility Management English Terminology App).  
> Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Three.js**, following the **Framer Dark Futuristic** design language.

---

## 🌟 Key Features

* **Cinematic Dark Artboard**: Dark canvas (`#090909`), hairline borders (`#262626`), and radiant atmospheric spotlights (Magenta, Violet, Orange).
* **Interactive 3D Hero**: Faceted 3D architectural prism and floating data constellation powered by Three.js with real-time cursor parallax.
* **Full Checklist Compliance**:
  * **Landing Page**: Headline, 3D Hero, White Pill CTAs, Social Proof, Bento Feature Grid, FAQ Accordion, and Bottom Conversion Hub.
  * **Features Deep Dive (`/features`)**: Intelligent Dictionary, SRS Spaced Repetition, Scenario Quizzes, and AI Voice Pronunciation Scorer.
  * **About Us (`/about`)**: Origin story, mission, developer profile, and product milestones.
  * **FAQ (`/faq`)**: Categorized Q&A with real-time keyword search and tiered contact channels.
  * **Contact Us (`/contact`)**: Interactive contact form with category segmentation.
  * **Legal (`/privacy`, `/terms`)**: Local-first privacy disclosures and terms of service.
  * **404 Not Found (`/not-found`)**: Atmospheric branded error screen with recovery navigation.
* **Bilingual Support**: Instant toggle between Tiếng Việt and English.
* **Complete AI Agent Governance**: Pre-configured with `AGENTS.md`, `DESIGN.md`, `.agents/rules/`, and `.agents/skills/`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested with Node.js 22)
- npm 9+

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Verification & Production Build

```bash
# Type checking
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm run start
```

---

## 📐 Design System

Detailed design specifications, color tokens, and typography scales are documented in [DESIGN.md](./DESIGN.md) (inspired by Framer from `VoltAgent/awesome-design-md`).
