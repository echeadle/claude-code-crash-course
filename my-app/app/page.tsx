'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [rainDrops, setRainDrops] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  // Generate rain drops only on client side to avoid hydration mismatch
  useEffect(() => {
    setRainDrops(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 0.8 + Math.random() * 0.5,
      }))
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Coming soon! 🌧️');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Rain Effect */}
      <div className="rain-container pointer-events-none fixed inset-0">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="rain-drop"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay for depth */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40" />

      {/* Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
        {/* Hero Section */}
        <div className="w-full max-w-4xl text-center">
          {/* Logo/Title */}
          <div className="mb-6 inline-block">
            <h1 className="text-7xl font-black tracking-tight text-white drop-shadow-2xl sm:text-8xl">
              HookSub
            </h1>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />
          </div>

          {/* Tagline */}
          <p className="mb-4 text-2xl font-light text-cyan-200 drop-shadow-lg sm:text-3xl">
            Publish & Discover Claude Code Hooks
          </p>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
            Share your custom hooks, automate your workflows, and supercharge your Claude Code experience.
            Join the community building the future of AI-assisted development.
          </p>

          {/* Glass Card */}
          <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="group">
                <div className="mb-3 text-4xl transition-transform group-hover:scale-110">🪝</div>
                <h3 className="mb-2 text-xl font-semibold text-white">Publish Hooks</h3>
                <p className="text-sm text-slate-400">
                  Share your custom Claude Code hooks with the community
                </p>
              </div>
              <div className="group">
                <div className="mb-3 text-4xl transition-transform group-hover:scale-110">🔍</div>
                <h3 className="mb-2 text-xl font-semibold text-white">Discover Tools</h3>
                <p className="text-sm text-slate-400">
                  Browse hundreds of hooks to enhance your workflow
                </p>
              </div>
              <div className="group">
                <div className="mb-3 text-4xl transition-transform group-hover:scale-110">⚡</div>
                <h3 className="mb-2 text-xl font-semibold text-white">Automate Everything</h3>
                <p className="text-sm text-slate-400">
                  Set up powerful automations with event-driven hooks
                </p>
              </div>
            </div>
          </div>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-slate-400 backdrop-blur-md transition-all focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-cyan-400/50"
              >
                Get Early Access
              </button>
            </div>
          </form>

          {/* Stats */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400">1,200+</div>
              <div className="text-sm text-slate-400">Published Hooks</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400">5,400+</div>
              <div className="text-sm text-slate-400">Active Developers</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-slate-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 w-full border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
            <p className="text-sm text-slate-500">© 2026 HookSub</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 transition-colors hover:text-cyan-400">
                Privacy
              </a>
              <a href="#" className="text-slate-500 transition-colors hover:text-cyan-400">
                Terms
              </a>
              <a href="#" className="text-slate-500 transition-colors hover:text-cyan-400">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        .rain-container {
          perspective: 1000px;
        }

        .rain-drop {
          position: absolute;
          top: -10%;
          width: 2px;
          height: 60px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(96, 165, 250, 0.4),
            rgba(125, 211, 252, 0.6)
          );
          border-radius: 2px;
          animation: fall linear infinite;
          opacity: 0.6;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) translateZ(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) translateZ(200px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
