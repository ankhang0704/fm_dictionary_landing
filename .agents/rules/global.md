# Global Engineering Guidelines — Next.js Landing Page

---

## 1. Code Standards & Simplicity

1. **TypeScript Strictness**: No implicit `any`. Explicitly type all component props and handler parameters.
2. **Path Aliasing**: Always import local modules via `@/...` matching `tsconfig.json`.
3. **No Dead Code**: Remove unused imports, console.log statements, and obsolete files immediately.
4. **Conventional Commits**: Commit messages must follow `<type>(<scope>): <message>`.

---

## 2. Fast Verification Commands

- `npx tsc --noEmit` — Type-check entire project without emitting JavaScript.
- `npm run lint` — Lint files for React / Next.js best practices.
- `npm run build` — Test production compilation.
