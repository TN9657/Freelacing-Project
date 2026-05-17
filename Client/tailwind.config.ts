import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(0.98 0.001 246)",
        foreground: "oklch(0.18 0.015 256)",
        card: "oklch(1 0 0)",
        "card-foreground": "oklch(0.18 0.015 256)",
        popover: "oklch(1 0 0)",
        "popover-foreground": "oklch(0.18 0.015 256)",
        primary: "oklch(0.22 0.09 260)",
        "primary-foreground": "oklch(0.98 0.001 246)",
        secondary: "oklch(0.30 0.10 256)",
        "secondary-foreground": "oklch(0.98 0.001 246)",
        muted: "oklch(0.965 0.012 250)",
        "muted-foreground": "oklch(0.50 0.04 256)",
        accent: "oklch(0.42 0.13 254)",
        "accent-foreground": "oklch(0.985 0.005 250)",
        destructive: "oklch(0.577 0.245 27.325)",
        "destructive-foreground": "oklch(0.984 0.003 247.858)",
        border: "oklch(0.92 0.018 250)",
        input: "oklch(0.92 0.018 250)",
        ring: "oklch(0.42 0.13 254)",
        royal: "oklch(0.22 0.09 260)",
        navy: "oklch(0.30 0.10 256)",
        azure: "oklch(0.42 0.13 254)",
        "light-blue": "oklch(0.60 0.08 258)",
      },
      fontFamily: {
        serif: '"Playfair Display", ui-serif, Georgia, serif',
        sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
        roboto: '"Roboto", ui-sans-serif, system-ui, sans-serif',
      },
      borderRadius: {
        sm: "calc(0.625rem - 4px)",
        md: "calc(0.625rem - 2px)",
        lg: "0.625rem",
        xl: "calc(0.625rem + 4px)",
        "2xl": "calc(0.625rem + 8px)",
        "3xl": "calc(0.625rem + 12px)",
      },
      backgroundImage: {
        "gradient-royal": "linear-gradient(135deg, #0A2647 0%, #144272 50%, #205295 100%)",
        "gradient-hero-overlay":
          "linear-gradient(180deg, rgba(10,38,71,0.45) 0%, rgba(10,38,71,0.85) 100%)",
        "gradient-light": "linear-gradient(180deg, #F5F9FF 0%, #FFFFFF 100%)",
      },
      backgroundColor: {
        glass: "rgba(255,255,255,0.08)",
      },
      borderColor: {
        glass: "rgba(255,255,255,0.18)",
      },
      boxShadow: {
        luxury: "0 30px 60px -20px rgba(10,38,71,0.35)",
        "card-luxury": "0 10px 30px -10px rgba(10,38,71,0.18)",
      },
    },
  },
  plugins: [],
} satisfies Config;
