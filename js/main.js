/* =========================================================
   main.js – Entry point: mount the React app
   ========================================================= */
import { html } from "./lib.js";
import { App } from "./app.js?v=2";

ReactDOM.createRoot(document.getElementById("root")).render(html`<${App} />`);
