import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f8f8f7",
        panel: "#ffffff",
        line: "#e9e9e7",
        ink: "#101010",
        muted: "#5f5f5a",
        accent: "#1e3a8a"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16, 16, 16, 0.05)",
        card: "0 8px 24px rgba(16, 16, 16, 0.04)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
