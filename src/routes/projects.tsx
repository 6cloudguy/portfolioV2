import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "SENTINEL_OS // PROJECTS" },
      { name: "description", content: "Repository of high-impact cybersecurity assets — OSINT, hardware payloads, red team tooling." },
      { property: "og:title", content: "SENTINEL_OS // PROJECTS" },
      { property: "og:description", content: "Repository of high-impact cybersecurity assets — OSINT, hardware payloads, red team tooling." },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  node: string;
  category: string;
  accent: "primary" | "secondary";
  title: string;
  badge: string;
  description: string;
  tags: string[];
  cta: string;
  image: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    node: "NODE_01 // SCRIPT",
    category: "SCRIPT",
    accent: "primary",
    title: "AUTOFN",
    badge: "[ FOCUS: RECON ]",
    description:
      "> INITIALIZING DATA HARVEST... Automated reconnaissance engine designed for Bug Bounty Hunting. Uses multiple reconaissance tools to form easily and smartly identify entrypoints and scanning automation.",
    tags: ["Bash", "Nmap", "Ffuf", "Exploitdb"],
    cta: "VIEW_SOURCE_CODE",
    link:"https://github.com/6cloudguy/autofn",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy4HB1y_7-m1nvSQsdqutLjdrsoUCdUAbgatR3TveArZBgQmxCy53bgXj6-GTQpZXAWm_kh6O7Il_rPERPqKmYfk2BWKBnzQEqakCcVpD3lfX-MiMgj7hYZ6KRJytiMXcqSzNxjAHpHXfL3paETxbi6SpcR0R9lBTF3RHhqi_XMqDRG7MGXuYNiDXJ0P9TrPA-IQSfMjGaans4sUcrnH_UW_GPzilCaIzH75wHS1UY95g1J8DLazWrnUvK010VP2CQxVQELlXCc8l8",
  },
  {
    node: "NODE_02 // HARDWARE",
    category: "HARDWARE",
    accent: "secondary",
    title: "RADAR SYSTEM : Internship Project",
    badge: "[ STATUS: PROTOTYPE ]",
    description:
      "> READY FOR DETECTION AND TRACKING... Custom Aruduino UNO system for real-time object detection using ultrasonic sensor and servo motor. Features capture, tracking and alerting of objects on-the-run.",
    tags: ["C++", "Arduino-UNO", "Python", "Pygame"],
    cta: "VIEW_DOCUMENTATION",
    link:"https://github.com/6cloudguy/radariot",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcPcKPpd1puFSsqNVVy3AiNrbdTqFiPyObMdA8-lCpSOQUTgYaYJr9SIKiPby3gJ2pDd1VGKdO3D_Xs9aEgeWWJCIQb9UcJZ6VHYQcv8MpcDRY1q2DBpjcD6dkMQ3pIsJ1SRi-XQt-alECsXckxId72ChC-AAXN0NDyyLLdF28IZA2Ik4IDFfk6gep6EAUR1N80QSdUOyWV_I3yPXpeu6VjaIR1fk9syHMtkGzZTfPRiJxXYzYHSGP-PI3Pmp3DN-BEjegz_6XMuZP",
  },
  {
    node: "NODE_03 // EXPLOIT",
    category: "EXPLOIT",
    accent: "secondary",
    title: "TV STREAMER // EXPLOIT",
    badge: "[ STATUS: PROTOTYPE ]",
    description:
      "> READY FOR DETECTION AND TRACKING... Custom Aruduino UNO system for real-time object detection using ultrasonic sensor and servo motor. Features capture, tracking and alerting of objects on-the-run.",
    tags: ["C++", "Arduino-UNO", "Python", "Pygame"],
    cta: "VIEW_POC",
    link:"https://github.com/6cloudguy/radariot",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcPcKPpd1puFSsqNVVy3AiNrbdTqFiPyObMdA8-lCpSOQUTgYaYJr9SIKiPby3gJ2pDd1VGKdO3D_Xs9aEgeWWJCIQb9UcJZ6VHYQcv8MpcDRY1q2DBpjcD6dkMQ3pIsJ1SRi-XQt-alECsXckxId72ChC-AAXN0NDyyLLdF28IZA2Ik4IDFfk6gep6EAUR1N80QSdUOyWV_I3yPXpeu6VjaIR1fk9syHMtkGzZTfPRiJxXYzYHSGP-PI3Pmp3DN-BEjegz_6XMuZP",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="mb-12 border-l-2 border-primary-fixed pl-6">
        <div className="flex items-center gap-2 text-primary-fixed mb-2">
          <span className="material-symbols-outlined text-sm">directory_sync</span>
          <span className="font-code-sm">ROOT/REPOS/SENTINEL/PROJECTS</span>
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-surface mb-4">
          PROJECT_FILES
        </h1>
        <p className="font-body-lg text-outline max-w-2xl">
          Repository of high-impact cybersecurity assets, ranging from distributed OSINT
          architectures to tactical hardware payloads. Documentation and source code encrypted by
          default.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {PROJECTS.map((p) => {
          const accent =
            p.accent === "primary"
              ? {
                  ring: "hover:border-primary-fixed-dim",
                  text: "text-primary-fixed",
                  border: "border-primary-fixed",
                  bg: "bg-primary-fixed",
                  pill: "border-primary-fixed/40 bg-primary-fixed/5",
                  badgeBg: "bg-primary-fixed/20 border-primary-fixed/30",
                  hover: "hover:bg-primary-fixed hover:text-black",
                  nodeText: "text-primary-fixed-dim",
                }
              : {
                  ring: "hover:border-secondary-fixed",
                  text: "text-secondary-fixed",
                  border: "border-secondary-fixed",
                  bg: "bg-secondary-fixed",
                  pill: "border-secondary-fixed/40 bg-secondary-fixed/5",
                  badgeBg: "bg-secondary-fixed/20 border-secondary-fixed/30",
                  hover: "hover:bg-secondary-fixed hover:text-black",
                  nodeText: "text-secondary-fixed",
                };
          return (
            <div
              key={p.title}
              className={`group relative bg-surface-container-lowest border border-outline-variant overflow-hidden transition-all ${accent.ring}`}
            >
              <div className="bg-surface-container-highest px-4 py-2 flex justify-between items-center border-b border-outline-variant">
                <span className={`font-label-caps ${accent.nodeText}`}>{p.node}</span>
                <div className="flex gap-2">
                  <span className="material-symbols-outlined text-outline text-sm">remove</span>
                  <span className="material-symbols-outlined text-outline text-sm">close</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden border-r border-outline-variant bg-black">
                  <img
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    alt={p.title}
                    src={p.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`inline-block px-2 py-1 ${accent.badgeBg} ${accent.text} font-code-sm text-xs border mb-2`}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="font-headline-md text-on-surface mb-2 tracking-tight">{p.title}</h2>
                    <p
                      className="font-code-sm text-outline-variant mb-6 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: p.description.replace("...", "...<br/>") }}
                    />
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className={`font-code-sm text-xs ${accent.text} border px-2 py-1 ${accent.pill}`}
                        >
                          [ {t} ]
                        </span>
                      ))}
                    </div>
                  </div>
                  <a className={`w-full py-3 bg-transparent border ${accent.border} ${accent.text} font-label-caps ${accent.hover} transition-all active:scale-95 flex justify-center items-center text-center`} href={p.link} target="blank">
                    {p.cta}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Status Bars
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <StatusBar label="CORE_TEMP" value="34.2°C" color="primary" width="w-1/3" />
        <StatusBar label="NET_TRAFFIC" value="1.2 Gbps" color="secondary" width="w-2/3" />
        <StatusBar label="ACTIVE_THREADS" value="12/16" color="tertiary" width="w-4/5" />
      </div> */}

      {/* Terminal listing */}
      <div className="border border-outline-variant bg-black p-6 font-code-sm text-primary-fixed mb-4 max-w-2xl">
        <div className="mb-2">root@sentinel-os:~/projects$ ls -la</div>
        <div className="opacity-80 flex flex-col gap-1">
          <div>drwxr-xr-x  2 root root  4096 Oct 24 14:32 .</div>
          <div>drwxr-xr-x 15 root root  4096 Oct 20 09:15 ..</div>
          <div>-rw-r--r--  1 root root  2048 Oct 22 18:00 osint_scraper.py</div>
          <div>-rw-r--r--  1 root root 10240 Oct 21 11:24 wifi_payload.bin</div>
        </div>
        <div className="mt-4">
          root@sentinel-os:~/projects${" "}
          <span className="inline-block w-2 h-4 bg-primary-fixed align-middle animate-pulse" />
        </div>
      </div>
    </SiteLayout>
  );
}

function StatusBar({
  label,
  value,
  color,
  width,
}: {
  label: string;
  value: string;
  color: "primary" | "secondary" | "tertiary";
  width: string;
}) {
  const c = {
    primary: { text: "text-primary-fixed", bg: "bg-primary-fixed", shadow: "shadow-[0_0_8px_#79ff5b]" },
    secondary: { text: "text-secondary-fixed", bg: "bg-secondary-fixed", shadow: "shadow-[0_0_8px_#6ff6ff]" },
    tertiary: { text: "text-tertiary-fixed-dim", bg: "bg-tertiary-fixed-dim", shadow: "shadow-[0_0_8px_#ffb3b2]" },
  }[color];
  return (
    <div className="bg-surface-container-low border border-outline-variant p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center mb-2">
        <span className="font-label-caps text-outline">{label}</span>
        <span className={`${c.text} font-code-sm`}>{value}</span>
      </div>
      <div className="w-full h-1 bg-outline-variant">
        <div className={`h-full ${c.bg} ${width} ${c.shadow}`} />
      </div>
    </div>
  );
}
