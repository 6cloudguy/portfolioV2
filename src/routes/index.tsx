import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

// ── Count-up hook ─────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, triggered = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, triggered]);
  return count;
}

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
  status: "COMPLETED" | "IN_PROGRESS" | "EXPIRED";
  type: "Certification" | "Professional" | "Course";
  badge: string;
  image?: string;
};

function accentForType(type: Cert["type"]) {
  if (type === "Professional") return { text: "text-primary-fixed", border: "border-primary-fixed", bg: "bg-primary-fixed/10", glow: "hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]", badge: "bg-primary-fixed text-black" };
  if (type === "Certification") return { text: "text-tertiary-fixed-dim", border: "border-tertiary-fixed-dim", bg: "bg-tertiary-fixed-dim/10", glow: "hover:shadow-[0_0_20px_rgba(255,179,178,0.3)]", badge: "bg-tertiary-fixed-dim text-black" };
  return { text: "text-secondary-fixed", border: "border-secondary-fixed", bg: "bg-secondary-fixed/10", glow: "hover:shadow-[0_0_20px_rgba(111,246,255,0.3)]", badge: "bg-secondary-fixed text-black" };
}

const CERTIFICATIONS: Cert[] = [
  {
    id: "CERT_01",
    name: "eLearnSecurity Junior Penetration Tester",
    issuer: "INE Security",
    year: "2026",
    status: "IN_PROGRESS",
    type: "Professional",
    badge: "eJPT",
  },
  {
    id: "CERT_02",
    name: "INE Certified Cloud Associate",
    issuer: "INE Security",
    year: "2025",
    status: "COMPLETED",
    type: "Professional",
    badge: "ICCA",
    image: "/certs/ICCA.png",
  },
  {
    id: "CERT_03",
    name: "Google Cybersecurity",
    issuer: "Google",
    year: "2024",
    status: "COMPLETED",
    type: "Professional",
    badge: "GCYB",
    image: "/certs/gcyb.png",
  },
  {
    id: "CERT_04",
    name: "Python Beginner",
    issuer: "HackerRank",
    year: "2024",
    status: "COMPLETED",
    type: "Certification",
    badge: "PY",
    image: "/certs/python.png",
  },
  {
    id: "CERT_05",
    name: "Ethical Hacking",
    issuer: "SWAYAM // NPTEL",
    year: "2025",
    status: "COMPLETED",
    type: "Course",
    badge: "EH",
    image: "/certs/eh.png",
  },
  {
    id: "CERT_06",
    name: "Information Security",
    issuer: "SWAYAM // NPTEL",
    year: "2025",
    status: "COMPLETED",
    type: "Course",
    badge: "SEC",
    image: "/certs/infosec.png",
  },
  {
    id: "CERT_07",
    name: "AI for Pentesting",
    issuer: "Linkedin",
    year: "2025",
    status: "COMPLETED",
    type: "Course",
    badge: "AI",
    image: "/certs/ai.png",
  },
  {
    id: "CERT_08",
    name: "Asset Security",
    issuer: "Google // Coursera",
    year: "2024",
    status: "COMPLETED",
    type: "Course",
    badge: "ASST",
    image: "/certs/assets.png",
  },
  {
    id: "CERT_09",
    name: "Detection & Response",
    issuer: "Google // Coursera",
    year: "2024",
    status: "COMPLETED",
    type: "Course",
    badge: "DET",
    image: "/certs/detection.png",
  },
  {
    id: "CERT_10",
    name: "Linux & SQL",
    issuer: "Google // Coursera",
    year: "2024",
    status: "COMPLETED",
    type: "Course",
    badge: "SQL",
    image: "/certs/linsql.png",
  },
  {
    id: "CERT_11",
    name: "Networks & Network Security",
    issuer: "Google // Coursera",
    year: "2024",
    status: "COMPLETED",
    type: "Course",
    badge: "NET",
    image: "/certs/networks.png",
  },
  {
    id: "CERT_12",
    name: "Operating Systems & Security",
    issuer: "Google // Coursera",
    year: "2024",
    status: "COMPLETED",
    type: "Course",
    badge: "OS",
    image: "/certs/os.png",
  },
  {
    id: "CERT_13",
    name: "Security Risk Management",
    issuer: "Google // Coursera",
    year: "2024",
    status: "COMPLETED",
    type: "Course",
    badge: "RISK",
    image: "/certs/secrisk.png",
  },
];

const completedCertCount = CERTIFICATIONS.filter((cert) => cert.status === "COMPLETED").length;

const STATS = [
  { label: "YEAR_OF_STUDY", display: "3rd", num: 3,  unit: "YEAR",   suffix: "" },
  { label: "CERTS_EARNED",  display: `${completedCertCount}`,   num: completedCertCount,  unit: "CERT",   suffix: "" },
  { label: "PLATFORMS", display: "2+",  num: 2,  unit: "ACTIVE", suffix: "+" },
  { label: "BOXES_PWNED",   display: "30+", num: 30, unit: "BOXES",  suffix: "+" },
];

