/* =========================================================
   Countdown – live countdown timer or mystery teaser
   ========================================================= */
import { html, useState, useEffect } from "../lib.js";
import { CONFIG } from "../config.js";

const GLITCH_GLYPHS = ["??", "XX", "!!", "░░", "??", "--", "??"];

export function Countdown() {
  const [glitchIdx, setGlitchIdx] = useState(0);
  const [glitchTile, setGlitchTile] = useState(-1);
  const [now, setNow] = useState(Date.now());

  // Mystery glitch cycle when dates are not revealed
  useEffect(() => {
    if (CONFIG.datesRevealed) return;

    const interval = setInterval(() => {
      const tile = Math.floor(Math.random() * 4);
      const glyph = Math.floor(Math.random() * GLITCH_GLYPHS.length);
      setGlitchTile(tile);
      setGlitchIdx(glyph);

      const timeout = setTimeout(() => {
        setGlitchTile(-1);
      }, 250);

      return () => clearTimeout(timeout);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  // Live timer interval when dates are revealed
  useEffect(() => {
    if (!CONFIG.datesRevealed) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  // When dates are classified / hidden
  if (!CONFIG.datesRevealed) {
    const labels = ["DAYS", "HRS", "MIN", "SEC"];
    return html`
      <div className="count mystery" role="status" aria-label="Dates classified - countdown teaser">
        ${labels.map((l, i) => {
          const isGlitching = glitchTile === i;
          const val = isGlitching ? GLITCH_GLYPHS[glitchIdx] : "??";
          return html`
            <div key=${l} className=${"tile mystery" + (isGlitching ? " glitch" : "")}>
              <b>${val}</b>
              <span>${l}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  // When dates are officially revealed
  const target = new Date(CONFIG.start).getTime();
  const left = target - now;

  if (left <= 0) {
    return html`<div className="live">${CONFIG.liveText}</div>`;
  }

  const p = (n) => String(n).padStart(2, "0");
  const parts = [
    [Math.floor(left / 864e5), "DAYS"],
    [Math.floor(left / 36e5) % 24, "HRS"],
    [Math.floor(left / 6e4) % 60, "MIN"],
    [Math.floor(left / 1e3) % 60, "SEC"],
  ];

  return html`
    <div className="count" role="timer" aria-label="Time until Synchronize 5.0">
      ${parts.map(
        ([v, l]) => html`
          <div key=${l} className="tile">
            <b>${p(v)}</b>
            <span>${l}</span>
          </div>
        `
      )}
    </div>
  `;
}
