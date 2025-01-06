/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in the `src` folder and subfolders
    "./public/index.html",        // Includes the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

