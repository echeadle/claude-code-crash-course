# HookHub MVP Specification

## Overview

**HookHub** is a web application for discovering and browsing open source Claude Code hooks. It serves as a community directory where developers can find ready-to-use hooks for their Claude Code workflows.

---

## What Are Claude Code Hooks?

Claude Code hooks are user-defined shell commands that execute automatically at specific points in Claude Code's lifecycle. They provide deterministic control over behavior - unlike prompts that Claude might ignore, hooks always execute when triggered.

**Hook Event Types:**
- `SessionStart` / `SessionEnd` - Session lifecycle
- `PreToolUse` / `PostToolUse` - Before/after tool execution
- `UserPromptSubmit` - When user submits input
- `Notification` - Custom notification handling
- `Stop` / `SubagentStop` - Control flow decisions
- `PreCompact` - Before context compaction
- `PermissionRequest` - Permission dialog handling

---

## MVP Scope

### In Scope (v1)
- Display hooks in a responsive grid layout
- Show hook cards with: name, category, description, repo link
- Filter/browse by category
- Static data (JSON file or hardcoded)

### Out of Scope (Future)
- User authentication
- Hook submission/upload
- Search functionality
- Hook ratings/reviews
- GitHub API integration
- Hook installation instructions
- Hook previews/code display

---

## Data Model

### Hook Entity

```typescript
interface Hook {
  id: string;           // Unique identifier (slug)
  name: string;         // Display name (e.g., "Auto-Format on Save")
  category: HookCategory;
  description: string;  // Brief description (1-2 sentences)
  repoUrl: string;      // GitHub repository URL
}

type HookCategory =
  | "code-quality"      // Formatters, linters, code fixes
  | "security"          // Access control, file protection
  | "logging"           // Audit trails, command tracking
  | "notifications"     // Alerts, desktop notifications
  | "environment"       // Setup, dependencies, env vars
  | "workflow";         // Custom automation, integrations
```

---

## Implementation Status

### Completed Components

| Component | File | Status |
|-----------|------|--------|
| TypeScript Types | `types/index.ts` | ✅ Complete |
| Hook Data | `data/hooks.ts` | ✅ Complete |
| HookCard | `components/HookCard.tsx` | ✅ Complete |
| Header | `components/Header.tsx` | ✅ Complete |
| HookGrid | `components/HookGrid.tsx` | ✅ Complete |
| CategoryFilter | `components/CategoryFilter.tsx` | ✅ Complete |
| Main Page | `app/page.tsx` | ✅ Complete |

### Verification Checklist

- [x] `npm run dev` starts without errors
- [x] Grid displays all hooks at http://localhost:3000
- [x] Category filters work correctly (URL-based)
- [x] "View Repository" links open in new tab
- [x] Layout is responsive (1/2/3 columns)
- [x] `npm run build` completes successfully
- [x] `npm run lint` passes

---

## Category Color Scheme

| Category | Badge Color | Tailwind Classes |
|----------|-------------|------------------|
| code-quality | Blue | `bg-blue-100 text-blue-800` |
| security | Red | `bg-red-100 text-red-800` |
| logging | Green | `bg-green-100 text-green-800` |
| notifications | Purple | `bg-purple-100 text-purple-800` |
| environment | Orange | `bg-orange-100 text-orange-800` |
| workflow | Teal | `bg-teal-100 text-teal-800` |

---

## Sample Hook Data

The MVP includes 8 sample hooks:

1. **Auto Prettier** (code-quality) - Format files after write/edit
2. **ESLint Auto-fix** (code-quality) - Run ESLint fix on save
3. **Protect Sensitive Files** (security) - Block access to .env, keys
4. **Command Logger** (logging) - Log all bash commands
5. **Desktop Notifications** (notifications) - Alert on permission requests
6. **Node Version Manager** (environment) - Auto-run nvm use
7. **Git Auto-Stage** (workflow) - Stage files after edit
8. **Test Runner** (workflow) - Run tests after code changes

---

## Research Sources

- [Claude Code Hooks Guide](https://code.claude.com/docs/en/hooks-guide) - Official documentation
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) - Community curated list
- [Hooks in Claude Code](https://www.eesel.ai/blog/hooks-in-claude-code) - Complete guide