const OPERATOR_CHIPS = [
  { label: "RED TEAM", color: "text-primary-fixed border-primary-fixed/50" },
  // { label: "", color: "text-secondary-fixed border-secondary-fixed/50" },
  { label: "INDIA", color: "text-tertiary-fixed-dim border-tertiary-fixed-dim/50" },
  { label: "HTB", color: "text-primary-fixed border-primary-fixed/50" },
  { label: "SECURITY_ENTHUSIAST", color: "text-secondary-fixed border-secondary-fixed/50" },
];

// ── Cert Lightbox ────────────────────────────────────────────────────────
function CertLightbox({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full flex items-center justify-between font-code-sm text-[11px]">
          <span className="text-primary-fixed">{cert.id} // {cert.name}</span>
          <button
            onClick={onClose}
            className="text-outline-variant hover:text-primary-fixed transition-colors border border-outline-variant hover:border-primary-fixed px-3 py-1 text-[10px] uppercase tracking-widest"
          >
            [ CLOSE ]
          </button>
        </div>
        {/* Image */}
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.name}
            className="max-h-[75vh] w-auto object-contain border border-outline-variant/50 shadow-[0_0_40px_rgba(57,255,20,0.15)]"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center border border-outline-variant text-outline-variant font-code-sm">
            NO_IMAGE_AVAILABLE
          </div>
        )}
        <p className="text-outline font-code-sm text-[10px]">{cert.issuer} // {cert.year} // {cert.status}</p>
      </div>
    </div>
  );
}

