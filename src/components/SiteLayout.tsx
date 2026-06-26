import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MatrixShader } from "./MatrixShader";

const topNav = [
  { label: "HOME", to: "/" },
  { label: "PROJECTS", to: "/projects" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
] as const;

const sideNav = [
  { label: "SYSTEM", icon: "monitor_heart", to: "/" },
  { label: "PROJECTS", icon: "account_tree", to: "/projects" },
  { label: "BLOG", icon: "rss_feed", to: "/blog" },
  { label: "CONTACT", icon: "terminal", to: "/contact" },
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
        <nav className="hidden md:flex gap-8 items-center">
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
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:animate-pulse">
            terminal
          </span>
          <span className="material-symbols-outlined text-primary-fixed cursor-pointer hidden sm:inline">
            settings_input_component
          </span>
          <button className="hidden md:block bg-primary-fixed text-on-primary-fixed px-4 py-1 font-label-caps hover:bg-white transition-all active:scale-95">
            CRITICAL_ACTION
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] hidden md:flex flex-col z-40 border-r border-outline-variant bg-surface-container-lowest w-64">
        <div className="p-6 border-b border-outline-variant">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary-container/20 border border-secondary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary-fixed">person</span>
            </div>
            <div>
              <p className="font-label-caps text-secondary-fixed text-[10px]">OPERATOR_01</p>
              <p className="text-[8px] text-outline font-mono">STATUS: ENCRYPTED</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 py-4">
          {sideNav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={
                isActive(n.to)
                  ? "text-secondary-fixed bg-secondary-container/20 border-l-4 border-secondary-fixed pl-4 py-3 flex items-center gap-3 font-label-caps"
                  : "text-outline pl-4 py-3 hover:text-secondary-fixed hover:bg-surface-container-high flex items-center gap-3 transition-all font-label-caps"
              }
            >
              <span className="material-symbols-outlined">{n.icon}</span>
              <span>{n.label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4">
          <button className="w-full border border-secondary-fixed text-secondary-fixed py-2 font-label-caps hover:bg-secondary-fixed hover:text-black transition-all">
            CONNECT_TUNNEL
          </button>
        </div>
      </aside>

      <main className="relative z-10 md:ml-64 pt-24 pb-24 px-margin-mobile md:px-margin-desktop min-h-screen">
        {children}
      </main>

      <footer className="fixed bottom-0 w-full z-40 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2 bg-black/90 border-t border-outline-variant shadow-[0_-1px_10px_rgba(255,179,178,0.1)]">
        <div className="font-code-sm text-tertiary-fixed-dim flex items-center gap-2">
          <span className="animate-pulse">●</span>
          <span className="hidden sm:inline">[SYSTEM_READY] // UPTIME: 99.9% // IP: 127.0.0.1</span>
          <span className="sm:hidden">[READY]</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a className="text-outline-variant hover:text-tertiary-fixed transition-colors font-code-sm" href="#">
            ENCRYPT_SESSION
          </a>
          <a className="text-outline-variant hover:text-tertiary-fixed transition-colors font-code-sm" href="#">
            DEBUG_LOGS
          </a>
          <a className="text-outline-variant hover:text-tertiary-fixed transition-colors font-code-sm" href="#">
            WIPE_TRACE
          </a>
        </div>
        <div className="hidden lg:block font-label-caps text-tertiary-fixed-dim opacity-50">
          © 2024 SENTINEL_OS
        </div>
      </footer>
    </div>
  );
}
