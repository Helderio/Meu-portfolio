import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--obsidian)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        brass: "var(--brass)",
        "brass-bright": "var(--brass-bright)",
        "brass-dim": "var(--brass-dim)",
        bone: "var(--bone)",
        stone: "var(--stone)",
        hair: "var(--hair)",
      },
      fontFamily: {
        display: ["var(--font-unbounded)"],
        body: ["var(--font-manrope)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      borderRadius: {
        DEFAULT: "2px",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
