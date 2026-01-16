# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 project using the App Router pattern with React 19, TypeScript, and Tailwind CSS v4.

### Key Technologies
- **Next.js 16** with App Router (`app/` directory)
- **React 19** with Server Components by default
- **Tailwind CSS v4** via `@tailwindcss/postcss` (uses `@import "tailwindcss"` syntax)
- **TypeScript** with strict mode enabled

### Project Structure
- `app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page (Server Component)
  - `globals.css` - Global styles with Tailwind and CSS variables
- `public/` - Static assets

### Path Aliases
`@/*` maps to the project root (configured in `tsconfig.json`)

### Styling
- Uses CSS variables for theming (`--background`, `--foreground`)
- Dark mode via `prefers-color-scheme` media query
- Tailwind's `@theme inline` directive for custom theme values
