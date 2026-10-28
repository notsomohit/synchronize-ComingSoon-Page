/* =========================================================
   Sky – gradient layers, stars, sun/moon, clouds & flocks
   ========================================================= */
import { html, useMemo } from "../lib.js";
import { Px, Rects } from "./px.js";
import {
  CLOUD, BIRD_A, BIRD_M, BIRD_B, SUN, MOON,
  CLOUDS, FLOCKS, FORM,
} from "../pixel-data.js";

const cloudColors = { w: "var(--cw)", s: "var(--cs)" };

/* ---- Individual flock component ---- */
const Flock = ({ top, dur, delay, x, s, n }) => html`
  <div
    className="bird"
    style=${{
      top: top + "%",
      "--w": `calc(clamp(30px,3.8vw,52px) * ${s})`,
      animationDuration: dur + "s",
      animationDelay: delay + "s",
      "--x": x + "vw",
    }}
  >
    ${FORM.slice(0, n).map(
      ([dx, dy], i) => html`
        <div
          key=${i}
          className="mate"
          style=${{
            left: `calc(var(--w) * ${dx})`,
            top: `calc(var(--w) * ${dy * 0.55})`,
            animationDelay: i * -0.4 + "s",
          }}
        >
          <svg
            viewBox="0 0 11 5"
            shapeRendering="crispEdges"
            style=${{ "--fd": i * -0.17 + "s" }}
          >
            <g className="fa"><${Rects} rows=${BIRD_A} /></g>
            <g className="fm"><${Rects} rows=${BIRD_M} /></g>
            <g className="fb"><${Rects} rows=${BIRD_B} /></g>
          </svg>
        </div>
      `
    )}
  </div>
`;

/* ---- Main Sky component ---- */
export function Sky() {
  const stars = useMemo(() => {
    let s = 11;
    const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    return Array.from({ length: 46 }, () => ({
      x: r() * 100,
      y: r() * 62,
      z: r() < 0.2 ? 4 : 2,
      d: r() * 4,
    }));
  }, []);

  return html`
    <div className="sky" aria-hidden="true">
      <div className="layer day"></div>
      <div className="layer night"></div>

      <div className="stars">
        ${stars.map(
          (s, i) => html`
            <i
              key=${i}
              style=${{
                left: s.x + "%",
                top: s.y + "%",
                width: s.z,
                height: s.z,
                animationDelay: s.d + "s",
              }}
            ></i>
          `
        )}
        <i className="shoot"></i>
      </div>

      <div className="orb sun">
        <${Px} rows=${SUN} colors=${{ y: "#ffd23f" }} />
      </div>
      <div className="orb moon">
        <${Px} rows=${MOON} colors=${{ m: "#fff6c8" }} />
      </div>

      ${CLOUDS.map(
        (c, i) => html`
          <div
            key=${i}
            className="cloud"
            style=${{
              top: c[0] + "%",
              width: c[1] + "vw",
              animationDuration: c[2] + "s",
              animationDelay: c[3] + "s",
              "--x": c[4] + "vw",
            }}
          >
            <${Px} rows=${CLOUD} colors=${cloudColors} />
          </div>
        `
      )}

      <div className="birds">
        ${FLOCKS.map(
          (b, i) => html`
            <${Flock}
              key=${i}
              top=${b[0]}
              dur=${b[1]}
              delay=${b[2]}
              x=${b[3]}
              s=${b[4]}
              n=${b[5]}
            />
          `
        )}
      </div>
    </div>
  `;
}
