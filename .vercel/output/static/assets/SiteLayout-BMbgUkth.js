import{a as e,i as t,n,o as r,r as i,s as a,t as o}from"./index-Da6xL0wy.js";function s(e){let n=t();return i(n.stores.location,o(e,n))}var c=a(r(),1),l=e();function u(){let e=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let t=e.current;if(!t)return;let n=t.getContext(`webgl`)||t.getContext(`experimental-webgl`);if(!n)return;let r=()=>{let e=t.clientWidth||1280,n=t.clientHeight||720;(t.width!==e||t.height!==n)&&(t.width=e,t.height=n)},i=new ResizeObserver(r);i.observe(t),r();let a=(e,t)=>{let r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)||console.error(`Shader compile error:`,n.getShaderInfoLog(r)),r},o=n.createProgram();n.attachShader(o,a(n.VERTEX_SHADER,`attribute vec2 a_position;
varying vec2 v_texCoord;
void main(){ v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position,0.0,1.0); }`)),n.attachShader(o,a(n.FRAGMENT_SHADER,`precision highp float;
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
}`)),n.linkProgram(o),n.useProgram(o);let s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW);let c=n.getAttribLocation(o,`a_position`);n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,0,0);let l=n.getUniformLocation(o,`u_time`),u=0,d=e=>{n.viewport(0,0,t.width,t.height),l&&n.uniform1f(l,e*.001),n.drawArrays(n.TRIANGLE_STRIP,0,4),u=requestAnimationFrame(d)};return u=requestAnimationFrame(d),()=>{cancelAnimationFrame(u),i.disconnect()}},[]),(0,l.jsx)(`div`,{className:`fixed inset-0 w-full h-full -z-10 pointer-events-none`,children:(0,l.jsx)(`canvas`,{ref:e,style:{display:`block`,width:`100%`,height:`100%`}})})}var d=[{label:`HOME`,to:`/`},{label:`PROJECTS`,to:`/projects`},{label:`BLOG`,to:`/blog`},{label:`CONTACT`,to:`/contact`}];function f({children:e}){let{pathname:t}=s(),r=e=>e===`/`?t===`/`:t.startsWith(e);return(0,l.jsxs)(`div`,{className:`min-h-screen text-on-background font-body-md bg-transparent`,children:[(0,l.jsx)(u,{}),(0,l.jsx)(`div`,{className:`scanline-overlay`}),(0,l.jsxs)(`header`,{className:`fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 border-b border-outline-variant bg-surface-dim/80 backdrop-blur-xl shadow-[0_1px_10px_rgba(42,229,0,0.2)]`,children:[(0,l.jsx)(n,{to:`/`,className:`font-headline-md text-primary-fixed drop-shadow-[0_0_8px_rgba(42,229,0,0.5)] tracking-tighter`,children:`PRANAV P ~/`}),(0,l.jsx)(`nav`,{className:`hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2`,children:d.map(e=>(0,l.jsx)(n,{to:e.to,className:r(e.to)?`text-primary-fixed border-b-2 border-primary-fixed pb-1 font-label-caps`:`text-outline hover:text-primary-fixed transition-colors font-label-caps`,children:e.label},e.to))})]}),(0,l.jsx)(`main`,{className:`relative z-10 pt-24 pb-24 px-margin-mobile md:px-margin-desktop min-h-screen`,children:e}),(0,l.jsxs)(`footer`,{className:`fixed bottom-0 w-full z-40 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-2 bg-black/90 border-t border-outline-variant shadow-[0_-1px_10px_rgba(255,179,178,0.1)]`,children:[(0,l.jsxs)(`div`,{className:`font-code-sm text-tertiary-fixed-dim flex items-center gap-2`,children:[(0,l.jsx)(`span`,{className:`animate-pulse`,children:`●`}),(0,l.jsx)(`span`,{className:`hidden sm:inline`,children:`[SYSTEM_READY] // UPTIME: 99.9% // IP: 127.0.0.1`}),(0,l.jsx)(`span`,{className:`sm:hidden`,children:`[READY]`})]}),(0,l.jsx)(`div`,{className:`hidden lg:block font-label-caps text-tertiary-fixed-dim opacity-50`,children:`© 2026 PRANAV P`})]})]})}export{f as t};