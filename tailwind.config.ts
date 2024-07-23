import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkmode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        datadark:{
          "primary": "#1F2937", 
          "secondary": "#38BDF8",
          "accent": "#ea580c",
          "neutral": "#607274",
          "base-100": "#0F202A",
          "info": "#CBE4DE",
          "success": "#65A30D",
          "warning": "#EAB308",      
          "error": "#DC2626",
        },
        legacy:{
          "primary": "#3cc1c9ff", 
          "secondary": "#3c949cff",
          "accent": "#2e2e2eff",
          "neutral": "#607274",
          "base-100": "#0F202A",
          "info": "#CBE4DE",
          "success": "#65A30D",
          "warning": "#EAB308",      
          "error": "#DC2626",
        }
      },
      "corporate",
    ],
  },
  plugins: [
    require("daisyui"),
    addVariablesForColors,
  ],
  
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
