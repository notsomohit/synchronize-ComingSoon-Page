/* =========================================================
   App – Root component that composes all sections
   ========================================================= */
import { html, useState, useEffect, Fragment } from "./lib.js";
import { CONFIG } from "./config.js";
import { useTheme } from "./hooks/use-theme.js";
import { Sky } from "./components/sky.js";
import { Toggle } from "./components/toggle.js";
import { Title } from "./components/title.js";
import { Countdown } from "./components/countdown.js";
import { Ticker } from "./components/ticker.js";
import { MapSection } from "./components/map-section.js";

export function App() {
  const [theme, flip] = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const date = new Date(CONFIG.start)
    .toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    })
    .toUpperCase();

  return html`
    <${Fragment}>
      <${Sky} />
      <${Toggle} theme=${theme} onClick=${flip} />

      <main>
        <div className="by">
          <b>+</b>${CONFIG.org} presents<b>+</b>
        </div>
        <${Title} />
        <p className="tag">${CONFIG.tagline}</p>

        <div className="pill when">
          <div>${date}<em>|</em>${CONFIG.time}</div>
        </div>

        <${Countdown} />

        <a
          href="ambassador.html"
          className="pill ca-redirect-pill"
          aria-label="Become a Campus Ambassador"
        >
          <div>
            <b>BECOME A CAMPUS AMBASSADOR</b>
            <em>➔</em>
          </div>
        </a>

        <div className="tickwrap"><${Ticker} /></div>

        <button
          className=${"hint" + (scrolled ? " gone" : "")}
          onClick=${() =>
            document.getElementById("map").scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to the venue map"
        >
          <span>SCROLL</span><i></i>
        </button>
      </main>

      <${MapSection} />
    <//>
  `;
}
