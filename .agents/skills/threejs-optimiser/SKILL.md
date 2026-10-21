---
name: threejs-optimiser
description: Ensure 60fps WebGL/Three.js rendering performance, efficient garbage collection, and graceful fallback for mobile devices.
---

# Three.js Performance Optimization Skill

Guidelines for 3D visual effects in Next.js:
1. **Lifecycle Management**: Always clean up event listeners, geometries, materials, and renderer inside `return () => { ... }` of `useEffect`.
2. **Device Pixel Ratio**: Clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to avoid GPU overload on Retina displays.
3. **Graceful Fallbacks**: If WebGL is not supported, render a clean CSS gradient/SVG fallback.
4. **Visibility Awareness**: Pause rendering loops via `IntersectionObserver` when the 3D canvas is scrolled out of the viewport.
