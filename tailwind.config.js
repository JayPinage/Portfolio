/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090D",
        surface: {
          DEFAULT: "#0B0F17",
          subtle: "#0F1624",
          card: "#121A2B",
          hover: "#18233A",
          border: "rgba(255, 255, 255, 0.08)",
          glass: "rgba(11, 15, 23, 0.75)",
        },
        cyan: {
          DEFAULT: "#00E5FF",
          glow: "rgba(0, 229, 255, 0.4)",
          soft: "rgba(0, 229, 255, 0.12)",
          border: "rgba(0, 229, 255, 0.25)",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          glow: "rgba(139, 92, 246, 0.4)",
          soft: "rgba(139, 92, 246, 0.12)",
          border: "rgba(139, 92, 246, 0.25)",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyan-sm': '0 0 15px rgba(0, 229, 255, 0.15)',
        'cyan-md': '0 0 25px rgba(0, 229, 255, 0.25)',
        'cyan-lg': '0 0 45px rgba(0, 229, 255, 0.35)',
        'violet-sm': '0 0 15px rgba(139, 92, 246, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(circle, rgba(0, 229, 255, 0.12) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
