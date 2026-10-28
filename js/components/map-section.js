/* =========================================================
   MapSection – venue map with pin, card & address bar
   ========================================================= */
import { html, useState, useEffect, useRef } from "../lib.js";
import { Px } from "./px.js";
import { Earth } from "./earth.js";
import { PIN } from "../pixel-data.js";
import { CONFIG } from "../config.js";

export function MapSection() {
  const link = CONFIG.mapsUrl;
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [vw, setVw] = useState(1200);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const f = () => setVw((900 * el.clientWidth) / Math.max(1, el.clientHeight));
    f();
    const ro = new ResizeObserver(f);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return html`
    <section className="map" id="map" ref=${ref} aria-label="Venue location">
      <${Earth} vw=${vw} />

      <span className="lbl l">VENUE<br />REVEALED</span>
      <span className="lbl r">FIND US<br />HERE</span>

      <div className=${"pinwrap" + (open ? " open" : "")}>
        <button
          className="pinbtn"
          onClick=${() => setOpen((o) => !o)}
          aria-expanded=${open}
          aria-label=${CONFIG.college + " location"}
        >
          <${Px}
            rows=${PIN}
            colors=${{ k: "#0b1330", r: "#e8232b", w: "#ffd6d6", b: "#2fb3ff" }}
          />
        </button>
        <i className="ring"></i>
        <div className="card">
          <div className="pill">
            <div>
              <b>${CONFIG.college}</b><br />${CONFIG.address}<br />
              <a href=${link} target="_blank" rel="noopener">TAKE ME THERE &#9654;</a>
            </div>
          </div>
        </div>
      </div>

      <div className="addr">
        <div className="pill">
          <div>
            <i className="arrow"></i>
            <div>
              <p>${CONFIG.college}</p>
              <p>${CONFIG.address}</p>
              <a href=${link} target="_blank" rel="noopener">OPEN IN MAPS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
