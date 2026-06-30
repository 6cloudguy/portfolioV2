import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-CRnyHIrb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MatrixShader() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		if (!gl) return;
		const syncSize = () => {
			const w = canvas.clientWidth || 1280;
			const h = canvas.clientHeight || 720;
			if (canvas.width !== w || canvas.height !== h) {
				canvas.width = w;
				canvas.height = h;
			}
		};
		const ro = new ResizeObserver(syncSize);
		ro.observe(canvas);
		syncSize();
		const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main(){ v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position,0.0,1.0); }`;
		const fs = `precision highp float;
varying vec2 v_texCoord;
uniform float u_time;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float getGlyph(vec2 uv, float cellRand, float charTime) {
  vec2 localUV = fract(uv);
  vec2 pixel = floor(localUV * vec2(3.0, 5.0));
  float shapeRand = hash(floor(uv) + vec2(charTime, charTime * 1.3));
  float pixelRand = hash(pixel + vec2(shapeRand, -shapeRand));
  if (localUV.x < 0.15 || localUV.x > 0.85 || localUV.y < 0.1 || localUV.y > 0.9) {
    return 0.0;
  }
  return step(0.45, pixelRand);
}

void main() {
  vec2 uv = v_texCoord;
  
  float columns = 60.0;
  float col = floor(uv.x * columns);
  
  float speed = 0.2 + 0.25 * hash(vec2(col, 31.2));
  float offset = hash(vec2(col, 89.4)) * 30.0;
  
  float timeOffset = u_time * speed + offset;
  float dropY = fract(uv.y + timeOffset);
  
  float trail = pow(1.0 - dropY, 4.0);
  
  float cellRand = hash(vec2(col, floor(uv.y * 30.0)));
  float charTime = floor(u_time * (6.0 + 8.0 * cellRand));
  
  float glyph = getGlyph(uv * vec2(columns, 30.0), cellRand, charTime);
  
  vec3 greenColor = vec3(0.2, 0.95, 0.3);
  vec3 whiteColor = vec3(0.85, 1.0, 0.9);
  
  float head = smoothstep(0.06, 0.0, dropY);
  
  vec3 finalColor = mix(greenColor * glyph, whiteColor * glyph, head * 0.8) * trail;
  finalColor += greenColor * trail * 0.12;
  
  vec3 bg = vec3(0.05, 0.06, 0.05);
  
  gl_FragColor = vec4(mix(bg, finalColor, trail), 1.0);
}`;
		const cs = (type, src) => {
			const s = gl.createShader(type);
			gl.shaderSource(s, src);
			gl.compileShader(s);
			if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.error("Shader compile error:", gl.getShaderInfoLog(s));
			return s;
		};
		const prog = gl.createProgram();
		gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
		gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
		gl.linkProgram(prog);
		gl.useProgram(prog);
		const buf = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buf);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			1,
			1
		]), gl.STATIC_DRAW);
		const pos = gl.getAttribLocation(prog, "a_position");
		gl.enableVertexAttribArray(pos);
		gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
		const uTime = gl.getUniformLocation(prog, "u_time");
		let raf = 0;
		const render = (t) => {
			gl.viewport(0, 0, canvas.width, canvas.height);
			if (uTime) gl.uniform1f(uTime, t * .001);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
			raf = requestAnimationFrame(render);
		};
		raf = requestAnimationFrame(render);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 w-full h-full -z-10 pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			style: {
				display: "block",
				width: "100%",
				height: "100%"
			}
		})
	});
}
var topNav = [
	{
		label: "HOME",
		to: "/"
	},
	{
		label: "PROJECTS",
		to: "/projects"
	},
	{
		label: "BLOG",
		to: "/blog"
	},
	{
		label: "CONTACT",
		to: "/contact"
	}
];
function SiteLayout({ children }) {
	const { pathname } = useLocation();
	const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen text-on-background font-body-md bg-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatrixShader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scanline-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 border-b border-outline-variant bg-surface-dim/80 backdrop-blur-xl shadow-[0_1px_10px_rgba(42,229,0,0.2)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-headline-md text-primary-fixed drop-shadow-[0_0_8px_rgba(42,229,0,0.5)] tracking-tighter",
					children: "PRANAV P ~/"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2",
					children: topNav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: isActive(n.to) ? "text-primary-fixed border-b-2 border-primary-fixed pb-1 font-label-caps" : "text-outline hover:text-primary-fixed transition-colors font-label-caps",
						children: n.label
					}, n.to))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 pt-24 pb-24 px-margin-mobile md:px-margin-desktop min-h-screen",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "fixed bottom-0 w-full z-40 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2 bg-black/90 border-t border-outline-variant shadow-[0_-1px_10px_rgba(255,179,178,0.1)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-code-sm text-tertiary-fixed-dim flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-pulse",
							children: "●"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "[SYSTEM_READY] // UPTIME: 99.9% // IP: 127.0.0.1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sm:hidden",
							children: "[READY]"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block font-label-caps text-tertiary-fixed-dim opacity-50",
					children: "© 2026 PRANAV P"
				})]
			})
		]
	});
}
//#endregion
export { SiteLayout as t };
