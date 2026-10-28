/* =========================================================
   Px – generic pixel-art SVG renderer
   Rects – bird-specific rect renderer
   ========================================================= */
import { html } from "../lib.js";

/**
 * Renders a pixel-art sprite from row strings + a color map.
 * Usage: <Px rows={SUN} colors={{ y: "#ffd23f" }} />
 */
export const Px = ({ rows, colors, className }) => html`
  <svg
    viewBox=${`0 0 ${rows[0].length} ${rows.length}`}
    shapeRendering="crispEdges"
    className=${className}
    aria-hidden="true"
  >
    ${rows.flatMap((r, y) =>
      [...r].map((ch, x) =>
        colors[ch]
          ? html`<rect
              key=${x + "," + y}
              x=${x}
              y=${y}
              width="1.02"
              height="1.02"
              style=${{ fill: colors[ch] }}
            />`
          : null
      )
    )}
  </svg>
`;

/**
 * Renders bird pixel rows using the --bird CSS variable for color.
 */
export const Rects = ({ rows }) =>
  rows.flatMap((r, y) =>
    [...r].map((ch, x) =>
      ch === "k"
        ? html`<rect
            key=${x + "," + y}
            x=${x}
            y=${y}
            width="1.02"
            height="1.02"
            style=${{ fill: "var(--bird)" }}
          />`
        : null
    )
  );
