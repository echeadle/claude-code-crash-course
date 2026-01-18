# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **HookHub**, an educational project for the "Claude Code Crash Course: Claude Code In a Day" course. The main application is a Next.js web app located in the `hookhub/` directory.

## Commands

All commands should be run from the `hookhub/` directory:

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (no path argument needed)
```

## Architecture

**Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4

**App Router Structure (`hookhub/app/`):**
- Components are **Server Components by default** - add `'use client'` directive only when needed for client-side interactivity (useState, useEffect, event handlers)
- `layout.tsx` - Root layout wrapping all pages
- `page.tsx` - Route page components (exports default function)
- `globals.css` - Global styles and Tailwind setup

**Path Alias:** Use `@/` to import from project root (e.g., `import { Component } from '@/components/Component'`)

## Tailwind CSS v4

This project uses Tailwind v4's new syntax:
- CSS uses `@import "tailwindcss"` (not the old `@tailwind` directives)
- Custom theme values defined via `@theme inline` in `globals.css`
- CSS variables exposed as utilities: `--color-background` → `bg-background`
- Dark mode via `prefers-color-scheme` media query with CSS variables

## Fonts

Geist font family (Vercel) loaded via `next/font/google` with CSS variables:
- `--font-geist-sans` for body text
- `--font-geist-mono` for code
