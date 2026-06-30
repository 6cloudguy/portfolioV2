import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "SENTINEL_OS // CONTACT_PORTAL" },
      { name: "description", content: "Establish a direct communication channel with OPERATOR_01 via secure uplink redirects." },
      { property: "og:title", content: "SENTINEL_OS // CONTACT_PORTAL" },
      { property: "og:description", content: "Establish a direct communication channel with OPERATOR_01 via secure uplink redirects." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <div className="mb-12 border-l-4 border-primary-fixed pl-6 max-w-3xl mx-auto">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary-fixed uppercase tracking-tighter">
          ESTABLISH_LINK
        </h1>
        <p className="font-code-sm text-outline mt-2">
          SECURE COMMUNICATION CHANNEL
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Terminal Header */}
        <div className="bg-surface-container-high border border-outline-variant flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <span className="text-outline-variant font-label-caps">SYSTEM // UPLINK_CHANNELS</span>
            <span className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-error/40" />
              <span className="w-2 h-2 rounded-full bg-secondary-container/40" />
              <span className="w-2 h-2 rounded-full bg-primary-container/40" />
            </span>
          </div>
        </div>

        {/* Channels Console */}
        <div className="bg-black border border-outline-variant p-8 shadow-[0_0_40px_rgba(42,229,0,0.05)]">
          <p className="text-outline font-code-sm mb-8 leading-relaxed">
            &gt; DIRECT CHANNELS OF COMMUNICATION, SELECT A METHOD BELOW TO CONNECT YOUR SESSION TO ME.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SocialButton
              icon="hub"
              label="GITHUB // SOURCE_CONTROL"
              subText="Inspect public repositories, hardware payloads, and OSINT scripts."
              href="https://github.com/6cloudguy"
              accent="primary"
            />
            <SocialButton
              icon="lan"
              label="LINKEDIN // PROFESSIONAL_NET"
              subText="Connect for contract work, security consulting, and research reviews."
              href="https://linkedin.com/in/pranavp2006"
              accent="secondary"
            />
            <SocialButton
              icon="terminal"
              label="HACKTHEBOX // LABS"
              subText="View active penetration testing labs, CTF scores, and rank details."
              href="https://app.hackthebox.com/users/2357341"
              accent="secondary"
            />
            <SocialButton
              icon="mail"
              label="EMAIL // DIRECT_INBOX"
              subText="Direct secure uplink to request encryption keys or submit inquiries."
              href="mailto:6cloudguy@proton.me"
              accent="primary"
            />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function SocialButton({
  icon,
  label,
  subText,
  href,
  accent,
}: {
  icon: string;
  label: string;
  subText: string;
  href: string;
  accent: "primary" | "secondary";
}) {
  const c = {
    primary: {
      border: "border-primary-fixed hover:border-primary-fixed-dim hover:bg-primary-fixed/5",
      text: "text-primary-fixed",
      glow: "hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]",
    },
    secondary: {
      border: "border-secondary-fixed hover:border-secondary-fixed/80 hover:bg-secondary-fixed/5",
      text: "text-secondary-fixed",
      glow: "hover:shadow-[0_0_15px_rgba(111,246,255,0.15)]",
    },
  }[accent];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 border ${c.border} bg-surface-container-lowest/40 transition-all duration-300 ${c.glow} relative overflow-hidden`}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-black border border-outline-variant group-hover:border-transparent transition-colors">
          <span className={`material-symbols-outlined ${c.text} text-2xl group-hover:scale-110 transition-transform`}>
            {icon}
          </span>
        </div>
        <div className="space-y-1">
          <h2 className="font-label-caps text-on-surface group-hover:text-white transition-colors text-[11px] font-bold tracking-wider">
            {label}
          </h2>
          <p className="font-code-sm text-outline text-[11px] leading-relaxed">
            {subText}
          </p>
        </div>
      </div>
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className={`material-symbols-outlined ${c.text} text-sm`}>
          open_in_new
        </span>
      </div>
    </a>
  );
}
