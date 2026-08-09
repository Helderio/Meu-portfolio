/** Path canónico do sona — fonte única, partilhada entre SonaMark, favicon e OG image. */
export const SONA_PATH =
  "M 40 40 L 160 40 L 160 100 L 100 100 L 100 160 L 40 160 L 40 100 L 100 100 L 100 40 M 40 100 L 40 40 M 160 100 L 160 160 L 100 160";

export const SONA_GRID_DOTS = [
  [40, 40],
  [100, 40],
  [160, 40],
  [40, 100],
  [100, 100],
  [160, 100],
  [40, 160],
  [100, 160],
  [160, 160],
] as const;
