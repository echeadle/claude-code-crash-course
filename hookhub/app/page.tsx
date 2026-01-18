import { Suspense } from "react";
import { Header } from "@/components/Header";
import { CategoryFilter } from "@/components/CategoryFilter";
import { HookGrid } from "@/components/HookGrid";
import { hooks } from "@/data/hooks";
import { HookCategory } from "@/types";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const categoryFilter = params.category as HookCategory | undefined;

  const filteredHooks = categoryFilter
    ? hooks.filter((hook) => hook.category === categoryFilter)
    : hooks;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h2 className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Categories
          </h2>
          <Suspense
            fallback={
              <div className="flex gap-2">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="h-9 w-24 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800"
                  />
                ))}
              </div>
            }
          >
            <CategoryFilter />
          </Suspense>
        </section>

        <section>
          <HookGrid hooks={filteredHooks} />
        </section>
      </main>
    </div>
  );
}
