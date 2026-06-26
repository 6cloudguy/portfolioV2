import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "SENTINEL_OS // BLOG & LOGS" },
      { name: "description", content: "Unfiltered chronolog of operational maneuvers, vulnerability research, and digital forensic findings." },
      { property: "og:title", content: "SENTINEL_OS // BLOG & LOGS" },
      { property: "og:description", content: "Unfiltered chronolog of operational maneuvers, vulnerability research, and digital forensic findings." },
    ],
  }),
  component: BlogPage,
});

const ENTRIES = [
  {
    id: "#00142",
    severity: "CRITICAL",
    severityColor: "border-error text-error",
    timestamp: "T-MINUS: 2023.10.12 // 04:22 GMT",
    title: "BYPASSING_EDR: HEURISTIC_EVASION",
    excerpt:
      "Techniques for circumventing modern Endpoint Detection and Response systems using direct syscall invocation and memory-only execution payloads. Analysis of hooking mechanisms...",
    tags: ["#EDR", "#EVASION"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmhE3EuN1AF6CZJlbv7Jq2zqDYpV3BB8rsr5RZ64Emoy1tv_YxgkAvp9OmJaVAs4z8RON_IXSLkfh82epLhjobSg1iOYjiNoFoSqD8gxQhzJGVQYR9xZbzmD_jE85p4s75PoG37bZoPe8EuSIAnW1alKk9GHOgfIe2phM5oyJV9snEsu0_SQUie-Fr6ItsribYkH_fASbEODzuokpMrr0ua1EH1KAW06kxogHPYYOePa3WuRN4KyKhKeIGx_WRf4J6m0VBzHk46F7Z",
    overlay: "bg-primary-fixed/10",
    accent: "text-primary-fixed",
  },
  {
    id: "#00139",
    severity: "INFO",
    severityColor: "border-secondary-fixed text-secondary-fixed",
    timestamp: "T-MINUS: 2023.09.28 // 11:15 GMT",
    title: "IOT_FIRMWARE_EXTRACTION",
    excerpt:
      "A deep dive into dumping flash memory from embedded devices via UART and SPI. Leveraging Binwalk for file system reconstruction and hardcoded credential discovery.",
    tags: ["#HARDWARE", "#SPI"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5BReCrJ65drGXft2lGTrA_-NsIFmq7QPj9DdUrH4KTJPL2M_fPJdU6Yeb9CIMa44xd3cbmafkF8JPrptMPK-X4AI_pkqhWSN-IKHH-8hgo7JSb5dTLfL117lGzDFV19ZxlK1b5JAydHgd8pomSj5LPpZ7gogjpTN-OyMCgeV2X6-7Dhnc5KTy5aOrgy_PeQZtptLqG0n_AlETnONp8DAh51lzi19fnwvQ4hee9GuIdDRXN2Oa-TOA65RDk7pA7eRxlQKTTh-lLsid",
    overlay: "bg-secondary-fixed/10",
    accent: "text-secondary-fixed",
  },
];

const CATEGORIES = [
  ["EXPLOIT_DEV", "08"],
  ["FORENSICS", "14"],
  ["NET_PENTEST", "22"],
  ["MALWARE_RE", "05"],
];

function BlogPage() {
  return (
    <SiteLayout>
      <div className="mb-12 border-l-4 border-primary-fixed pl-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-primary-fixed font-code-sm">[ SYSTEM_STATUS: OPERATIONAL ]</span>
          <div className="h-px flex-1 bg-outline-variant" />
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter">
          BLOG &amp; LOGS
          <span className="inline-block w-3 h-7 bg-primary-fixed align-middle ml-2 animate-pulse" />
        </h1>
        <p className="text-outline font-body-md mt-2 max-w-2xl">
          Unfiltered chronolog of operational maneuvers, vulnerability research, and digital
          forensic findings. Documented for internal review and recruitment verification.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Logs */}
        <div className="lg:col-span-8 space-y-6">
          {ENTRIES.map((e) => (
            <article
              key={e.id}
              className="relative group border border-outline-variant bg-surface-container-low hover:bg-surface-container transition-all overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48 md:h-auto relative shrink-0">
                  <img
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                    src={e.image}
                    alt={e.title}
                  />
                  <div className={`absolute inset-0 ${e.overlay} mix-blend-overlay`} />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
                      <div className="font-label-caps text-outline flex items-center gap-2">
                        <span className={e.accent}>{e.id}</span>
                        <span className="w-1 h-1 bg-outline rounded-full" />
                        {e.timestamp}
                      </div>
                      <span
                        className={`px-2 py-0.5 border ${e.severityColor} text-[10px] font-bold font-code-sm uppercase tracking-widest`}
                      >
                        [ {e.severity} ]
                      </span>
                    </div>
                    <h2 className={`font-headline-md text-on-surface mb-3 group-hover:${e.accent} transition-colors`}>
                      {e.title}
                    </h2>
                    <p className="text-outline font-body-md line-clamp-2 mb-6">{e.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex gap-2">
                      {e.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-code-sm text-secondary-fixed bg-secondary-fixed/10 px-2 py-1 border border-secondary-fixed/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a className="font-label-caps text-primary-fixed hover:underline" href="#">
                      [ READ_MORE ]
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <article className="p-6 border border-outline-variant bg-surface-container-low hover:bg-surface-container transition-all group">
            <div className="flex justify-between items-start mb-2">
              <div className="font-label-caps text-outline">T-MINUS: 2023.09.05 // 22:50 GMT</div>
              <span className="text-outline font-code-sm text-[10px] uppercase">ID: LOG_S_992</span>
            </div>
            <h3 className="font-headline-md text-on-surface group-hover:text-primary-fixed transition-colors mb-2">
              ANALYSIS: RE_ENGINEERING_BANKING_TROJAN_V2
            </h3>
            <p className="text-outline font-body-md mb-4 italic">
              "Behavioral patterns suggest a modular command-and-control infrastructure with domain
              generation algorithms enabled..."
            </p>
            <a className="font-label-caps text-primary-fixed hover:underline" href="#">
              [ READ_MORE ]
            </a>
          </article>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 border border-outline-variant bg-surface-container-highest/30">
            <div className="font-label-caps text-primary-fixed mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">search</span>
              QUERY_DATABASE
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-fixed font-code-sm">
                $
              </span>
              <input
                className="w-full bg-black border border-outline-variant text-primary-fixed font-code-sm pl-8 py-2 focus:border-primary-fixed outline-none placeholder:text-outline-variant"
                placeholder="search_logs..."
                type="text"
              />
            </div>
          </div>

          <div className="p-6 border border-outline-variant bg-black">
            <div className="font-label-caps text-secondary-fixed mb-6 border-b border-outline-variant pb-2">
              NODE_CATEGORIES
            </div>
            <ul className="space-y-4">
              {CATEGORIES.map(([name, count]) => (
                <li key={name} className="flex justify-between items-center group cursor-pointer">
                  <span className="font-code-sm text-outline group-hover:text-on-surface transition-colors flex items-center gap-2">
                    <span className="text-primary-fixed">-&gt;</span> {name}
                  </span>
                  <span className="font-code-sm text-outline-variant text-[10px]">[ {count} ]</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-outline-variant bg-black p-4 relative overflow-hidden group">
            <div className="font-label-caps text-outline-variant mb-4 flex justify-between items-center">
              <span>VULNERABILITY_INDEX</span>
              <span className="animate-pulse text-error">● LIVE</span>
            </div>
            <div className="flex items-end gap-1 h-32">
              {[40, 65, 90, 55, 30, 75].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary-fixed/20 border-t border-primary-fixed transition-all duration-700"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant/30 text-[10px] font-code-sm text-outline-variant text-center uppercase tracking-widest">
              Global Threat Intel Stream [CONNECTED]
            </div>
          </div>

          <button className="w-full py-6 border-2 border-error text-error font-headline-md relative overflow-hidden hover:bg-error hover:text-on-error transition-all">
            CRITICAL_ACTION
            <div className="text-[10px] font-code-sm mt-1 opacity-70">
              INITIATE_ENGAGEMENT_SEQUENCE
            </div>
          </button>
        </div>
      </section>
    </SiteLayout>
  );
}
