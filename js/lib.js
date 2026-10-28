/* =========================================================
   lib.js – Central re-exports of React globals & htm binding
   All component files import from here instead of touching
   window globals directly, making a future bundler migration
   trivial.
   ========================================================= */

const {
  useState,
  useEffect,
  useMemo,
  useRef,
  Fragment,
  createElement,
} = React;

const html = htm.bind(createElement);

export {
  html,
  useState,
  useEffect,
  useMemo,
  useRef,
  Fragment,
  createElement,
};
