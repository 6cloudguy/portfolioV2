import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRANAV P // HOME" },
      { name: "description", content: "PRANAV P — CS student & aspiring penetration tester. Passionate about offensive security, CTFs, and building cool things." },
      { property: "og:title", content: "PRANAV P // HOME" },
      { property: "og:description", content: "Encrypted operator profile and live system status terminal." },
    ],
  }),
  component: HomePage,
});

// ── Terminal sequence definition ──────────────────────────────────────────
// Each entry is either a command (types out char-by-char) or output (appears
// as a block after the command finishes).
type TermLine =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; color?: string }
  | { kind: "gap" };

const SEQUENCE: TermLine[] = [
  { kind: "out", text: "[OK] SSH handshake complete ", color: "text-outline-variant" },
  { kind: "gap" },
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "pranav p" },
  { kind: "gap" },
  { kind: "cmd", text: "cat about.txt" },
  { kind: "out", text: "Role    :  CS Student (Year 3)  //  Sec Enthusiast" },
  { kind: "out", text: "Focus   :  Offensive Security, CTFs, IoT Hacking" },
  { kind: "out", text: "Location    :  India" },
  { kind: "out", text: "Status  :  ● ONLINE", color: "text-primary-fixed" },
  { kind: "gap" },
  { kind: "cmd", text: "ls certs/" },
  { kind: "out", text: "ICCA.cert    eJPT.cert  [IN_PROGRESS]", color: "text-secondary-fixed" },
  { kind: "gap" },
];

const SKILLS = [
  { cat: "WEB", items: ["Burp Suite", "SQLMap", "FFUF", "Nuclei", "Gobuster"] },
  { cat: "NETWORK", items: ["Nmap", "Wireshark", "Metasploit", "Netcat"] },
  { cat: "SCRIPTING", items: ["Python", "Bash", "C"] },
  { cat: "HARDWARE", items: ["Arduino", "Raspberry Pi", "UPnP/DLNA"] },
  { cat: "OTHER", items: ["Linux", "Git", "Docker", "HackTheBox"] },
];

type Cert = {
  id: string;
  name: string;
  issuer: string;
  year: string;
  status: "VERIFIED" | "IN_PROGRESS" | "EXPIRED";
  accent: "primary" | "secondary" | "tertiary";
  badge: string;
};

const CERTIFICATIONS: Cert[] = [
  {
    id: "CERT_01",
    name: "INE Certified Cloud Associate",
    issuer: "INE Security",
    year: "2025",
    status: "VERIFIED",
    accent: "primary",
    badge: "ICCA",
  },
  {
    id: "CERT_02",
    name: "eLearnSecurity Junior Penetration Tester",
    issuer: "INE Security",
    year: "2026",
    status: "IN_PROGRESS",
    accent: "secondary",
    badge: "eJPT",
  },
];

const STATS = [
  { label: "YEAR_OF_STUDY", value: "3rd", unit: "YEAR" },
  { label: "CERTS_EARNED", value: "1", unit: "CERT" },
  { label: "CTF_PLATFORMS", value: "2+", unit: "ACTIVE" },
  { label: "BOXES_PWNED", value: "30+", unit: "BOXES" },
];

// Rendered terminal line — either a fully-typed command or a static output block
type RenderedLine =
  | { kind: "cmd"; text: string; done: boolean }   // done = finished typing
  | { kind: "out"; text: string; color?: string }
  | { kind: "gap" };

