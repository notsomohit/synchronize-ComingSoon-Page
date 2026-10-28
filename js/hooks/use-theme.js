/* =========================================================
   useTheme – persisted day/night theme hook
   ========================================================= */
import { useState, useEffect } from "../lib.js";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const s = localStorage.getItem("sync-theme");
      if (s) return s;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("sync-theme", theme);
    } catch (e) {}
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
