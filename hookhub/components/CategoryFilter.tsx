"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { HookCategory, CATEGORY_LABELS } from "@/types";

const CATEGORIES: HookCategory[] = [
  "code-quality",
  "security",
  "logging",
  "notifications",
  "environment",
  "workflow",
];

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleCategoryClick = (category: HookCategory | null) => {
    const url = new URL(window.location.href);
    if (category === null) {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }
    router.push(url.pathname + url.search);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleCategoryClick(null)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          currentCategory === null
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        }`}
      >
        All
      </button>

      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            currentCategory === category
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          }`}
        >
          {CATEGORY_LABELS[category]}
        </button>
      ))}
    </div>
  );
}
