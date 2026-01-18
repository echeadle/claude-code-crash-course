import { Hook } from "@/types";

export const hooks: Hook[] = [
  {
    id: "auto-prettier",
    name: "Auto Prettier",
    category: "code-quality",
    description:
      "Automatically formats files with Prettier after Claude writes or edits them.",
    repoUrl: "https://github.com/example/claude-prettier-hook",
  },
  {
    id: "eslint-auto-fix",
    name: "ESLint Auto-fix",
    category: "code-quality",
    description:
      "Runs ESLint with auto-fix on files after Claude modifies them.",
    repoUrl: "https://github.com/example/claude-eslint-hook",
  },
  {
    id: "protect-sensitive-files",
    name: "Protect Sensitive Files",
    category: "security",
    description:
      "Blocks Claude from reading or modifying .env, API keys, and other sensitive files.",
    repoUrl: "https://github.com/example/claude-env-protection",
  },
  {
    id: "command-logger",
    name: "Command Logger",
    category: "logging",
    description:
      "Creates an audit trail by logging all bash commands Claude executes.",
    repoUrl: "https://github.com/example/claude-command-logger",
  },
  {
    id: "desktop-notifications",
    name: "Desktop Notifications",
    category: "notifications",
    description:
      "Sends desktop notifications when Claude requests permissions or completes tasks.",
    repoUrl: "https://github.com/example/claude-desktop-notify",
  },
  {
    id: "nvm-auto-use",
    name: "Node Version Manager",
    category: "environment",
    description:
      "Automatically runs 'nvm use' at session start to ensure correct Node.js version.",
    repoUrl: "https://github.com/example/claude-nvm-hook",
  },
  {
    id: "git-auto-stage",
    name: "Git Auto-Stage",
    category: "workflow",
    description:
      "Automatically stages modified files in git after Claude edits them.",
    repoUrl: "https://github.com/example/claude-git-stage",
  },
  {
    id: "test-runner",
    name: "Test Runner",
    category: "workflow",
    description:
      "Automatically runs relevant tests after Claude modifies code files.",
    repoUrl: "https://github.com/example/claude-test-runner",
  },
];
