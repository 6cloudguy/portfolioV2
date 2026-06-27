import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MatrixShader } from "./MatrixShader";

const topNav = [
  { label: "HOME", to: "/" },
  { label: "PROJECTS", to: "/projects" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <div className="min-h-screen text-on-background font-body-md bg-transparent">
      <MatrixShader />
      <div className="scanline-overlay" />

      {/* Top nav */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 border-b border-outline-variant bg-surface-dim/80 backdrop-blur-xl shadow-[0_1px_10px_rgba(42,229,0,0.2)]">
        <Link
          to="/"
          className="font-headline-md text-primary-fixed drop-shadow-[0_0_8px_rgba(42,229,0,0.5)] tracking-tighter"
        >
          SENTINEL_OS // PORTFOLIO
        </Link>
        <nav className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          {topNav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                isActive(n.to)
                  ? "text-primary-fixed border-b-2 border-primary-fixed pb-1 font-label-caps"
                  : "text-outline hover:text-primary-fixed transition-colors font-label-caps"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>
        {/* <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:animate-pulse">
            terminal
          </span>
          <span className="material-symbols-outlined text-primary-fixed cursor-pointer hidden sm:inline">
            settings_input_component
          </span>
          <button className="hidden md:block bg-primary-fixed text-on-primary-fixed px-4 py-1 font-label-caps hover:bg-white transition-all active:scale-95">
            CRITICAL_ACTION
          </button>
        </div> */}
      </header>

      <main className="relative z-10 pt-24 pb-24 px-margin-mobile md:px-margin-desktop min-h-screen">
        {children}
      </main>

      <footer className="fixed bottom-0 w-full z-40 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2 bg-black/90 border-t border-outline-variant shadow-[0_-1px_10px_rgba(255,179,178,0.1)]">
        <div className="font-code-sm text-tertiary-fixed-dim flex items-center gap-2">
          <span className="animate-pulse">●</span>
          <span className="hidden sm:inline">[SYSTEM_READY] // UPTIME: 99.9% // IP: 127.0.0.1</span>
          <span className="sm:hidden">[READY]</span>
        </div>
        {/* <div className="hidden md:flex gap-6">
          <a className="text-outline-variant hover:text-tertiary-fixed transition-colors font-code-sm" href="#">
            ENCRYPT_SESSION
          </a>
          <a className="text-outline-variant hover:text-tertiary-fixed transition-colors font-code-sm" href="#">
            DEBUG_LOGS
          </a>
          <a className="text-outline-variant hover:text-tertiary-fixed transition-colors font-code-sm" href="#">
            WIPE_TRACE
          </a>
        </div> */}
        <div className="hidden lg:block font-label-caps text-tertiary-fixed-dim opacity-50">
          © 2024 SENTINEL_OS
        </div>
      </footer>
    </div>
  );
}
