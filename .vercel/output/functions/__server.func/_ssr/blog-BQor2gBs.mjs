import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-CRnyHIrb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-BQor2gBs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ENTRIES = [
	{
		id: "#00102",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2026.5.12 // 04:22 GMT",
		title: "MEDIA HIJACK: NMAP TO HIJACKING TV",
		excerpt: "A writeup on how I started with an nmap on my Sony Bravia TV and ended up with a full media hijacking and DoS probabilities in a couple of minutes.",
		tags: [
			"COMINGSOON",
			"BUG",
			"IOT"
		],
		image: "/assets/pcs.png",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: ""
	},
	{
		id: "#00112",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2025.12.06 // 13:16 GMT",
		title: "INTERPRETER",
		excerpt: "A writeup on how I hacked the HTB box INTERPRETER.",
		tags: [
			"HTB",
			"LINUX",
			"LABS",
			"MEDIUM"
		],
		image: "/assets/interpreter.png",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://6cloudguy.github.io/posts/interpreter/"
	},
	{
		id: "#00103",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2026.5.12 // 04:22 GMT",
		title: "STRUTTED",
		excerpt: "A writeup on how I hacked the HTB box STRUTTED.",
		tags: [
			"HTB",
			"LINUX",
			"LABS",
			"MEDIUM"
		],
		image: "/assets/strutted.png",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://6cloudguy.github.io/posts/strutted/"
	},
	{
		id: "#00104",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2026.5.12 // 04:22 GMT",
		title: "SOULMATE",
		excerpt: "A writeup on how I hacked the HTB box SOULMATE.",
		tags: [
			"HTB",
			"LINUX",
			"LABS",
			"EASY"
		],
		image: "/assets/soulmate.png",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://medium.com/@6cloudguy/htb-soulmate-796e854e097b"
	},
	{
		id: "#00139",
		severity: "NOTES",
		severityColor: "border-bluish text-bluish",
		timestamp: "T-MINUS: 2025.08.03 // 11:15 GMT",
		title: "NOTES // FILE_TRANSFER",
		excerpt: "My note I made for the File-Transfer module from HTB Academy.",
		tags: ["HTB", "NOTES"],
		image: "/assets/filetransfer.webp",
		overlay: "bg-bluish/10",
		accent: "text-bluish",
		link: "https://6cloudguy.github.io/posts/filetransfer/"
	},
	{
		id: "#00106",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2025.10.1 // 09:16 GMT",
		title: "ARTIFICIAL",
		excerpt: "A writeup on how I hacked the HTB box ARTIFICIAL.",
		tags: [
			"HTB",
			"LINUX",
			"LABS",
			"EASY"
		],
		image: "/assets/artificial.png",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://6cloudguy.github.io/posts/artificial/"
	},
	{
		id: "#00110",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2025.11.16 // 03:28 GMT",
		title: "ME AND MY GIRLFRIEND 1",
		excerpt: "A writeup on how I hacked the VulnHub box Me And My Girlfriend.",
		tags: [
			"VULNHUB",
			"LINUX",
			"LABS",
			"EASY"
		],
		image: "/assets/vuln.webp",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://6cloudguy.github.io/posts/meandmygf1/"
	},
	{
		id: "#00112",
		severity: "WRITEUP",
		severityColor: "border-redish text-redish",
		timestamp: "T-MINUS: 2025.12.06 // 13:16 GMT",
		title: "EDITOR",
		excerpt: "A writeup on how I hacked the HTB box EDITOR.",
		tags: [
			"HTB",
			"LINUX",
			"LABS",
			"EASY"
		],
		image: "/assets/editor.png",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://6cloudguy.github.io/posts/editor/"
	},
	{
		id: "#00134",
		severity: "INFO",
		severityColor: "border-grey text-grey",
		timestamp: "T-MINUS: 2023.09.05 // 22:50 GMT",
		title: "JAVASCRIPT DEOBFUSCATION",
		excerpt: "My note I made for the HTB Academy module 'JS OBFUSCATION'",
		tags: ["NOTES", "HTB"],
		image: "/assets/obfuscation.webp",
		overlay: "bg-primary-fixed/10",
		accent: "text-primary-fixed",
		link: "https://6cloudguy.github.io/posts/jsdeobfuscation/"
	}
];
var tagCounts = ENTRIES.flatMap((e) => e.tags).reduce((acc, tag) => {
	acc[tag] = (acc[tag] || 0) + 1;
	return acc;
}, {});
var CATEGORIES = Object.entries(tagCounts).map(([tag, count]) => ({
	name: tag.replace("#", ""),
	tag,
	count
})).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
function BlogPage() {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(null);
	const filteredEntries = ENTRIES.filter((e) => {
		if (selectedCategory && !e.tags.includes(selectedCategory)) return false;
		const query = searchQuery.toLowerCase().trim();
		if (!query) return true;
		return e.title.toLowerCase().includes(query) || e.excerpt.toLowerCase().includes(query) || e.id.toLowerCase().includes(query) || e.tags.some((t) => t.toLowerCase().includes(query));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-12 border-l-4 border-primary-fixed pl-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary-fixed font-code-sm",
					children: "[ SYSTEM_STATUS: OPERATIONAL ]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-outline-variant" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-headline-lg-mobile md:font-headline-lg text-on-surface uppercase tracking-tighter",
				children: ["BLOG & LOGS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-3 h-7 bg-primary-fixed align-middle ml-2 animate-pulse" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-outline font-body-md mt-2 max-w-2xl",
				children: "Unfiltered chronolog of operational maneuvers, vulnerability research, and digital forensic findings. Documented for personal review and recruitment verification."
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid grid-cols-1 lg:grid-cols-12 gap-gutter",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-8 space-y-6",
			children: filteredEntries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-12 border border-dashed border-outline-variant text-center font-code-sm text-outline",
				children: "> NO ENTRIES MATCHING REQUEST SYSTEM PARAMETERS."
			}) : filteredEntries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "relative group border border-outline-variant bg-surface-container-low hover:bg-surface-container transition-all overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full md:w-48 h-48 md:h-auto relative shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500",
							src: e.image,
							alt: e.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 ${e.overlay} mix-blend-overlay` })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 flex flex-col justify-between flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-start mb-4 gap-2 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-label-caps text-outline flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: e.accent,
											children: e.id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1 h-1 bg-outline rounded-full" }),
										e.timestamp
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `px-2 py-0.5 border ${e.severityColor} text-[10px] font-bold font-code-sm uppercase tracking-widest`,
									children: [
										"[ ",
										e.severity,
										" ]"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: `font-headline-md text-on-surface mb-3 group-hover:${e.accent} transition-colors`,
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-outline font-body-md line-clamp-2 mb-6",
								children: e.excerpt
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: e.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-code-sm text-secondary-fixed bg-secondary-fixed/10 px-2 py-1 border border-secondary-fixed/20",
									children: t
								}, t))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-label-caps text-primary-fixed hover:underline",
								href: e.link,
								target: "blank",
								children: "[ READ_MORE ]"
							})]
						})]
					})]
				})
			}, e.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-4 space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 border border-outline-variant bg-surface-container-highest/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-label-caps text-primary-fixed mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined text-sm",
						children: "search"
					}), "QUERY_DATABASE"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-3 top-1/2 -translate-y-1/2 text-primary-fixed font-code-sm",
						children: "$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "w-full bg-black border border-outline-variant text-primary-fixed font-code-sm pl-8 py-2 focus:border-primary-fixed outline-none placeholder:text-outline-variant",
						placeholder: "search_logs...",
						type: "text",
						value: searchQuery,
						onChange: (e) => setSearchQuery(e.target.value)
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6 border border-outline-variant bg-black",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-label-caps text-secondary-fixed mb-6 border-b border-outline-variant pb-2 flex justify-between items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NODE_CATEGORIES" }), selectedCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSelectedCategory(null),
						className: "text-[9px] text-outline hover:text-secondary-fixed font-code-sm border border-outline/30 px-1 py-0.5 cursor-pointer",
						children: "[ RESET ]"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: CATEGORIES.map(({ name, tag, count }) => {
						const isSelected = selectedCategory === tag;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							onClick: () => setSelectedCategory(isSelected ? null : tag),
							className: "flex justify-between items-center group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `font-code-sm transition-colors flex items-center gap-2 ${isSelected ? "text-primary-fixed font-bold" : "text-outline group-hover:text-on-surface"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary-fixed",
										children: isSelected ? "●" : "->"
									}),
									" #",
									name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-code-sm text-outline-variant text-[10px]",
								children: [
									"[ ",
									String(count).padStart(2, "0"),
									" ]"
								]
							})]
						}, tag);
					})
				})]
			})]
		})]
	})] });
}
//#endregion
export { BlogPage as component };
