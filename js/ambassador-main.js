/* =========================================================
   ambassador-main.js – Standalone Campus Ambassador Entry
   ========================================================= */
import { html, Fragment } from "./lib.js";
import { CONFIG } from "./config.js?v=3";
import { useTheme } from "./hooks/use-theme.js";
import { Sky } from "./components/sky.js";
import { Toggle } from "./components/toggle.js";
import { Ticker } from "./components/ticker.js";
import { CampusAmbassador } from "./components/ambassador.js?v=3";

export function AmbassadorApp() {
  const [theme, flip] = useTheme();

  const tickerText =
    "BECOME A CAMPUS AMBASSADOR  +  STEP INTO THE UPSIDE DOWN  +  SYNCHRONIZE 5.0  +  " +
    CONFIG.college.toUpperCase() +
    "  +  ";

  return html`
    <${Fragment}>
      <${Sky} />
      <${Toggle} theme=${theme} onClick=${flip} />

      <main className="ambassador-standalone">
        <${CampusAmbassador} isStandalone=${true} />
        <div className="tickwrap ca-tickwrap">
          <${Ticker} text=${tickerText} />
        </div>
      </main>

      <footer className="ca-footer">
        <p>
          <b>+</b> ${CONFIG.org} <b>+</b> ${CONFIG.college} • ${CONFIG.address} <b>+</b>
        </p>
        <a href="index.html" className="ca-footer-home-link">
          ◄ RETURN TO SYNCHRONIZE 5.0 HOME
        </a>
      </footer>
    <//>
  `;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  html`<${AmbassadorApp} />`
);
