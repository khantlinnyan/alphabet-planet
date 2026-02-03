# Alphabet Planet — AI Agent Guide

## Project snapshot
- **Framework:** Next.js (App Router) + TypeScript.
- **Styling:** Tailwind CSS.
- **Content:** Centralized in `components/content/`.

## Code-quality expectations (scan checklist)
1. **Type safety first**
   - Prefer explicit types for content structures (`SiteContent`, `FeatureStep`, etc.).
   - Use `satisfies` for static content objects to ensure shape validation.
2. **SOLID in UI components**
   - **Single Responsibility:** Keep data definitions separate from presentation.
   - **Open/Closed:** Favor composable components; extend by adding new data/components, not by editing existing core components.
   - **Interface Segregation:** Use small, focused prop types per component.
3. **React performance + rendering rules**
   - **SSR by default:** Keep components as Server Components unless they truly need interactivity. Add `"use client"` only when required.
   - **CSR boundaries:** Isolate interactive UI into small Client Components; keep data + layout in Server Components.
   - **useRef for stability:** Store DOM refs or mutable values in `useRef` to avoid re-renders and keep animation handles stable.
   - **useMemo/useCallback with intent:** Memoize expensive computations or stable callbacks passed to memoized children.
   - **View Transitions:** Prefer the native View Transitions API (`document.startViewTransition`) for page/section transitions when available; guard for SSR and feature detect before use.
   - **Avoid layout thrash:** Batch DOM reads/writes in animations and use CSS transitions where possible.
   - **React 19 advantages:** Prefer Server Components for streaming + data locality, use new form/async patterns when applicable, and keep client boundaries tight to reduce bundle size.
   - **Hooks discipline:** Use hooks consistently (top-level, stable deps), avoid recreating objects in render, and prefer `useRef` for mutable values that shouldn’t trigger re-renders.
4. **Consistency**
   - Keep component naming in `kebab-case` for files in `components/sections/`.
   - Prefer colocated "content" modules for static data.
5. **Performance**
   - Avoid unnecessary re-renders; keep props stable and data outside components where possible.
6. **Accessibility**
   - Ensure images have meaningful `alt` text.

## Recommended dev checks
- `pnpm lint`
- `pnpm typecheck`

## Notes
- Keep design changes minimal unless explicitly requested.
- Avoid large refactors; prefer incremental, typed improvements.
