import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SENTINEL_OS // HOME" },
      { name: "description", content: "OPERATOR_01 — Senior Penetration Tester. 7+ years specialized in offensive security, web app pentests, cloud audits, and red team operations." },
      { property: "og:title", content: "SENTINEL_OS // HOME" },
      { property: "og:description", content: "Encrypted operator profile and live system status terminal." },
    ],
  }),
  component: HomePage,
});

const WHOAMI_LINES = [
  "[USER]: OPERATOR_01",
  "[ROLE]: SENIOR_PENETRATION_TESTER",
  "[STATUS]: ENCRYPTED",
  "[LOCATION]: [REDACTED]",
];

function HomePage() {
  const [printed, setPrinted] = useState<string[]>([]);

  useEffect(() => {
    setPrinted([]);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      if (i >= WHOAMI_LINES.length) return;
      setPrinted((p) => [...p, WHOAMI_LINES[i]]);
      i++;
      timer = setTimeout(step, 150 + Math.random() * 400);
    };
    timer = setTimeout(step, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SiteLayout>
      {/* HERO TERMINAL */}
      <section className="flex items-center justify-center min-h-[70vh] mb-20" id="home">
        <div className="w-full max-w-3xl terminal-glow bg-black/80 rounded-lg overflow-hidden flex flex-col">
          <div className="terminal-header-bar px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/50" />
              <div className="w-3 h-3 rounded-full bg-secondary-fixed/50" />
              <div className="w-3 h-3 rounded-full bg-primary-fixed/50" />
            </div>
            <span className="font-code-sm text-outline-variant uppercase text-[10px] tracking-widest">
              session_tty1 // root@sentinel
            </span>
            <span className="material-symbols-outlined text-outline-variant text-sm">close</span>
          </div>
          <div className="p-6 font-code-sm text-primary-fixed min-h-[300px]">
            <p className="mb-2">$ whoami</p>
            <div className="space-y-1">
              {printed.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex items-center gap-1 mt-4">
              <span>$</span>
              <span className="w-2 h-5 bg-primary-fixed animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* WHOAMI Section */}
      <section className="mb-20 scroll-mt-24" id="system">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary-fixed glitch-text uppercase">
            WHO AM I
          </h1>
          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="terminal-glow bg-surface-container-lowest p-6 relative">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-outline-variant font-code-sm">
              ID: 0xDEADBEEF
            </div>
            <p className="text-primary-fixed font-headline-md mb-4">&gt; PROFILE_DATA</p>
            <p className="text-on-surface mb-6 leading-relaxed">
              Specialized Penetration Tester with 7+ years of experience in Offensive Security.
              Focused on web application security, cloud infrastructure auditing, and red teaming
              operations. Known for identifying critical vulnerabilities in high-security
              environments.
            </p>
            <div className="grid grid-cols-2 gap-4 font-code-sm">
              <div className="border-l-2 border-primary-fixed pl-4">
                <span className="text-outline block uppercase text-[10px]">Current Role</span>
                <span className="text-primary-fixed">Senior Security Researcher</span>
              </div>
              <div className="border-l-2 border-secondary-fixed pl-4">
                <span className="text-outline block uppercase text-[10px]">Clearance</span>
                <span className="text-secondary-fixed">LEVEL_05</span>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="border border-primary-fixed text-primary-fixed px-4 py-2 font-code-sm text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_#39FF14] hover:bg-primary-fixed/10 transition-all active:scale-95 animate-flicker glitch-text">
                [ EXECUTE: GET_CV.PDF ]
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group min-h-[320px]">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0"
              alt="Cybersecurity workstation lit by green and blue monitor glow"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgIMUGLs5q4eEworArjde7lhMLU0UDna46hdpTqXIRbMi7ax_L-OTbhTMSf1F1WYyIgycwrubNgnnQJ7BUBwNOpL0CGXSSnEXKgYJbfF3rvaN3OnKh94goyvbXZJKhp29hq3lvK5xehUdXL782IckP8LD48BLjd0EjqH7fP2i3Zhn1YWUssg6IlPj9FfMbbqp9YwPkTo2GhX5FKQbu_ARcTBYJQV9cR9EcwcY62rALeV9pZbxR871IOzedHDb3snb0-556b08UGOZ7"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="font-code-sm text-primary-fixed">
                EST_LATENCY: 14ms // LOCATION: [ENCRYPTED]
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
