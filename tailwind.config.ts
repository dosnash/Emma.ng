import type { Config } from "tailwindcss"

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070b1a",
        navy: "#0b1533",
        deep: "#14266a",
        brand: {
          DEFAULT: "#2a52c4",
          hover: "#1f43ad"
        },
        bright: "#5b7ff0",
        sky: "#b9c9f7",
        mist: "#e8edfa",
        paper: "#f5f7fd",
        amber: "#f5b83d",
        muted: "#4a5470"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
} satisfies Config

export default config
