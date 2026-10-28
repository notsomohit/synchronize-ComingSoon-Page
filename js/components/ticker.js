/* =========================================================
   Ticker – infinite scrolling marquee banner
   ========================================================= */
import { html } from "../lib.js";
import { CONFIG } from "../config.js";

export const Ticker = () => {
  const t =
    "COMING SOON  +  SYNCHRONIZE 5.0  +  " +
    CONFIG.college.toUpperCase() +
    "  +  ";

  return html`
    <div className="ticker" aria-hidden="true">
      <div className="track">
        ${[0, 1, 2, 3].map(
          (i) => html`<span key=${i}>${t.repeat(3)}</span>`
        )}
      </div>
    </div>
  `;
};
