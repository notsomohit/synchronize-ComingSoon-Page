/* =========================================================
   CampusAmbassador – Campus Ambassador Program Component
   Same retro 8-bit / Upside Down styling as Synchronize 5.0
   ========================================================= */
import { html } from "../lib.js";
import { CONFIG } from "../config.js";
import { Px } from "./px.js";
import {
  WALKIE,
  MEGAPHONE,
  GAMEPAD,
  NETWORK,
  CERTIFICATE,
  TROPHY,
  STAR_BADGE,
} from "../pixel-data.js";

const walkieColors = { k: "#0b1330", r: "#e8232b", y: "#c6ff1a" };
const megaphoneColors = { k: "#0b1330", y: "#c6ff1a", w: "#ffffff" };
const gamepadColors = { k: "#0b1330", b: "#2fb3ff", w: "#ffffff" };
const networkColors = { k: "#0b1330", b: "#2fb3ff", y: "#c6ff1a", g: "#5f9a00" };
const certColors = { k: "#0b1330", w: "#ffffff", y: "#c6ff1a" };
const trophyColors = { k: "#0b1330", y: "#ffd23f", w: "#ffffff" };
const starColors = { k: "#0b1330", y: "#c6ff1a" };

const DO_ITEMS = [
  {
    num: "01",
    tag: "MISSION",
    text: "Promote our tech fest across your campus.",
    icon: MEGAPHONE,
    colors: megaphoneColors,
  },
  {
    num: "02",
    tag: "CONNECT",
    text: "Connect students with exciting technical and cultural events.",
    icon: GAMEPAD,
    colors: gamepadColors,
  },
  {
    num: "03",
    tag: "LEAD",
    text: "Build your network and develop leadership skills.",
    icon: NETWORK,
    colors: networkColors,
  },
  {
    num: "04",
    tag: "COMMUNITY",
    text: "Be a part of an enthusiastic community of campus ambassadors.",
    icon: STAR_BADGE,
    colors: starColors,
  },
];

const GET_ITEMS = [
  {
    num: "01",
    tag: "CREDENTIAL",
    text: "Certificate of Campus Ambassador.",
    icon: CERTIFICATE,
    colors: certColors,
  },
  {
    num: "02",
    tag: "LOOT",
    text: "Exclusive recognition and rewards for top performers.",
    icon: TROPHY,
    colors: trophyColors,
  },
  {
    num: "03",
    tag: "NETWORK",
    text: "Networking opportunities with fellow ambassadors.",
    icon: NETWORK,
    colors: networkColors,
  },
  {
    num: "04",
    tag: "REPRESENT",
    text: "A chance to represent your college at one of the most exciting tech fests.",
    icon: STAR_BADGE,
    colors: starColors,
  },
];

export function CampusAmbassador({ isStandalone = false } = {}) {
  const formUrl = CONFIG.ambassadorFormUrl || "https://forms.google.com/";

  return html`
    <div className="ca-container">
      ${isStandalone &&
      html`
        <nav className="ca-top-nav">
          <a href="index.html" className="ca-back-link" title="Return to home page">
            ◄ BACK TO FEST
          </a>
          <div className="by">
            <b>+</b>${CONFIG.org} presents<b>+</b>
          </div>
        </nav>
      `}

      <!-- Program Title Badge -->
      <div className="pill ca-title-pill">
        <div>
          <b>BECOME A CAMPUS AMBASSADOR</b>
        </div>
      </div>

      <!-- The Upside Down Callout -->
      <div className="ca-upside-pill">
        <div>
          <span className="ca-pulse-icon">
            <${Px} rows=${WALKIE} colors=${walkieColors} />
          </span>
          <b>THE UPSIDE DOWN NEEDS YOU.</b>
        </div>
      </div>

      <!-- Tagline & Description -->
      <p className="ca-tagline">Be the face of our tech fest at your campus.</p>

      <div className="ca-intro-pill pill">
        <div>
          <p className="ca-intro-text">
            Join our Campus Ambassador Program and become a part of something extraordinary.
            Connect with fellow students, spread the excitement, and bring the energy of
            our tech fest to your college.
          </p>
        </div>
      </div>

      <!-- Section: WHAT YOU'LL DO -->
      <section className="ca-section-block" aria-labelledby="ca-do-title">
        <div className="ca-block-header">
          <span className="ca-section-bullet">►</span>
          <h2 id="ca-do-title" className="ca-section-title">
            WHAT YOU'LL DO
          </h2>
          <span className="ca-section-bullet">◄</span>
        </div>

        <div className="ca-grid">
          ${DO_ITEMS.map(
            (item) => html`
              <article key=${item.num} className="ca-card">
                <div className="ca-card-top">
                  <span className="ca-tag">
                    [ ${item.tag} // ${item.num} ]
                  </span>
                  <div className="ca-card-sprite">
                    <${Px} rows=${item.icon} colors=${item.colors} />
                  </div>
                </div>
                <p className="ca-card-desc">${item.text}</p>
              </article>
            `
          )}
        </div>
      </section>

      <!-- Section: WHAT YOU GET -->
      <section className="ca-section-block" aria-labelledby="ca-get-title">
        <div className="ca-block-header">
          <span className="ca-section-bullet">★</span>
          <h2 id="ca-get-title" className="ca-section-title ca-gold-title">
            WHAT YOU GET
          </h2>
          <span className="ca-section-bullet">★</span>
        </div>

        <div className="ca-grid">
          ${GET_ITEMS.map(
            (item) => html`
              <article key=${item.num} className="ca-card ca-reward-card">
                <div className="ca-card-top">
                  <span className="ca-tag ca-tag-reward">
                    [ ${item.tag} // ${item.num} ]
                  </span>
                  <div className="ca-card-sprite">
                    <${Px} rows=${item.icon} colors=${item.colors} />
                  </div>
                </div>
                <p className="ca-card-desc">${item.text}</p>
              </article>
            `
          )}
        </div>
      </section>

      <!-- Section: READY TO JOIN THE PARTY? -->
      <section className="ca-cta-box" aria-labelledby="ca-party-title">
        <div className="ca-cta-inner">
          <h2 id="ca-party-title" className="ca-party-title">
            READY TO JOIN THE PARTY?
          </h2>

          <div className="ca-party-quotes">
            <p className="ca-quote-highlight">
              Your campus. Your people. Your moment.
            </p>
            <p className="ca-quote-sub">
              Step into the Upside Down and make your mark.
            </p>
          </div>

          <a
            href=${formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ca-apply-button"
            aria-label="Apply now for the Campus Ambassador program (opens Google Form)"
          >
            <span className="ca-btn-bracket">[</span>
            <span className="ca-btn-text">APPLY NOW</span>
            <span className="ca-btn-bracket">]</span>
            <i className="ca-btn-arrow">►</i>
          </a>

          <p className="ca-form-footnote">
            * Applications are submitted through our official Google Form. *
          </p>
        </div>
      </section>
    </div>
  `;
}
