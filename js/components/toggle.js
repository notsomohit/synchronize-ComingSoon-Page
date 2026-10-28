/* =========================================================
   Toggle – Day / Night theme switch button
   ========================================================= */
import { html } from "../lib.js";
import { Px } from "./px.js";
import { SUN, MOON } from "../pixel-data.js";

export function Toggle({ theme, onClick }) {
  const dark = theme === "dark";
  return html`
    <button
      className=${"toggle " + theme}
      onClick=${onClick}
      aria-pressed=${dark}
      aria-label=${dark ? "Switch to day mode" : "Switch to night mode"}
    >
      <span className="knob"></span>
      <span className="cell">
        <${Px} rows=${SUN} colors=${{ y: "#ffd23f" }} />
      </span>
      <span className="cell">
        <${Px} rows=${MOON} colors=${{ m: "#fff6c8" }} />
      </span>
    </button>
  `;
}
