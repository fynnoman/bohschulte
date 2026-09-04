import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          50: "#FBF8F3",
          100: "#F5F0E6",
          200: "#EBE3D2",
          300: "#DCCFB5",
        },
        slate: {
          950: "#0A1116",
          900: "#111A22",
          800: "#182430",
          700: "#25333F",
        },
        forest: {
          300: "#9BD097",
          400: "#5DB758",
          500: "#369B31",
          600: "#297822",
          700: "#1A5416",
          900: "#0C2E0C",
        },
        azure: {
          300: "#9DBEE2",
          400: "#5F92CB",
          500: "#2F65A8",
          600: "#1E4A82",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "brand-tight": "-0.025em",
        "brand-loose": "0.14em",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 40px -12px rgba(10,17,22,0.35)",
        card: "0 30px 80px -40px rgba(10,17,22,0.45)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.06  0 0 0 0 0.08  0 0 0 0 0.1  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
