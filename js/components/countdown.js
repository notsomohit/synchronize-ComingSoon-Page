/* =========================================================
   Countdown – live countdown timer to the event
   ========================================================= */
import { html, useState, useEffect } from "../lib.js";
import { CONFIG } from "../config.js";

export function Countdown() {
  const target = new Date(CONFIG.start).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

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
