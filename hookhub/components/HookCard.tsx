import { Hook, CATEGORY_LABELS, CATEGORY_COLORS } from "@/types";

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  return (
    <div className="group flex flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {hook.name}
      </h3>

      <span
        className={`mt-2 inline-block w-fit rounded-full px-3 py-1 text-xs font-medium ${CATEGORY_COLORS[hook.category]}`}
      >
        {CATEGORY_LABELS[hook.category]}
      </span>

      <p className="mt-4 flex-grow text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {hook.description}
      </p>

      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
      >
        View Repository
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
}
