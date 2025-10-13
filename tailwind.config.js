/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",       // all pages
    "./app/**/*.{js,ts,jsx,tsx}",         // for app directory (Next 13+)
    "./components/**/*.{js,ts,jsx,tsx}",  // all components
    "./src/**/*.{js,ts,jsx,tsx}",         // if you use src folder
  ],
  theme: {
    screens: {
      xs: [{ min: "0px", max: "430px" }],
      sm: [{ min: "430px", max: "768px" }],
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#E52B50",
        secondary: "#F4C430",
        dark: "#4D4D4D",
        light: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/assets/herobg.svg')",
        bg_hero: "url('/assets/bg_hero.png')",
        "cta-bg": "url('/assets/cta-bg.png')",
        bg_strategy: "url('/assets/bg_strategy.svg')",
        bg_implementation: "url('/assets/bg_implementation.svg')",
        bg_customization: "url('/assets/bg_customization.svg')",
        bg_program: "url('/assets/bg_program.svg')",
        bg_analytics: "url('/assets/bg_analytics.svg')",
        bg_integration: "url('/assets/bg_integration.svg')",
        bg_hello: "url('https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        dots: "url('/assets/dots_bg.svg')",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
};
