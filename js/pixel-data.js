/* =========================================================
   Pixel-art sprite data (rows of character codes)
   ========================================================= */

export const CLOUD = [
  "....wwww.........",
  "..wwwwwwww..wwww..",
  ".wwwwwwwwwwwwwwwww",
  "wwwwwwwwwwwwwwwwwww",
  "wwwwwwwwwwwwwwwwwww",
  ".sssssssssssssssss.",
].map((r) => r.padEnd(19, "."));

export const BIRD_A = [
  "kk.......kk",
  ".kkk...kkk.",
  "..kkkkkkk..",
  "....kkk....",
  ".....k.....",
];
export const BIRD_M = [
  "...........",
  "kkk.....kkk",
  "..kkkkkkk..",
  "....kkk....",
  ".....k.....",
];
export const BIRD_B = [
  "....kkk....",
  ".kkkkkkkkk.",
  "kkk.....kkk",
  "kk.......kk",
  "k.........k",
];

export const SUN = [
  "...yyyyy...",
  ".yyyyyyyyy.",
  ".yyyyyyyyy.",
  "yyyyyyyyyyy",
  "yyyyyyyyyyy",
  "yyyyyyyyyyy",
  "yyyyyyyyyyy",
  "yyyyyyyyyyy",
  ".yyyyyyyyy.",
  ".yyyyyyyyy.",
  "...yyyyy...",
];

export const MOON = [
  "...mmmmm...",
  ".mmmmm.....",
  ".mmmm......",
  "mmmm.......",
  "mmmm.......",
  "mmmm.......",
  "mmmm.......",
  ".mmmm......",
  ".mmmmm.....",
  "...mmmmmm..",
  ".....mmm...",
];

export const PIN = [
  "....kkkkk....",
  "..kkrrrrrkk..",
  ".krrrrrrrrrk.",
  ".krwwrrrrrrk.",
  "krrwwrrrrrrrk",
  "krrrrkkkrrrrk",
  "krrrkbbbkrrrk",
  "krrrkbbbkrrrk",
  "krrrrkkkrrrrk",
  ".krrrrrrrrrk.",
  ".krrrrrrrrrk.",
  "..krrrrrrrk..",
  "..krrrrrrrk..",
  "...krrrrrk...",
  "....krrrk....",
  "....krrrk....",
  ".....krk.....",
  "......k......",
];

/* Layout presets: [top%, widthVW, durationS, delayS, restingXvw] */
export const CLOUDS = [
  [4, 34, 70, -12, 8],
  [14, 22, 95, -55, 60],
  [30, 30, 80, -30, 34],
  [46, 18, 110, -70, 84],
  [62, 26, 88, -5, 52],
  [8, 16, 120, -90, 92],
];

/* Flock presets: [top%, durationS, delayS, restingXvw, size, birdsInFlock] */
export const FLOCKS = [
  [6, 34, -6, 12, 1, 3],
  [17, 46, -26, 48, 0.8, 5],
  [27, 40, -14, 78, 0.65, 3],
  [3, 52, -38, 24, 0.9, 1],
];

/* V-formation offsets for flocks */
export const FORM = [
  [0, 0],
  [-1.7, -1],
  [-1.7, 1],
  [-3.4, -2],
  [-3.4, 2],
];

/* Sphere / Earth parameters */
export const SPHERE = { top: 70, size: 0.85, py: 470 };

/* Road definitions: [path as [across, up] offsets, width, color] */
export const ROADS = [
  [[[-900, -700], [-300, -200], [0, 0], [400, 260], [1100, 700]], 15, "#c6ff1a"],
  [[[420, -800], [120, -200], [0, 0], [-250, 420], [-600, 1000]], 10, "#c6ff1a"],
  [[[-1200, -420], [-400, -380], [300, -440], [1200, -330]], 10, "#2f6bff"],
  [[[-1200, 300], [-300, 330], [400, 300], [1200, 380]], 8, "#2f6bff"],
  [[[-1400, -800], [1400, -760]], 7, "#5b6a9e"],
  [[[-1400, 650], [1400, 700]], 6, "#5b6a9e"],
  [[[-700, -900], [-760, 200], [-900, 900]], 6, "#5b6a9e"],
  [[[760, -900], [720, 300], [900, 900]], 6, "#5b6a9e"],
  [
    Array.from({ length: 29 }, (_, i) => [
      400 + 34 * Math.cos((i / 28) * 6.2832),
      260 + 34 * Math.sin((i / 28) * 6.2832),
    ]),
    7,
    "#c6ff1a",
  ],
];

/* Campus Ambassador Sprites */
export const MEGAPHONE = [
  "............",
  "......kkkk..",
  "....kkyyykk.",
  "...kyyyyyyk.",
  "..kyyyyyyyk.",
  ".kyyyyyyyykk",
  "kyyykkkyyyyy",
  "kyyyyykkyyyy",
  ".kyyyyyyyykk",
  "..kyyyyyyyk.",
  "...kkyyykk..",
  ".....kkkk...",
];

export const TROPHY = [
  "..kkkkkkkk..",
  ".kkyyyyyykk.",
  "kyyyyyyyyyyk",
  "kyykwkkyyyyk",
  "kyyywkyyyyyk",
  ".kyyyyyyyyk.",
  "..kkyyyykk..",
  "...kkyykk...",
  "....kyyk....",
  "...kkyykk...",
  "..kyyyyyyyk.",
  "..kkkkkkkk..",
];

export const CERTIFICATE = [
  "..kkkkkkkk..",
  ".kwwwwwwwwk.",
  "kwwwwwwwwwwk",
  "kwkkkkkkkkwk",
  "kwwwwwwwwwwk",
  "kwkkkkkkkkwk",
  "kwwwwwwwwwwk",
  "kwkkyyykkwk.",
  "kwwwyyyywwwk",
  ".kwwyyyywwk.",
  "..kkyyyykk..",
  "...kk..kk...",
];

export const GAMEPAD = [
  "............",
  "..kkkkkkkk..",
  ".kbbbbbbbbk.",
  "kbbwbbbbwbk.",
  "kbwwwbbwkwbk",
  "kbbwbbbbwbk.",
  "kbbbbbbbbbbk",
  "kbbkkbbkkbbk",
  ".kk..kk..kk.",
  "............",
  "............",
  "............",
];

export const WALKIE = [
  ".....kk.....",
  ".....kk.....",
  "....kkkk....",
  "...krrrrk...",
  "..krrrrrrk..",
  "..krkyykrk..",
  "..krrrrrrk..",
  "..krkkkkrk..",
  "..krrrrrrk..",
  "..krrrrrrk..",
  "...kkkkkk...",
  "............",
];

export const STAR_BADGE = [
  ".....kk.....",
  "....kyyk....",
  "....kyyk....",
  "kkkkkyykkkkk",
  ".kyyyyyyyyk.",
  "..kyyyyyyk..",
  "..kyyyyyyk..",
  ".kyykkkkyyk.",
  "kkyk....kykk",
  "kk........kk",
  "............",
  "............",
];

export const NETWORK = [
  "....kkkk....",
  "...kbbbbk...",
  "...kbbbbk...",
  "....kkkk....",
  "....k..k....",
  ".kkkk..kkkk.",
  "kyyyk..kgggk",
  "kyyykkkkgggk",
  "kyyyk..kgggk",
  ".kkkk..kkkk.",
  "............",
  "............",
];

