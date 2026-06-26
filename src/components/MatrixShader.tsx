import { useEffect, useRef } from "react";

export function MatrixShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
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

    const cs = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      // Log compilation error if any for debugging
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(s));
      }
      return s;
    };
    
    const prog = gl.createProgram()!;
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
    const uTime = gl.getUniformLocation(prog, "u_time");

    let raf = 0;
    const render = (t: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
