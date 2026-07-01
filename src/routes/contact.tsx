import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "PRANAV P // CONTACT_PORTAL" },
      { name: "description", content: "Establish a direct communication channel with OPERATOR_01 via secure uplink redirects." },
      { property: "og:title", content: "PRANAV P // CONTACT_PORTAL" },
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
              icon="github"
              label="GITHUB // SOURCE_CONTROL"
              subText="Inspect public repositories, hardware payloads, and OSINT scripts."
              href="https://github.com/6cloudguy"
              accent="primary"
            />
            <SocialButton
              icon="linkedin"
              label="LINKEDIN // PROFESSIONAL_NET"
              subText="Connect for contract work, security consulting, and research reviews."
              href="https://linkedin.com/in/pranavp2006"
              accent="secondary"
            />
            <SocialButton
              icon="hackthebox"
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
  icon: "github" | "linkedin" | "hackthebox" | "mail";
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
      fill: "#79ff5b",
    },
    secondary: {
      border: "border-secondary-fixed hover:border-secondary-fixed/80 hover:bg-secondary-fixed/5",
      text: "text-secondary-fixed",
      glow: "hover:shadow-[0_0_15px_rgba(111,246,255,0.15)]",
      fill: "#6ff6ff",
    },
  }[accent];

  const ICONS: Record<string, JSX.Element> = {
    github: (
      <svg viewBox="0 0 24 24" fill={c.fill} className="w-6 h-6">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill={c.fill} className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    hackthebox: (
      <svg viewBox="0 0 24 24" fill={c.fill} className="w-6 h-6">
        <path d="m22.5106 6.4566.0008-.0123a.888.888 0 0 0-.2717-.6384c-.0084-.0084-.018-.0155-.0267-.0235-.0186-.0166-.0371-.0333-.0572-.0484-.0193-.0147-.04-.0276-.0607-.0406-.0096-.006-.0182-.0131-.0281-.0188L12.4576.1266a.891.891 0 0 0-.9223.0043L1.933 5.6744c-.0107.0062-.0203.014-.0307.0205-.0073.0047-.015.008-.0223.0128-.007.0047-.013.0106-.02.0155a.8769.8769 0 0 0-.147.1333l-.0026.003a.8872.8872 0 0 0-.2218.5847l.0009.014c-.0002.0088-.0015.0176-.0015.0264v11.0708c0 .3277.1802.6288.469.7836l9.5986 5.5417c.0076.0044.0158.0075.0236.0117a.8754.8754 0 0 0 .166.0687c.0134.004.0266.0083.0401.0117a.8793.8793 0 0 0 .072.0142c.0117.0019.0232.0045.0349.006a.835.835 0 0 0 .2157 0c.0117-.0015.0232-.0041.0348-.006a.9.9 0 0 0 .072-.0142c.0135-.0034.0267-.0077.04-.0117a.895.895 0 0 0 .0646-.0217.9134.9134 0 0 0 .1015-.047c.0078-.0042.016-.0072.0236-.0117l9.5986-5.5417a.8888.8888 0 0 0 .469-.7836V6.4779c0-.0071-.0012-.0142-.0014-.0213zM5.2543 6.0822l6.5367-3.774a.4182.4182 0 0 1 .4182 0l6.5366 3.774a.4182.4182 0 0 1 0 .7243l-6.5367 3.774a.4182.4182 0 0 1-.4182 0l-6.5366-3.774a.4182.4182 0 0 1 0-.7243zm5.6134 14.3449a.4172.4172 0 0 1-.626.3613L3.718 17.0218a.4173.4173 0 0 1-.2086-.3613V9.1279a.4172.4172 0 0 1 .6258-.3613l6.524 3.7666a.4172.4172 0 0 1 .2086.3614v7.5325zm9.623-3.7666a.4173.4173 0 0 1-.2086.3613l-6.5239 3.7666a.4172.4172 0 0 1-.6259-.3613v-7.5325c0-.149.0796-.2868.2087-.3614l6.5239-3.7666a.4172.4172 0 0 1 .6258.3613v7.5326z" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke={c.fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 border ${c.border} bg-surface-container-lowest/40 transition-all duration-300 ${c.glow} relative overflow-hidden`}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-black border border-outline-variant group-hover:border-transparent transition-colors shrink-0">
          {ICONS[icon]}
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

