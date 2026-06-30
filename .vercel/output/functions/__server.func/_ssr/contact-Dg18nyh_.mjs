import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-CRnyHIrb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Dg18nyh_.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 border-l-4 border-primary-fixed pl-6 max-w-3xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-headline-lg-mobile md:font-headline-lg text-primary-fixed uppercase tracking-tighter",
			children: "ESTABLISH_LINK"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-code-sm text-outline mt-2",
			children: "SECURE COMMUNICATION CHANNEL"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-3xl mx-auto space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-surface-container-high border border-outline-variant flex items-center justify-between px-4 py-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-outline-variant font-label-caps",
					children: "SYSTEM // UPLINK_CHANNELS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-error/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-secondary-container/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-primary-container/40" })
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-black border border-outline-variant p-8 shadow-[0_0_40px_rgba(42,229,0,0.05)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-outline font-code-sm mb-8 leading-relaxed",
				children: "> DIRECT CHANNELS OF COMMUNICATION, SELECT A METHOD BELOW TO CONNECT YOUR SESSION TO ME."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						icon: "hub",
						label: "GITHUB // SOURCE_CONTROL",
						subText: "Inspect public repositories, hardware payloads, and OSINT scripts.",
						href: "https://github.com/6cloudguy",
						accent: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						icon: "lan",
						label: "LINKEDIN // PROFESSIONAL_NET",
						subText: "Connect for contract work, security consulting, and research reviews.",
						href: "https://linkedin.com/in/pranavp2006",
						accent: "secondary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						icon: "terminal",
						label: "HACKTHEBOX // LABS",
						subText: "View active penetration testing labs, CTF scores, and rank details.",
						href: "https://app.hackthebox.com/users/2357341",
						accent: "secondary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialButton, {
						icon: "mail",
						label: "EMAIL // DIRECT_INBOX",
						subText: "Direct secure uplink to request encryption keys or submit inquiries.",
						href: "mailto:6cloudguy@proton.me",
						accent: "primary"
					})
				]
			})]
		})]
	})] });
}
function SocialButton({ icon, label, subText, href, accent }) {
	const c = {
		primary: {
			border: "border-primary-fixed hover:border-primary-fixed-dim hover:bg-primary-fixed/5",
			text: "text-primary-fixed",
			glow: "hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]"
		},
		secondary: {
			border: "border-secondary-fixed hover:border-secondary-fixed/80 hover:bg-secondary-fixed/5",
			text: "text-secondary-fixed",
			glow: "hover:shadow-[0_0_15px_rgba(111,246,255,0.15)]"
		}
	}[accent];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		className: `group block p-6 border ${c.border} bg-surface-container-lowest/40 transition-all duration-300 ${c.glow} relative overflow-hidden`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 bg-black border border-outline-variant group-hover:border-transparent transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `material-symbols-outlined ${c.text} text-2xl group-hover:scale-110 transition-transform`,
					children: icon
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-label-caps text-on-surface group-hover:text-white transition-colors text-[11px] font-bold tracking-wider",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-code-sm text-outline text-[11px] leading-relaxed",
					children: subText
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `material-symbols-outlined ${c.text} text-sm`,
				children: "open_in_new"
			})
		})]
	});
}
//#endregion
export { ContactPage as component };
