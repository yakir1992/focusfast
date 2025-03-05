/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff9500', // Set the primary color to orange
          '50': '#fff3e0',
          '100': '#ffe0b2',
          '200': '#ffcc80',
          '300': '#ffb74d',
          '400': '#ffa726',
          '500': '#ff9800',
          '600': '#fb8c00',
          '700': '#f57c00',
          '800': '#ef6c00',
          '900': '#e65100',
        },
        "primary-content": "#000000",
        neutral: {
          '800': '#27272A',
          '900': '#18181B',
          // Add other shades as needed
        },
        "neutral-content": "#ffffff",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearFromRight: {
          "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
          "100%": { opacity: 1, transform: "translate(0);" },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "30%, 60%": {
            transform: "rotate(-2deg)",
          },
          "40%, 70%": {
            transform: "rotate(2deg)",
          },
          "45%": {
            transform: "rotate(-4deg)",
          },
          "55%": {
            transform: "rotate(4deg)",
          },
        },
        popup: {
          "0%": { transform: "scale(0.8)", opacity: 0.8 },
          "50%": { transform: "scale(1.1)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "0 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        'custom': '0 4px 15px rgba(0, 0, 0, 0.3)', // Example custom shadow
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ff9500", // Ensure daisyUI uses the new primary color
          "primary-content": "#000000",
          neutral: "#1c1917",
          "base-100": "#292524",
          "base-200": "#1c1917",
          "base-300": "#0c0a09",
        },
      },
    ],
  },
};
