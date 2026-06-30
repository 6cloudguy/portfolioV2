import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-CRnyHIrb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BTH5Ji5-.js
var import_jsx_runtime = require_jsx_runtime();
var PROJECTS = [
	{
		node: "NODE_01 // SCRIPT",
		category: "SCRIPT",
		accent: "primary",
		title: "AUTOFN",
		badge: "[ FOCUS: RECON ]",
		description: "> INITIALIZING DATA HARVEST... Automated reconnaissance engine designed for Bug Bounty Hunting. Uses multiple reconaissance tools to form easily and smartly identify entrypoints and scanning automation.",
		tags: [
			"Bash",
			"Nmap",
			"Ffuf",
			"Exploitdb"
		],
		cta: "VIEW_SOURCE_CODE",
		link: "https://github.com/6cloudguy/autofn",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy4HB1y_7-m1nvSQsdqutLjdrsoUCdUAbgatR3TveArZBgQmxCy53bgXj6-GTQpZXAWm_kh6O7Il_rPERPqKmYfk2BWKBnzQEqakCcVpD3lfX-MiMgj7hYZ6KRJytiMXcqSzNxjAHpHXfL3paETxbi6SpcR0R9lBTF3RHhqi_XMqDRG7MGXuYNiDXJ0P9TrPA-IQSfMjGaans4sUcrnH_UW_GPzilCaIzH75wHS1UY95g1J8DLazWrnUvK010VP2CQxVQELlXCc8l8"
	},
	{
		node: "NODE_02 // HARDWARE",
		category: "HARDWARE",
		accent: "secondary",
		title: "RADAR SYSTEM : Internship Project",
		badge: "[ STATUS: PROTOTYPE ]",
		description: "> READY FOR DETECTION AND TRACKING... Custom Aruduino UNO system for real-time object detection using ultrasonic sensor and servo motor. Features capture, tracking and alerting of objects on-the-run.",
		tags: [
			"C++",
			"Arduino-UNO",
			"Python",
			"Pygame"
		],
		cta: "VIEW_DOCUMENTATION",
		link: "https://github.com/6cloudguy/radariot",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcPcKPpd1puFSsqNVVy3AiNrbdTqFiPyObMdA8-lCpSOQUTgYaYJr9SIKiPby3gJ2pDd1VGKdO3D_Xs9aEgeWWJCIQb9UcJZ6VHYQcv8MpcDRY1q2DBpjcD6dkMQ3pIsJ1SRi-XQt-alECsXckxId72ChC-AAXN0NDyyLLdF28IZA2Ik4IDFfk6gep6EAUR1N80QSdUOyWV_I3yPXpeu6VjaIR1fk9syHMtkGzZTfPRiJxXYzYHSGP-PI3Pmp3DN-BEjegz_6XMuZP"
	},
	{
		node: "NODE_03 // SCRIPT",
		category: "SCRIPT",
		accent: "secondary",
		title: "TV STREAMER // SCRIPT",
		badge: "[ STATUS: IN_PROGRESS ]",
		description: "> READY TO INTERUPT AND PLAY ANYHTING... Script to utilise a loophole in Sony Bravia systems to use them as an external sound system/media player. Utilises a default running UPnP DLNA 1.0 service in them. Works on some systems.",
		tags: [
			"Python",
			"Bash",
			"UPnP",
			"PoC"
		],
		cta: "VIEW_SCRIPT",
		link: "https://github.com/6cloudguy/tvstreamer",
		image: "/assets/pcs.png"
	}
];
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-12 border-l-2 border-primary-fixed pl-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-primary-fixed mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined text-sm",
						children: "directory_sync"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-code-sm",
						children: "ROOT/REPOS/PROJECTS"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-headline-lg-mobile md:font-headline-lg text-on-surface mb-4",
					children: "PROJECT_FILES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-body-lg text-outline max-w-2xl",
					children: "Repository of high-impact cybersecurity assets, ranging from distributed OSINT architectures to tactical hardware payloads. Documentation and source code encrypted by default."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",
			children: PROJECTS.map((p) => {
				const accent = p.accent === "primary" ? {
					ring: "hover:border-primary-fixed-dim",
					text: "text-primary-fixed",
					border: "border-primary-fixed",
					bg: "bg-primary-fixed",
					pill: "border-primary-fixed/40 bg-primary-fixed/5",
					badgeBg: "bg-primary-fixed/20 border-primary-fixed/30",
					hover: "hover:bg-primary-fixed hover:text-black",
					nodeText: "text-primary-fixed-dim"
				} : {
					ring: "hover:border-secondary-fixed",
					text: "text-secondary-fixed",
					border: "border-secondary-fixed",
					bg: "bg-secondary-fixed",
					pill: "border-secondary-fixed/40 bg-secondary-fixed/5",
					badgeBg: "bg-secondary-fixed/20 border-secondary-fixed/30",
					hover: "hover:bg-secondary-fixed hover:text-black",
					nodeText: "text-secondary-fixed"
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `group relative bg-surface-container-lowest border border-outline-variant overflow-hidden transition-all ${accent.ring}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-surface-container-highest px-4 py-2 flex justify-between items-center border-b border-outline-variant",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `font-label-caps ${accent.nodeText}`,
							children: p.node
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-outline text-sm",
								children: "remove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined text-outline text-sm",
								children: "close"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden border-r border-outline-variant bg-black",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									className: "w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700",
									alt: p.title,
									src: p.image
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-block px-2 py-1 ${accent.badgeBg} ${accent.text} font-code-sm text-xs border mb-2`,
										children: p.badge
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 p-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-headline-md text-on-surface mb-2 tracking-tight",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-code-sm text-outline-variant mb-6 leading-relaxed",
									dangerouslySetInnerHTML: { __html: p.description.replace("...", "...<br/>") }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mb-8",
									children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `font-code-sm text-xs ${accent.text} border px-2 py-1 ${accent.pill}`,
										children: [
											"[ ",
											t,
											" ]"
										]
									}, t))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: `w-full py-3 bg-transparent border ${accent.border} ${accent.text} font-label-caps ${accent.hover} transition-all active:scale-95 flex justify-center items-center text-center`,
								href: p.link,
								target: "blank",
								children: p.cta
							})]
						})]
					})]
				}, p.title);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-outline-variant bg-black p-6 font-code-sm text-primary-fixed mb-4 max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2",
					children: "root@parrot:~/projects$ ls -la"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "opacity-80 flex flex-col gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "drwxr-xr-x  2 root root  4096 Jul 24 14:32 ." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "drwxr-xr-x 15 root root  4096 Jul 20 09:15 .." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "-rw-r--r--  1 root root  2048 Jul 22 18:00 autofn.sh" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "-rw-r--r--  1 root root  1024 Nov 21 11:24 tv-speaker.sh" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "-rw-r--r--  1 root root 10240 Sep 21 01:45 radar.py" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [
						"root@parrot:~/projects$",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-2 h-4 bg-primary-fixed align-middle animate-pulse" })
					]
				})
			]
		})
	] });
}
//#endregion
export { ProjectsPage as component };