function HomePage() {
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Stats intersection observer
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [activeCert, setActiveCert] = useState<Cert | null>(null);
  const openCert = useCallback((cert: Cert) => setActiveCert(cert), []);
  const closeCert = useCallback(() => setActiveCert(null), []);

  return (
    <SiteLayout>
      {activeCert && <CertLightbox cert={activeCert} onClose={closeCert} />}

      {/* ── HERO ── */}
      <section className="mb-20" id="home">
        {/* Bold header block */}
        <div className="mb-10 border-l-4 border-primary-fixed pl-6">
          {/* Name */}
          <h1
            className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter glitch-text mb-1"
            data-glitch="PRANAV P"
          >
            PRANAV P
            <span className="inline-block w-3 h-7 bg-primary-fixed align-middle ml-3 animate-pulse" />
          </h1>

          {/* Identity chips */}
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
            {OPERATOR_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`font-code-sm text-[10px] border px-2.5 py-0.5 uppercase tracking-widest ${chip.color} bg-black/40`}
              >
                {chip.label}
              </span>
            ))}
          </div>

          <p className="text-outline font-body-md max-w-2xl">
            CS student &amp; offensive security enthusiast — breaking things legally. CTFs, red team tooling, and IoT research.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              to="/projects"
              className="relative border border-primary-fixed text-primary-fixed px-5 py-2 font-code-sm text-xs uppercase tracking-widest hover:bg-primary-fixed/10 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:text-white transition-all active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10">[ VIEW_PROJECTS ]</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROFILE / WHOAMI ── */}
      <section className="mb-20 scroll-mt-24" id="system">
        <div className="mb-8 border-l-4 border-primary-fixed pl-6">
          <div className="flex items-center gap-4 mb-1">
            <span className="text-primary-fixed font-code-sm">[ PROFILE_DATA ]</span>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter">
            WHO AM I
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile card */}
          <div className="terminal-glow bg-surface-container-lowest p-6 relative flex flex-col justify-between corner-frame">
            <div className="absolute top-0 right-0 p-2 text-[10px] text-outline-variant font-code-sm">
              ID: 6cloudguy
            </div>
            <div>
              <p className="text-on-surface mb-6 leading-relaxed font-body-md text-sm">
                3rd year CS student obsessed with breaking things — the legal way. I got into
                security through HTB and haven't looked back since. Currently building up my
                pentesting fundamentals, working toward my eJPT, and tinkered with IoT
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
                  <span className="text-tertiary-fixed-dim">INDIA</span>
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
              src="/assets/side.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="font-code-sm text-primary-fixed">
                EST_LATENCY: 14ms // LOCATION: INDIA
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── STATS ROW ── */}
            <section className="mb-20" id="stats" ref={statsRef}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((s) => (
                  <StatCard key={s.label} stat={s} triggered={statsVisible} />
                ))}
              </div>
            </section>


      {/* ── SKILLS / ARSENAL ── */}
      <section className="mb-20 scroll-mt-24" id="arsenal">
        <div className="mb-8 border-l-4 border-secondary-fixed pl-6">
          <div className="flex items-center gap-4 mb-1">
            <span className="text-secondary-fixed font-code-sm">TOOLS_LOADED: {SKILLS.reduce((a, s) => a + s.items.length, 0)}</span>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter">
            ARSENAL
          </h2>
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
        <div className="mb-8 border-l-4 border-tertiary-fixed-dim pl-6">
          <div className="flex items-center gap-4 mb-1">
            <span className="text-tertiary-fixed-dim font-code-sm">CLEARANCE REQUIRED</span>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter">
            CREDENTIALS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const accent = accentForType(cert.type);

            const statusColor =
              cert.status === "COMPLETED"
                ? "text-primary-fixed"
                : cert.status === "IN_PROGRESS"
                ? "text-secondary-fixed animate-pulse"
                : "text-outline";

            return (
              <div
                key={cert.id}
                onClick={() => openCert(cert)}
                className={`relative bg-surface-container-lowest border ${accent.border} p-6 flex flex-col gap-4 transition-all ${accent.glow} group cursor-pointer overflow-hidden`}
              >
                {/* Cert image overlay (shown on hover, covers card content) */}
                {cert.image && (
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                    {/* Badge — top-left corner of overlay */}
                    <div className={`absolute top-4 left-4 ${accent.badge} font-headline-md w-14 h-14 flex items-center justify-center font-bold text-sm tracking-tighter`}>
                      {cert.badge}
                    </div>
                    {/* Centered CTA */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`font-code-sm text-[11px] uppercase tracking-widest ${accent.text} border ${accent.border} px-3 py-1.5 bg-black/60`}>
                        [ VIEW CERT ]
                      </span>
                    </div>
                  </div>
                )}

                {/* Corner ID */}
                <span className="absolute top-3 right-3 font-code-sm text-outline-variant text-[9px] z-0">
                  {cert.id}
                </span>

                {/* Card content (fades out on hover) */}
                <div className={`flex flex-col gap-4 transition-opacity duration-300 ${cert.image ? "group-hover:opacity-0" : ""}`}>
                  {/* Badge */}
                  <div className="flex items-start gap-4">
                    <div className={`${accent.badge} font-headline-md w-16 h-16 flex items-center justify-center shrink-0 font-bold text-sm tracking-tighter`}>
                      {cert.badge}
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <p className={`font-label-caps ${accent.text} text-[10px] mb-1`}>
                        {cert.issuer}
                      </p>
                      <p className="font-code-sm text-on-surface leading-tight">{cert.name}</p>
                      <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-1 text-[10px] font-label-caps uppercase ${accent.bg} ${accent.border} ${accent.text}`}>
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px ${accent.bg} border-t ${accent.border} opacity-30`} />

                  {/* Footer row */}
                  <div className="flex items-center justify-between font-code-sm text-[11px]">
                    <span className="text-outline">{cert.status === "IN_PROGRESS" ? "TARGET: " : "ISSUED: "}{cert.year}</span>
                    <span className={`${statusColor} font-label-caps`}>
                      {cert.status === "COMPLETED" && "● "}
                      {cert.status === "IN_PROGRESS" && "◌ "}
                      {cert.status === "EXPIRED" && "✕ "}
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}

// ── StatCard with count-up animation ─────────────────────────────────────
type StatDef = { label: string; display: string; num: number; unit: string; suffix: string };

function StatCard({ stat, triggered }: { stat: StatDef; triggered: boolean }) {
  const count = useCountUp(stat.num, 1400, triggered);
  const displayed = triggered ? `${count}${stat.suffix}` : "0";

  // special-case for "3rd" — show ordinal once done
  const value = stat.suffix === "" && stat.label === "YEAR_OF_STUDY"
    ? (triggered && count >= stat.num ? "3rd" : `${count}`)
    : displayed;

  return (
    <div className="bg-surface-container-lowest border border-outline-variant p-5 flex flex-col items-center justify-center text-center group hover:border-primary-fixed transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] relative overflow-hidden">
      {/* Animated corner accent */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary-fixed/50 group-hover:border-primary-fixed transition-colors" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary-fixed/50 group-hover:border-primary-fixed transition-colors" />

      <span className="font-headline-lg text-primary-fixed group-hover:drop-shadow-[0_0_12px_#39FF14] transition-all">
        {value}
      </span>
      <span className="font-code-sm text-secondary-fixed text-xs mt-1">{stat.unit}</span>
      <span className="font-label-caps text-outline text-[9px] mt-2">{stat.label}</span>

      {/* Progress bar */}
      <div className="w-full mt-3 h-px bg-outline-variant/40 overflow-hidden">
        <div
          className="h-full bg-primary-fixed transition-all duration-1000 ease-out"
          style={{ width: triggered ? "100%" : "0%", transitionDelay: "200ms" }}
        />
      </div>
    </div>
  );
}
