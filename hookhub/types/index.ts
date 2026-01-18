export type HookCategory =
  | "code-quality"
  | "security"
  | "logging"
  | "notifications"
  | "environment"
  | "workflow";

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  repoUrl: string;
}

export const CATEGORY_LABELS: Record<HookCategory, string> = {
  "code-quality": "Code Quality",
  security: "Security",
  logging: "Logging",
  notifications: "Notifications",
  environment: "Environment",
  workflow: "Workflow",
};

export const CATEGORY_COLORS: Record<HookCategory, string> = {
  "code-quality": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  logging: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  notifications: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  environment: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  workflow: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
};