function HomePage() {
  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [typing, setTyping] = useState<{ seqIdx: number; charIdx: number } | null>(null);

  useEffect(() => {
    // Kick off: skip any leading out/gap entries immediately, find first cmd
    let seqIdx = 0;
    const initial: RenderedLine[] = [];

    // Flush leading non-cmd lines instantly
    while (seqIdx < SEQUENCE.length && SEQUENCE[seqIdx].kind !== "cmd") {
      const s = SEQUENCE[seqIdx];
      if (s.kind === "out") initial.push({ kind: "out", text: s.text, color: s.color });
      else initial.push({ kind: "gap" });
      seqIdx++;
    }

    if (seqIdx < SEQUENCE.length) {
      // Start typing the first cmd after a short pause
      initial.push({ kind: "cmd", text: "", done: false });
      setLines(initial);
      const t = setTimeout(() => setTyping({ seqIdx, charIdx: 0 }), 600);
      return () => clearTimeout(t);
    } else {
      setLines(initial);
    }
  }, []);

  useEffect(() => {
    if (typing === null) return;
    const { seqIdx, charIdx } = typing;
    const seq = SEQUENCE[seqIdx];
    if (seq.kind !== "cmd") return;

    if (charIdx < seq.text.length) {
      // Type next character
      const t = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          next[next.length - 1] = { kind: "cmd", text: seq.text.slice(0, charIdx + 1), done: false };
          return next;
        });
        setTyping({ seqIdx, charIdx: charIdx + 1 });
      }, 60 + Math.random() * 60);
      return () => clearTimeout(t);
    } else {
      // Command fully typed — mark done, then flush following out/gap until next cmd
      const t = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          next[next.length - 1] = { kind: "cmd", text: seq.text, done: true };
          return next;
        });

        // Walk forward, collect out/gap, then start next cmd
        let nextIdx = seqIdx + 1;
        const toAppend: RenderedLine[] = [];
        while (nextIdx < SEQUENCE.length && SEQUENCE[nextIdx].kind !== "cmd") {
          const s = SEQUENCE[nextIdx];
          if (s.kind === "out") toAppend.push({ kind: "out", text: s.text, color: s.color });
          else toAppend.push({ kind: "gap" });
          nextIdx++;
        }

        setTimeout(() => {
          if (nextIdx < SEQUENCE.length) {
            setLines((prev) => [...prev, ...toAppend, { kind: "cmd", text: "", done: false }]);
            setTyping({ seqIdx: nextIdx, charIdx: 0 });
          } else {
            setLines((prev) => [...prev, ...toAppend]);
            setTyping(null);
          }
        }, 300);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [typing]);

  return (
    <SiteLayout>
      {/* ── HERO TERMINAL ── */}
      <section className="flex items-center justify-center min-h-[70vh] mb-20" id="home">
        <div className="w-full max-w-3xl terminal-glow bg-black/80 rounded-lg overflow-hidden flex flex-col">

          {/* Title bar */}
          <div className="terminal-header-bar px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/50" />
              <div className="w-3 h-3 rounded-full bg-secondary-fixed/50" />
              <div className="w-3 h-3 rounded-full bg-primary-fixed/50" />
            </div>
            <span className="font-code-sm text-outline-variant uppercase text-[10px] tracking-widest">
              root@parrot  —  bash  —  80×24
            </span>
            <span className="material-symbols-outlined text-outline-variant text-sm">close</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-code-sm min-h-[360px] flex flex-col gap-[2px]">
            {lines.map((line, i) => {
              if (line.kind === "gap") return <div key={i} className="h-2" />;
              if (line.kind === "out") {
                return (
                  <p key={i} className={line.color ?? "text-on-surface-variant"}>
                    {line.text}
                  </p>
                );
              }
              // cmd line
              return (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-secondary-fixed select-none">root@parrot:~$</span>
                  <span className="text-primary-fixed">{line.text}</span>
                  {!line.done && (
                    <span className="w-[7px] h-[15px] bg-primary-fixed animate-pulse inline-block" />
                  )}
                </div>
              );
            })}
            {/* Idle cursor after sequence finishes */}
            {typing === null && lines.length > 0 && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-secondary-fixed select-none">root@parrot:~$</span>
                <span className="w-[7px] h-[15px] bg-primary-fixed animate-pulse inline-block" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PROFILE / WHOAMI ── */}
      <section className="mb-20 scroll-mt-24" id="system">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary-fixed glitch-text uppercase">
            WHO AM I
          </h1>
          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile card */}
          <div className="terminal-glow bg-surface-container-lowest p-6 relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-outline-variant font-code-sm">
              ID: 6cloudguy
            </div>
            <div>
              <p className="text-primary-fixed font-headline-md mb-4">&gt; PROFILE_DATA</p>
              <p className="text-on-surface mb-6 leading-relaxed font-body-md text-sm">
                3rd year CS student obsessed with breaking things — the legal way. I got into
                security through CTFs and haven't looked back since. Currently building up my
                pentesting fundamentals, working toward my eJPT, and tinkered with IoT hardware
                on the side.
                <br /><br />
                When I'm not studying or hacking boxes on HackTheBox, I'm working on
                open-source tooling and writing about what I learn on the blog.
              </p>
              <div className="grid grid-cols-2 gap-4 font-code-sm mb-6">
                <div className="border-l-2 border-primary-fixed pl-4">
                  <span className="text-outline block uppercase text-[10px]">Current Role</span>
                  <span className="text-primary-fixed">CS Student // Sec Enthusiast</span>
                </div>
                <div className="border-l-2 border-secondary-fixed pl-4">
                  <span className="text-outline block uppercase text-[10px]">Focus</span>
                  <span className="text-secondary-fixed">Offensive Security</span>
                </div>
                <div className="border-l-2 border-tertiary-fixed-dim pl-4">
                  <span className="text-outline block uppercase text-[10px]">Base of Ops</span>
                  <span className="text-tertiary-fixed-dim">INDIA // [ENCRYPTED]</span>
                </div>
                <div className="border-l-2 border-outline-variant pl-4">
                  <span className="text-outline block uppercase text-[10px]">Status</span>
                  <span className="text-primary-fixed animate-pulse">● ONLINE</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="border border-primary-fixed text-primary-fixed px-4 py-2 font-code-sm text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_#39FF14] hover:bg-primary-fixed/10 transition-all active:scale-95 animate-flicker glitch-text">
                [ EXECUTE: GET_CV.PDF ]
              </button>
            </div>
          </div>

          {/* Image */}
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

      {/* ── STATS ROW ── */}
      <section className="mb-20" id="stats">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-surface-container-lowest border border-outline-variant p-5 flex flex-col items-center justify-center text-center group hover:border-primary-fixed transition-colors"
            >
              <span className="font-headline-lg text-primary-fixed group-hover:drop-shadow-[0_0_10px_#39FF14] transition-all">
                {s.value}
              </span>
              <span className="font-code-sm text-secondary-fixed text-xs mt-1">{s.unit}</span>
              <span className="font-label-caps text-outline text-[9px] mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS / ARSENAL ── */}
      <section className="mb-20 scroll-mt-24" id="arsenal">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline-lg-mobile md:font-headline-md text-primary-fixed glitch-text uppercase">
            ARSENAL
          </h2>
          <div className="h-px flex-1 bg-outline-variant/30" />
          <span className="font-code-sm text-outline-variant text-[10px]">TOOLS_LOADED: {SKILLS.reduce((a, s) => a + s.items.length, 0)}</span>
        </div>

        {/* Terminal-style skill dump */}
        <div className="border border-outline-variant bg-black p-6 font-code-sm text-primary-fixed mb-6">
          <p className="mb-3 text-outline-variant">root@parrot:~$ cat arsenal.conf</p>
          <div className="space-y-4">
            {SKILLS.map((group) => (
              <div key={group.cat} className="flex flex-wrap gap-x-6 gap-y-1">
                <span className="text-secondary-fixed w-24 shrink-0 uppercase">[{group.cat}]</span>
                <span className="text-primary-fixed">{group.items.join("  //  ")}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1">
            <span className="text-outline-variant">root@parrot:~$</span>
            <span className="inline-block w-2 h-4 bg-primary-fixed align-middle animate-pulse ml-1" />
          </div>
        </div>

        {/* Tag cloud */}
        <div className="flex flex-wrap gap-2">
          {SKILLS.flatMap((g) =>
            g.items.map((item) => (
              <span
                key={item}
                className="font-code-sm text-xs border border-outline-variant/60 bg-surface-container-lowest text-outline-variant px-3 py-1 hover:border-primary-fixed hover:text-primary-fixed transition-all cursor-default"
              >
                {item}
              </span>
            ))
          )}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="mb-20 scroll-mt-24" id="certs">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-headline-lg-mobile md:font-headline-md text-primary-fixed glitch-text uppercase">
            CREDENTIALS
          </h2>
          <div className="h-px flex-1 bg-outline-variant/30" />
          <span className="font-code-sm text-outline-variant text-[10px]">CLEARANCE REQUIRED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const accent =
              cert.accent === "primary"
                ? { text: "text-primary-fixed", border: "border-primary-fixed", bg: "bg-primary-fixed/10", glow: "hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]", badge: "bg-primary-fixed text-black" }
                : cert.accent === "secondary"
                ? { text: "text-secondary-fixed", border: "border-secondary-fixed", bg: "bg-secondary-fixed/10", glow: "hover:shadow-[0_0_20px_rgba(111,246,255,0.3)]", badge: "bg-secondary-fixed text-black" }
                : { text: "text-tertiary-fixed-dim", border: "border-tertiary-fixed-dim", bg: "bg-tertiary-fixed-dim/10", glow: "hover:shadow-[0_0_20px_rgba(255,179,178,0.3)]", badge: "bg-tertiary-fixed-dim text-black" };

            const statusColor =
              cert.status === "VERIFIED"
                ? "text-primary-fixed"
                : cert.status === "IN_PROGRESS"
                ? "text-secondary-fixed animate-pulse"
                : "text-outline";

            return (
              <div
                key={cert.id}
                className={`relative bg-surface-container-lowest border ${accent.border} p-6 flex flex-col gap-4 transition-all ${accent.glow} group`}
              >
                {/* Corner ID */}
                <span className="absolute top-3 right-3 font-code-sm text-outline-variant text-[9px]">
                  {cert.id}
                </span>

                {/* Badge */}
                <div className="flex items-start gap-4">
                  <div className={`${accent.badge} font-headline-md w-16 h-16 flex items-center justify-center shrink-0 font-bold text-sm tracking-tighter`}>
                    {cert.badge}
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className={`font-label-caps ${accent.text} text-[10px] mb-1`}>
                      {cert.issuer}
                    </p>
                    <p className="font-code-sm text-on-surface leading-tight">{cert.name}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px ${accent.bg} border-t ${accent.border} opacity-30`} />

                {/* Footer row */}
                <div className="flex items-center justify-between font-code-sm text-[11px]">
                  <span className="text-outline">{cert.status === "IN_PROGRESS" ? "TARGET: " : "ISSUED: "}{cert.year}</span>
                  <span className={`${statusColor} font-label-caps`}>
                    {cert.status === "VERIFIED" && "● "}
                    {cert.status === "IN_PROGRESS" && "◌ "}
                    {cert.status === "EXPIRED" && "✕ "}
                    {cert.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to add more */}
        <div className="mt-6 border border-dashed border-outline-variant/40 p-4 flex items-center justify-center gap-3 text-outline-variant font-code-sm text-[11px] hover:border-outline hover:text-outline transition-all cursor-default">
          <span className="material-symbols-outlined text-base">add_circle</span>
          MORE_CERTIFICATIONS LOADING…
        </div>
      </section>
    </SiteLayout>
  );
}
