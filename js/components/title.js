/* =========================================================
   Title – animated letter-by-letter heading
   ========================================================= */
import { html } from "../lib.js";

function Letters({ text, base }) {
  return [...text].map((ch, i) => {
    const r = ((i * 7919 + base) % 13) / 13 - 0.5;
    const q = ((i * 104729 + base) % 11) / 11 - 0.5;
    return html`
      <span
        key=${i}
        className="ch"
        aria-hidden="true"
        style=${{
          "--dx": r * 9 + "em",
          "--dy": q * 6 + "em",
          "--r": r * 160 + "deg",
          "--d": i * 70 + base + "ms",
          "--tilt": (i % 2 ? -2.2 : 2.2) + "deg",
          "--lift": ((i % 3) - 1) * 0.03 + "em",
        }}
      >
        ${ch}
      </span>
    `;
  });
}

export const Title = () => html`
  <h1 aria-label="Synchronize 5.0">
    <span className="t1"><${Letters} text="Synchronize" base=${0} /></span>
    <span className="t2"><${Letters} text="5.0" base=${900} /></span>
  </h1>
`;
