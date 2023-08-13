/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    extend: {
      transformOrigin: {
        hamburger: "left center",
      },
      backgroundImage: {
        Home_Hero: "url(../assets/HeroBackgroundHomepage.png)",
        Penghargaan: "url('../assets/penghargaan_background.png')",
        Quote: "url('../assets/quote_background.png')",
        Consultation: "url('../assets/consultation_background.png')",
        Profile_Hero: "url('../assets/profile_hero_background.png')",
        Aboutus_Hero: "url('../assets/about_us_hero_background.png')",
      },
      spacing: {
        smallDesktop: "50px",
        desktop: "250px",
        mobile: "16px",
        sectionSpace: "120px",
      },
      colors: {
        white: "#F6FAFF",
        blue: "#0B2A44",
        "text-color": "#252B42",
        "second-text-color": "#737373",
        yellow: "#D1B06B",
        darkGray: "#4E555F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "Cormorant-Garamond": ["Cormorant Garamond"],
        Inter: ["Inter"],
        Martel: ["Martel"],
        "Open-Sans": ["Open Sans"],
        Outfit: ["Outfit"],
      },
      fontSize: {
        title: "45px",
        description: "28px",
        h1: [
          "4.0625rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h2: [
          "4.0625rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h3: [
          "2.8125rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h4: [
          "2.5rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h5: [
          "2.1875rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
        h6: [
          "1.875rem",
          {
            lineHeight: "114.6%",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
