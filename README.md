# bun-vite-react-tanstack-starter

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](https://react.dev)
[![Bun](https://img.shields.io/badge/Bun-latest-fbf0df?logo=bun)](https://bun.sh)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite)](https://vitejs.dev)
[![TanStack Router](https://img.shields.io/badge/TanStack_Router-v1-ff4154)](https://tanstack.com/router)

Frontend SPA starter: **Bun + Vite 7 + React 19 + React Compiler + TanStack Router + shadcn/ui + Tailwind v4 + Biome**. MIT.

## Quickstart

```bash
bun install
bun dev          # http://localhost:5173
bun run build
bun run check    # biome lint + format
bun run lint     # eslint react-compiler rule only
```

## Stack

| Tool | Purpose |
|---|---|
| **Bun** | Runtime + package manager |
| **Vite 7** | Dev server + bundler |
| **React 19** + React Compiler | UI + automatic memoization (no `useMemo` / `useCallback` / `React.memo`) |
| **TanStack Router** | File-based routing; generated tree at `src/routeTree.gen.ts` |
| **Tailwind v4** | Utility CSS via `@tailwindcss/vite` — no `tailwind.config.js` |
| **shadcn/ui** | Copy-paste component primitives; `components.json` wired for the CLI |
| **Biome 2** | Formatting + general linting (replaces Prettier + most ESLint rules) |
| **ESLint** | Single rule only: `react-compiler/react-compiler` — no Biome equivalent |
| **Husky + lint-staged** | Pre-commit: Biome auto-fix → ESLint react-compiler check |

## Pre-commit hooks

On every `git commit`, lint-staged runs:

1. `biome check --write` — formats and fixes all staged `*.{ts,tsx,js,jsx,json,css}`
2. `eslint` — enforces the react-compiler rule on `*.{ts,tsx}`; fails the commit if the compiler cannot optimise a component

## React Compiler demo

`src/App.tsx` includes a `CompilerDemo` component that shows automatic memoization in practice:

- **No `useMemo`** — expensive filter + sort over 5 000 items is memoized by the compiler
- **No `useCallback`** — event handlers are stable across renders without manual wrapping
- **No `React.memo`** — `StatCard` children skip re-renders automatically when their props haven't changed
- A **"Re-render parent"** button lets you verify child stability at runtime

To confirm the compiler ran on a production build, check `dist/assets/*.js` for `react.memo_cache_sentinel`.

## Adding shadcn primitives

`components.json` is configured for Tailwind v4 (no config path) with `new-york` style. Add components via the CLI:

```bash
bunx shadcn@latest add button
```

Or copy primitives directly into `src/components/ui/`. The `cn()` helper lives at `@/lib/utils`.

## Layout

```
src/
  routes/            # __root.tsx, index.tsx, about.tsx
  components/ui/     # button.tsx (and any added shadcn primitives)
  lib/utils.ts       # cn()
  styles/globals.css # tailwind v4 entry
  routeTree.gen.ts   # generated — do not edit
  router.tsx
  App.tsx            # RouterProvider + React Compiler demo
  main.tsx
```

## Adding a route

Drop a file under `src/routes/`. The TanStack Router plugin regenerates `routeTree.gen.ts` on save.

## License

MIT — Copyright (c) 2026 Shridhar Puntambekar.
