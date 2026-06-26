import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "SENTINEL_OS // CONTACT_PORTAL" },
      { name: "description", content: "Establish a secure communication channel with OPERATOR_01. End-to-end encryption active." },
      { property: "og:title", content: "SENTINEL_OS // CONTACT_PORTAL" },
      { property: "og:description", content: "Establish a secure communication channel with OPERATOR_01." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <SiteLayout>
      <div className="mb-12 border-l-4 border-primary-fixed pl-6">
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-primary-fixed uppercase tracking-tighter">
          ESTABLISH_LINK
        </h1>
        <p className="font-code-sm text-outline mt-2">
          SECURE COMMUNICATION CHANNEL // END-TO-END ENCRYPTION ACTIVE
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form */}
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-high border border-outline-variant flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
              <span className="text-outline-variant font-label-caps">NODE_01 // MESSAGE_UPLINK</span>
              <span className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-error/40" />
                <span className="w-2 h-2 rounded-full bg-secondary-container/40" />
                <span className="w-2 h-2 rounded-full bg-primary-container/40" />
              </span>
            </div>
            <div className="text-primary-fixed font-code-sm animate-pulse">
              LIVE_CONNECTION_STABLE
            </div>
          </div>

          <div className="bg-black border-x border-b border-outline-variant p-8 shadow-[0_0_40px_rgba(42,229,0,0.05)]">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field label="SENDER_ID" prefix="$">
                  <input
                    required
                    name="sender_id"
                    placeholder="NAME_REQUIRED"
                    className="w-full bg-surface-container-low border border-outline-variant text-primary-fixed-dim pl-8 pr-4 py-3 focus:border-primary-container focus:outline-none placeholder:text-outline-variant font-code-sm transition-colors"
                  />
                </Field>
                <Field label="ENCRYPTED_CHANNEL" prefix="@">
                  <input
                    required
                    type="email"
                    name="channel"
                    placeholder="EMAIL_ADDRESS"
                    className="w-full bg-surface-container-low border border-outline-variant text-primary-fixed-dim pl-8 pr-4 py-3 focus:border-primary-container focus:outline-none placeholder:text-outline-variant font-code-sm transition-colors"
                  />
                </Field>
              </div>

              <div className="space-y-2">
                <label className="block font-label-caps text-primary-fixed">SUBJECT_PROTOCOL</label>
                <select
                  name="protocol"
                  className="w-full bg-surface-container-low border border-outline-variant text-primary-fixed-dim px-4 py-3 focus:border-primary-container focus:outline-none font-code-sm appearance-none cursor-pointer"
                >
                  <option value="general">GENERAL_INQUIRY</option>
                  <option value="exploit">VULNERABILITY_REPORT</option>
                  <option value="hire">RECRUITMENT_OFFER</option>
                  <option value="collab">OPERATIONAL_COLLABORATION</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-label-caps text-primary-fixed">DATA_PAYLOAD</label>
                <div className="relative">
                  <textarea
                    required
                    name="payload"
                    rows={8}
                    placeholder="ENTER_MESSAGE_HERE..."
                    className="w-full bg-surface-container-low border border-outline-variant text-primary-fixed-dim p-4 focus:border-primary-container focus:outline-none placeholder:text-outline-variant font-code-sm resize-none transition-colors"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-50 pointer-events-none">
                    <span className="text-[10px] font-code-sm text-outline">ENCRYPTION: AES-256</span>
                    <span className="material-symbols-outlined text-sm">lock</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-center gap-4 pt-4">
                {sent && (
                  <span className="font-code-sm text-primary-fixed animate-pulse">
                    &gt; PACKET_TRANSMITTED
                  </span>
                )}
                <button
                  type="submit"
                  className="group relative overflow-hidden bg-transparent border-2 border-primary-fixed text-primary-fixed px-10 py-4 font-headline-md tracking-widest hover:bg-primary-fixed hover:text-black transition-all active:animate-flicker"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="material-symbols-outlined">send</span>
                    TRANSMIT_PACKET
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest border border-outline-variant p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary-fixed">lan</span>
              <h2 className="font-label-caps text-secondary-fixed">DIRECT_UPLINKS</h2>
            </div>
            <div className="space-y-4">
              <UplinkRow icon="hub" label="GIT_REPOSITORY" value="192.168.1.1 // GITHUB" />
              <UplinkRow icon="link" label="SOCIAL_NODE" value="172.16.254.1 // LINKEDIN" />
              <UplinkRow icon="public" label="COMM_LINK" value="10.0.0.1 // X_TWITTER" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant p-4">
              <div className="text-[10px] text-outline-variant font-label-caps mb-1">LATENCY</div>
              <div className="text-xl font-headline-md text-primary-fixed">14ms</div>
              <div className="w-full bg-outline-variant h-1 mt-2">
                <div className="bg-primary-fixed h-full w-4/5" />
              </div>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-4">
              <div className="text-[10px] text-outline-variant font-label-caps mb-1">ENCRYPTION</div>
              <div className="text-xl font-headline-md text-secondary-fixed">ACTIVE</div>
              <div className="flex gap-1 mt-2">
                <div className="w-1 h-2 bg-secondary-fixed" />
                <div className="w-1 h-2 bg-secondary-fixed" />
                <div className="w-1 h-2 bg-secondary-fixed" />
                <div className="w-1 h-2 bg-secondary-fixed/30" />
              </div>
            </div>
          </div>

          <div className="border border-outline-variant p-4 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label-caps text-outline">PUBLIC_KEY_FRAGMENT</span>
              <span className="material-symbols-outlined text-outline text-sm">fingerprint</span>
            </div>
            <div className="font-code-sm text-outline-variant text-[10px] break-all leading-tight opacity-60">
              SSH-RSA AAAAB3NzaC1yc2EAAAADAQABAAABAQC8v+9eJ4p/0qfFp2Hl2X3r8uW5nL6z1b5v7m8f9G0k1...
              [TRUNCATED]
            </div>
          </div>

          <button className="w-full border-2 border-on-tertiary-container bg-black text-on-tertiary-container py-4 font-headline-md shadow-[0_0_15px_rgba(196,0,44,0.3)] hover:bg-on-tertiary-container hover:text-white transition-all active:scale-95 group">
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined group-hover:animate-pulse">
                emergency_home
              </span>
              EMERGENCY_REACH_OUT
            </span>
          </button>
        </aside>
      </div>
    </SiteLayout>
  );
}

function Field({
  label,
  prefix,
  children,
}: {
  label: string;
  prefix: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block font-label-caps text-primary-fixed">{label}</label>
      <div className="relative flex items-center">
        <span className="absolute left-4 text-primary-fixed font-code-sm z-10">{prefix}</span>
        {children}
      </div>
    </div>
  );
}

function UplinkRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <a
      href="#"
      className="group flex items-center justify-between p-3 border border-outline-variant hover:border-secondary-fixed hover:bg-secondary-container/5 transition-all"
    >
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-outline group-hover:text-secondary-fixed transition-colors">
          {icon}
        </span>
        <div>
          <div className="text-[10px] text-outline font-code-sm">{label}</div>
          <div className="font-code-sm text-secondary-fixed">{value}</div>
        </div>
      </div>
      <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">
        arrow_forward
      </span>
    </a>
  );
}
