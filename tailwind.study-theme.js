/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#F5F7FB",
          card: "#FFFFFF",
          alt: "#F8FAFC",
        },
        ink: {
          primary: "#1E293B",
          secondary: "#64748B",
          tertiary: "#94A3B8",
        },
        accent: {
          orange: {
            DEFAULT: "#F97316",
            light: "#FFF7ED",
            border: "rgba(249,115,22,0.2)",
          },
          green: {
            DEFAULT: "#22C55E",
            light: "#F0FDF4",
            border: "rgba(34,197,94,0.2)",
          },
          blue: {
            DEFAULT: "#3B82F6",
            light: "#EFF6FF",
          },
        },
        border: {
          DEFAULT: "#E2E8F0",
          light: "#F1F5F9",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display': ['28px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.5px' }],
        'h1': ['28px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '-0.5px' }],
        'h2': ['22px', { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.3px' }],
        'h3': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.7' }],
        'caption': ['13px', { lineHeight: '1.5' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.6px', textTransform: 'uppercase' }],
        'code': ['14px', { lineHeight: '1.6' }],
      },
      spacing: {
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
      },
      maxWidth: {
        'reading': '70ch',
        'content': '960px',
      },
      borderRadius: {
        'card': '12px',
        'sm': '8px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'none': 'none',
      },
      borderWidth: {
        'DEFAULT': '1px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
