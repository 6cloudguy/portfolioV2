import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-CRnyHIrb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BitGWHPm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEQUENCE = [
	{
		kind: "out",
		text: "[OK] SSH handshake complete ",
		color: "text-outline-variant"
	},
	{ kind: "gap" },
	{
		kind: "cmd",
		text: "whoami"
	},
	{
		kind: "out",
		text: "pranav p"
	},
	{ kind: "gap" },
	{
		kind: "cmd",
		text: "cat about.txt"
	},
	{
		kind: "out",
		text: "Role    :  CS Student (Year 3)  //  Sec Enthusiast"
	},
	{
		kind: "out",
		text: "Focus   :  Offensive Security, CTFs, IoT Hacking"
	},
	{
		kind: "out",
		text: "Location    :  India"
	},
	{
		kind: "out",
		text: "Status  :  ● ONLINE",
		color: "text-primary-fixed"
	},
	{ kind: "gap" },
	{
		kind: "cmd",
		text: "ls certs/"
	},
	{
		kind: "out",
		text: "ICCA.cert    eJPT.cert  [IN_PROGRESS]",
		color: "text-secondary-fixed"
	},
	{ kind: "gap" }
];
var SKILLS = [
	{
		cat: "WEB",
		items: [
			"Burp Suite",
			"SQLMap",
			"FFUF",
			"Nuclei",
			"Gobuster"
		]
	},
	{
		cat: "NETWORK",
		items: [
			"Nmap",
			"Wireshark",
			"Metasploit",
			"Netcat"
		]
	},
	{
		cat: "SCRIPTING",
		items: [
			"Python",
			"Bash",
			"C"
		]
	},
	{
		cat: "HARDWARE",
		items: [
			"Arduino",
			"Raspberry Pi",
			"UPnP/DLNA"
		]
	},
	{
		cat: "OTHER",
		items: [
			"Linux",
			"Git",
			"Docker",
			"HackTheBox"
		]
	}
];
var CERTIFICATIONS = [{
	id: "CERT_01",
	name: "INE Certified Cloud Associate",
	issuer: "INE Security",
	year: "2025",
	status: "VERIFIED",
	accent: "primary",
	badge: "ICCA"
}, {
	id: "CERT_02",
	name: "eLearnSecurity Junior Penetration Tester",
	issuer: "INE Security",
	year: "2026",
	status: "IN_PROGRESS",
	accent: "secondary",
	badge: "eJPT"
}];
var STATS = [
	{
		label: "YEAR_OF_STUDY",
		value: "3rd",
		unit: "YEAR"
	},
	{
		label: "CERTS_EARNED",
		value: "1",
		unit: "CERT"
	},
	{
		label: "CTF_PLATFORMS",
		value: "2+",
		unit: "ACTIVE"
	},
	{
		label: "BOXES_PWNED",
		value: "30+",
		unit: "BOXES"
	}
];
function HomePage() {
	const [lines, setLines] = (0, import_react.useState)([]);
	const [typing, setTyping] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let seqIdx = 0;
		const initial = [];
		while (seqIdx < SEQUENCE.length && SEQUENCE[seqIdx].kind !== "cmd") {
			const s = SEQUENCE[seqIdx];
			if (s.kind === "out") initial.push({
				kind: "out",
				text: s.text,
				color: s.color
			});
			else initial.push({ kind: "gap" });
			seqIdx++;
		}
		if (seqIdx < SEQUENCE.length) {
			initial.push({
				kind: "cmd",
				text: "",
				done: false
			});
			setLines(initial);
			const t = setTimeout(() => setTyping({
				seqIdx,
				charIdx: 0
			}), 600);
			return () => clearTimeout(t);
		} else setLines(initial);
	}, []);
	(0, import_react.useEffect)(() => {
		if (typing === null) return;
		const { seqIdx, charIdx } = typing;
		const seq = SEQUENCE[seqIdx];
		if (seq.kind !== "cmd") return;
		if (charIdx < seq.text.length) {
			const t = setTimeout(() => {
				setLines((prev) => {
					const next = [...prev];
					next[next.length - 1] = {
						kind: "cmd",
						text: seq.text.slice(0, charIdx + 1),
						done: false
					};
					return next;
				});
				setTyping({
					seqIdx,
					charIdx: charIdx + 1
				});
			}, 60 + Math.random() * 60);
			return () => clearTimeout(t);
		} else {
			const t = setTimeout(() => {
				setLines((prev) => {
					const next = [...prev];
					next[next.length - 1] = {
						kind: "cmd",
						text: seq.text,
						done: true
					};
					return next;
				});
				let nextIdx = seqIdx + 1;
				const toAppend = [];
				while (nextIdx < SEQUENCE.length && SEQUENCE[nextIdx].kind !== "cmd") {
					const s = SEQUENCE[nextIdx];
					if (s.kind === "out") toAppend.push({
						kind: "out",
						text: s.text,
						color: s.color
					});
					else toAppend.push({ kind: "gap" });
					nextIdx++;
				}
				setTimeout(() => {
					if (nextIdx < SEQUENCE.length) {
						setLines((prev) => [
							...prev,
							...toAppend,
							{
								kind: "cmd",
								text: "",
								done: false
							}
						]);
						setTyping({
							seqIdx: nextIdx,
							charIdx: 0
						});
					} else {
						setLines((prev) => [...prev, ...toAppend]);
						setTyping(null);
					}
				}, 300);
			}, 120);
			return () => clearTimeout(t);
		}
	}, [typing]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "flex items-center justify-center min-h-[70vh] mb-20",
			id: "home",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-3xl terminal-glow bg-black/80 rounded-lg overflow-hidden flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "terminal-header-bar px-4 py-2 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-error/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-secondary-fixed/50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 rounded-full bg-primary-fixed/50" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-code-sm text-outline-variant uppercase text-[10px] tracking-widest",
							children: "root@parrot  —  bash  —  80×24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "material-symbols-outlined text-outline-variant text-sm",
							children: "close"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 font-code-sm min-h-[360px] flex flex-col gap-[2px]",
					children: [lines.map((line, i) => {
						if (line.kind === "gap") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, i);
						if (line.kind === "out") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: line.color ?? "text-on-surface-variant",
							children: line.text
						}, i);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-secondary-fixed select-none",
									children: "root@parrot:~$"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary-fixed",
									children: line.text
								}),
								!line.done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-[7px] h-[15px] bg-primary-fixed animate-pulse inline-block" })
							]
						}, i);
					}), typing === null && lines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-secondary-fixed select-none",
							children: "root@parrot:~$"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-[7px] h-[15px] bg-primary-fixed animate-pulse inline-block" })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-20 scroll-mt-24",
			id: "system",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-headline-lg-mobile md:font-headline-lg text-primary-fixed glitch-text uppercase",
					children: "WHO AM I"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-outline-variant/30" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "terminal-glow bg-surface-container-lowest p-6 relative flex flex-col justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 right-0 p-2 text-[10px] text-outline-variant font-code-sm",
							children: "ID: 6cloudguy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary-fixed font-headline-md mb-4",
								children: "> PROFILE_DATA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-on-surface mb-6 leading-relaxed font-body-md text-sm",
								children: [
									"3rd year CS student obsessed with breaking things — the legal way. I got into security through CTFs and haven't looked back since. Currently building up my pentesting fundamentals, working toward my eJPT, and tinkered with IoT hardware on the side.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"When I'm not studying or hacking boxes on HackTheBox, I'm working on open-source tooling and writing about what I learn on the blog."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4 font-code-sm mb-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-primary-fixed pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-outline block uppercase text-[10px]",
											children: "Current Role"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary-fixed",
											children: "CS Student // Sec Enthusiast"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-secondary-fixed pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-outline block uppercase text-[10px]",
											children: "Focus"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary-fixed",
											children: "Offensive Security"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-tertiary-fixed-dim pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-outline block uppercase text-[10px]",
											children: "Base of Ops"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-tertiary-fixed-dim",
											children: "INDIA // [ENCRYPTED]"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l-2 border-outline-variant pl-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-outline block uppercase text-[10px]",
											children: "Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary-fixed animate-pulse",
											children: "● ONLINE"
										})]
									})
								]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "border border-primary-fixed text-primary-fixed px-4 py-2 font-code-sm text-[10px] uppercase tracking-widest hover:shadow-[0_0_15px_#39FF14] hover:bg-primary-fixed/10 transition-all active:scale-95 animate-flicker glitch-text",
								children: "[ EXECUTE: GET_CV.PDF ]"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-lg group min-h-[320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 absolute inset-0",
						alt: "Cybersecurity workstation lit by green and blue monitor glow",
						src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgIMUGLs5q4eEworArjde7lhMLU0UDna46hdpTqXIRbMi7ax_L-OTbhTMSf1F1WYyIgycwrubNgnnQJ7BUBwNOpL0CGXSSnEXKgYJbfF3rvaN3OnKh94goyvbXZJKhp29hq3lvK5xehUdXL782IckP8LD48BLjd0EjqH7fP2i3Zhn1YWUssg6IlPj9FfMbbqp9YwPkTo2GhX5FKQbu_ARcTBYJQV9cR9EcwcY62rALeV9pZbxR871IOzedHDb3snb0-556b08UGOZ7"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-code-sm text-primary-fixed",
							children: "EST_LATENCY: 14ms // LOCATION: [ENCRYPTED]"
						})
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mb-20",
			id: "stats",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-surface-container-lowest border border-outline-variant p-5 flex flex-col items-center justify-center text-center group hover:border-primary-fixed transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-headline-lg text-primary-fixed group-hover:drop-shadow-[0_0_10px_#39FF14] transition-all",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-code-sm text-secondary-fixed text-xs mt-1",
							children: s.unit
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-label-caps text-outline text-[9px] mt-2",
							children: s.label
						})
					]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-20 scroll-mt-24",
			id: "arsenal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-headline-lg-mobile md:font-headline-md text-primary-fixed glitch-text uppercase",
							children: "ARSENAL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-outline-variant/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-code-sm text-outline-variant text-[10px]",
							children: ["TOOLS_LOADED: ", SKILLS.reduce((a, s) => a + s.items.length, 0)]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-outline-variant bg-black p-6 font-code-sm text-primary-fixed mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-outline-variant",
							children: "root@parrot:~$ cat arsenal.conf"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: SKILLS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-x-6 gap-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-secondary-fixed w-24 shrink-0 uppercase",
									children: [
										"[",
										group.cat,
										"]"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary-fixed",
									children: group.items.join("  //  ")
								})]
							}, group.cat))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-outline-variant",
								children: "root@parrot:~$"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-2 h-4 bg-primary-fixed align-middle animate-pulse ml-1" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: SKILLS.flatMap((g) => g.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-code-sm text-xs border border-outline-variant/60 bg-surface-container-lowest text-outline-variant px-3 py-1 hover:border-primary-fixed hover:text-primary-fixed transition-all cursor-default",
						children: item
					}, item)))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mb-20 scroll-mt-24",
			id: "certs",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-headline-lg-mobile md:font-headline-md text-primary-fixed glitch-text uppercase",
							children: "CREDENTIALS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-outline-variant/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-code-sm text-outline-variant text-[10px]",
							children: "CLEARANCE REQUIRED"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: CERTIFICATIONS.map((cert) => {
						const accent = cert.accent === "primary" ? {
							text: "text-primary-fixed",
							border: "border-primary-fixed",
							bg: "bg-primary-fixed/10",
							glow: "hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]",
							badge: "bg-primary-fixed text-black"
						} : cert.accent === "secondary" ? {
							text: "text-secondary-fixed",
							border: "border-secondary-fixed",
							bg: "bg-secondary-fixed/10",
							glow: "hover:shadow-[0_0_20px_rgba(111,246,255,0.3)]",
							badge: "bg-secondary-fixed text-black"
						} : {
							text: "text-tertiary-fixed-dim",
							border: "border-tertiary-fixed-dim",
							bg: "bg-tertiary-fixed-dim/10",
							glow: "hover:shadow-[0_0_20px_rgba(255,179,178,0.3)]",
							badge: "bg-tertiary-fixed-dim text-black"
						};
						const statusColor = cert.status === "VERIFIED" ? "text-primary-fixed" : cert.status === "IN_PROGRESS" ? "text-secondary-fixed animate-pulse" : "text-outline";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative bg-surface-container-lowest border ${accent.border} p-6 flex flex-col gap-4 transition-all ${accent.glow} group`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 right-3 font-code-sm text-outline-variant text-[9px]",
									children: cert.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `${accent.badge} font-headline-md w-16 h-16 flex items-center justify-center shrink-0 font-bold text-sm tracking-tighter`,
										children: cert.badge
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `font-label-caps ${accent.text} text-[10px] mb-1`,
											children: cert.issuer
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-code-sm text-on-surface leading-tight",
											children: cert.name
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-px ${accent.bg} border-t ${accent.border} opacity-30` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between font-code-sm text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-outline",
										children: [cert.status === "IN_PROGRESS" ? "TARGET: " : "ISSUED: ", cert.year]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `${statusColor} font-label-caps`,
										children: [
											cert.status === "VERIFIED" && "● ",
											cert.status === "IN_PROGRESS" && "◌ ",
											cert.status === "EXPIRED" && "✕ ",
											cert.status
										]
									})]
								})
							]
						}, cert.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 border border-dashed border-outline-variant/40 p-4 flex items-center justify-center gap-3 text-outline-variant font-code-sm text-[11px] hover:border-outline hover:text-outline transition-all cursor-default",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined text-base",
						children: "add_circle"
					}), "MORE_CERTIFICATIONS LOADING…"]
				})
			]
		})
	] });
}
//#endregion
export { HomePage as component };
