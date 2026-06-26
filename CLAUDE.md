# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

The repo root is a GitHub Pages deployment target. The actual site source lives entirely in `site/` — all development work happens there.

```
site/          ← Nuxt app (work here)
.pnpm-store/   ← pnpm content-addressed store
```

The root-level deleted files in git status are old Nuxt 2 build artifacts being replaced by the new `site/` setup on this branch.

## Commands

All commands run from `site/`:

```bash
pnpm dev              # dev server at http://localhost:3000
pnpm build            # production build
pnpm generate         # static site generation (used for GitHub Pages)
pnpm preview          # preview production/static build locally
pnpm storybook        # Storybook at http://localhost:6006
pnpm build-storybook  # build static Storybook to storybook-static/
```

## Stack

- **Nuxt** (nuxt-nightly@5x — Nuxt 5 beta), `compatibilityDate: '2025-07-15'`
- **Vue 3** with `<script setup>` SFCs
- **pnpm** (workspace configured via `pnpm-workspace.yaml`)
- **Storybook 10** via `@storybook-vue/nuxt` for component development

## Architecture

### Component naming convention
Components live in `app/components/npc/` using a prefix-based naming scheme. The `npc` prefix (short for the design system name) maps to Nuxt's auto-import component naming: a component at `npc/Button/Button.vue` is used as `<npcButton />` in templates.

### Storybook
Stories live alongside components: `app/components/**/*.stories.ts`. Storybook is configured via `.storybook/` and picks up all stories under `app/components/`.

### Design tokens
Global CSS variables are defined in `app/assets/css/main.css`. The design system palette:
- `--col-pale-gray`, `--col-ink-black`, `--col-pow-red`, `--col-blueprint-blue`, `--col-marker-yellow`, `--col-paoper-white`

The visual aesthetic is a comic/grunge halftone style — components use radial-gradient dot patterns and bold typography.

### Deployment
The repo deploys to GitHub Pages. `pnpm generate` produces a static build; the output from `site/.output/public` (or `site/dist`) should be copied/moved to the repo root for Pages to serve it.
