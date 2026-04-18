# bun-vite-react-tanstack-starter

Frontend starter: Bun + Vite + React 19 + React Compiler + TanStack Router (file-based) + shadcn/ui + Tailwind v4. MIT.

## Quickstart

```bash
bun install
bun dev          # http://localhost:5173
bun run build
bun run lint
```

## Stack

- Bun runtime / package manager
- Vite 7
- React 19 with the React Compiler (babel-plugin-react-compiler) wired through `@vitejs/plugin-react`
- ESLint flat config with `eslint-plugin-react-compiler` set to `error`
- TanStack Router with the file-based plugin (`@tanstack/router-plugin/vite`); generated tree at `src/routeTree.gen.ts`
- Tailwind v4 via `@tailwindcss/vite`
- shadcn-style `Button` primitive in `src/components/ui/`

## Layout

```
src/
  routes/            # __root.tsx, index.tsx, about.tsx
  components/ui/     # button.tsx
  lib/utils.ts       # cn()
  styles/globals.css # tailwind v4 import
  routeTree.gen.ts   # generated, do not edit
  router.tsx
  App.tsx
  main.tsx
```

## Adding a route

Drop a file under `src/routes/`. The router plugin regenerates `routeTree.gen.ts` on save.

## Adding shadcn primitives

This starter does not depend on the shadcn CLI; copy primitives from https://ui.shadcn.com or paste into `src/components/ui/`. The `cn()` helper lives at `@/lib/utils`.

## Verifying React Compiler

Built JS in `dist/assets/*.js` should contain `react.memo_cache_sentinel` markers, confirming the compiler ran.
