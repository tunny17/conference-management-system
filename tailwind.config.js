/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4B6BA4'
        },
        secondary: {
          light: '#2A3342'
        }
      },
      backgroundImage: {
        hero: "url('/hero.png')",
        section: "url('/section-bg.png')",
        schedule: "url('/schedule-bg.png')",
        sponsor: "url('/sponsors-bg.png')",
        footer: "url('/footer-bg.png')"
      }
    }
  },
  plugins: []
};
