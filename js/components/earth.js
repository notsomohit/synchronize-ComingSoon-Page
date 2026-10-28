/* =========================================================
   Earth – procedural pixel-sphere map renderer
   ========================================================= */
import { html, useMemo } from "../lib.js";
import { SPHERE, ROADS } from "../pixel-data.js";

function makeEarth(vw) {
  const R = Math.max(300, vw * SPHERE.size);
  const cx = vw / 2;
  const cy = SPHERE.top + R;
  const LIM = (Math.PI * R) / 2 * 0.97;

  const sph = (u, v) => {
    const p = Math.hypot(u, v);
    if (p > LIM) return null;
    const k = p ? (R * Math.sin(p / R)) / p : 1;
    return [cx + u * k, cy - v * k];
  };

  const vp = R * Math.asin(Math.max(-1, Math.min(1, (cy - SPHERE.py) / R)));
  const at = (du, dv) => sph(du, vp + dv);
  const pts = (a) =>
    a.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");

  const road = (path, w, color, key) => {
    const S = [];
    const steps = path.length > 10 ? 1 : 20;
    for (let i = 0; i < path.length - 1; i++)
      for (let t = 0; t < steps; t++)
        S.push([
          path[i][0] + ((path[i + 1][0] - path[i][0]) * t) / steps,
          path[i][1] + ((path[i + 1][1] - path[i][1]) * t) / steps,
        ]);
    S.push(path[path.length - 1]);

    const L = [];
    const B = [];
    S.forEach((p, i) => {
      const q = S[Math.min(i + 1, S.length - 1)];
      const o = S[Math.max(i - 1, 0)];
      const dx = q[0] - o[0];
      const dy = q[1] - o[1];
      const n = Math.hypot(dx, dy) || 1;
      const nx = (-dy / n) * (w / 2);
      const ny = (dx / n) * (w / 2);
      const a = at(p[0] + nx, p[1] + ny);
      const b = at(p[0] - nx, p[1] - ny);
      if (a && b) { L.push(a); B.push(b); }
    });

    return L.length < 2
      ? null
      : html`<polygon
          key=${key}
          points=${pts(L.concat(B.reverse()))}
          fill=${color}
        />`;
  };

  // Procedural grid cells
  let sd = 7;
  const r = () => (sd = (sd * 9301 + 49297) % 233280) / 233280;
  const shades = ["#16224f", "#1c2b63", "#223273", "#131d45"];
  const cells = [];
  for (let iv = -14; iv < 24; iv++)
    for (let iu = -26; iu < 26; iu++) {
      const skip = r() < 0.13;
      const shade = shades[Math.floor(r() * 4)];
      const u0 = iu * 78 + 7, u1 = u0 + 64;
      const v0 = iv * 78 + 7, v1 = v0 + 64;
      const q = [at(u0, v0), at(u1, v0), at(u1, v1), at(u0, v1)];
      if (skip || q.some((x) => !x)) continue;
      const xs = q.map((x) => x[0]);
      const ys = q.map((x) => x[1]);
      if (Math.max(...xs) < -20 || Math.min(...xs) > vw + 20 || Math.min(...ys) > 940)
        continue;
      cells.push(
        html`<polygon key=${iu + "," + iv} points=${pts(q)} fill=${shade} />`
      );
    }

  const campus = pts(
    [[-130, -70], [130, -70], [130, 70], [-130, 70]].map((c) => at(c[0], c[1]))
  );

  return {
    R, cx, cy, cells,
    roads: ROADS.map((d, i) => road(d[0], d[1], d[2], i)),
    campus,
  };
}

export function Earth({ vw }) {
  const q = Math.max(300, Math.round(vw / 8) * 8);
  const E = useMemo(() => makeEarth(q), [q]);

  return html`
    <svg
      className="earth"
      viewBox=${"0 0 " + q + " 900"}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="earthClip">
          <circle cx=${E.cx} cy=${E.cy} r=${E.R} />
        </clipPath>
        <radialGradient
          id="atmD"
          gradientUnits="userSpaceOnUse"
          cx=${E.cx} cy=${E.cy} r=${E.R}
        >
          <stop offset="0.72" stopColor="rgb(150,225,255)" stopOpacity="0" />
          <stop offset="1" stopColor="rgb(150,225,255)" stopOpacity="0.95" />
        </radialGradient>
        <radialGradient
          id="atmN"
          gradientUnits="userSpaceOnUse"
          cx=${E.cx} cy=${E.cy} r=${E.R}
        >
          <stop offset="0.72" stopColor="rgb(60,80,230)" stopOpacity="0" />
          <stop offset="1" stopColor="rgb(60,80,230)" stopOpacity="0.95" />
        </radialGradient>
      </defs>

      <circle cx=${E.cx} cy=${E.cy} r=${E.R} fill="#0b1330" />
      <g clipPath="url(#earthClip)">
        ${E.cells}
        <polygon
          points=${E.campus}
          fill="#145a3f"
          stroke="#1f8a5f"
          strokeWidth="3"
        />
        ${E.roads}
        <circle className="hzd" cx=${E.cx} cy=${E.cy} r=${E.R} fill="url(#atmD)" />
        <circle className="hzn" cx=${E.cx} cy=${E.cy} r=${E.R} fill="url(#atmN)" />
      </g>
      <circle
        className="hzd"
        cx=${E.cx} cy=${E.cy} r=${E.R}
        fill="none" stroke="rgb(170,230,255)" strokeWidth="7"
        style=${{ filter: "blur(4px)" }}
      />
      <circle
        className="hzn"
        cx=${E.cx} cy=${E.cy} r=${E.R}
        fill="none" stroke="rgb(90,120,255)" strokeWidth="7"
        style=${{ filter: "blur(4px)" }}
      />
    </svg>
  `;
}
