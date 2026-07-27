/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-container-highest": "#353534",
        "primary": "#E11D2E", /* Signal Red */
        "signal": "#E11D2E", /* Alias for bg-signal, text-signal, border-signal */
        "void": "#0A0A0A", /* Alias for bg-void */
        "pure": "#FFFFFF", /* Alias for text-pure */
        "steel": "#8A8A8E", /* Alias for text-steel */
        "surface-variant": "#353534",
        "on-secondary-container": "#8A8A8E",
        "tertiary": "#79d1f9",
        "surface-container-low": "#1c1b1b",
        "tertiary-container": "#007ca0",
        "on-tertiary": "#003546",
        "inverse-primary": "#c0001f",
        "outline-variant": "#5d3f3d",
        "secondary-container": "#47464b",
        "outline": "#ad8885",
        "on-primary-fixed": "#410004",
        "surface": "#131313",
        "secondary-fixed": "#e4e1e7",
        "on-error": "#690005",
        "secondary": "#c8c5cb",
        "on-secondary": "#303034",
        "on-primary-fixed-variant": "#930015",
        "surface-container-lowest": "#0e0e0e",
        "on-tertiary-fixed-variant": "#004d65",
        "on-primary-container": "#fff8f7",
        "error-container": "#93000a",
        "on-background": "#FFFFFF",
        "secondary-fixed-dim": "#c8c5cb",
        "surface-container-high": "#2a2a2a",
        "on-primary": "#FFFFFF",
        "error": "#ffb4ab",
        "surface-container": "#201f1f",
        "surface-tint": "#E11D2E",
        "primary-fixed": "#ffdad7",
        "background": "#0A0A0A",
        "inverse-surface": "#e5e2e1",
        "on-tertiary-container": "#f4faff",
        "primary-container": "#E11D2E",
        "on-surface-variant": "#8A8A8E",
        "on-secondary-fixed": "#1b1b1f",
        "on-tertiary-fixed": "#001f2a",
        "on-error-container": "#ffdad6",
        "surface-bright": "#3a3939",
        "on-secondary-fixed-variant": "#47464b",
        "tertiary-fixed-dim": "#79d1f9",
        "inverse-on-surface": "#313030",
        "primary-fixed-dim": "#ffb3ae",
        "tertiary-fixed": "#bee9ff",
        "surface-dim": "#131313",
        "on-surface": "#FFFFFF"
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "container-max": "1860px",
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        base: "8px"
      },
      fontFamily: {
        "label-md": ["JetBrains Mono", "monospace"],
        "headline-md": ["Bebas Neue", "sans-serif"],
        "headline-lg-mobile": ["Bebas Neue", "sans-serif"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "headline-xl": ["Bebas Neue", "sans-serif"],
        "headline-lg": ["Bebas Neue", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "500" }],
        "headline-md": ["32px", { lineHeight: "32px", letterSpacing: "0.04em", fontWeight: "400" }],
        "headline-lg-mobile": ["36px", { lineHeight: "36px", letterSpacing: "0.05em", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" }],
        "headline-xl": ["120px", { lineHeight: "110px", letterSpacing: "0.05em", fontWeight: "400" }],
        "headline-lg": ["72px", { lineHeight: "72px", letterSpacing: "0.05em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }]
      }
    }
  },
  plugins: [],
}
