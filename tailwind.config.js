module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000080",
        secondary: "#0000FF",
      },
      fontFamily: {
        mermaid: "Mermaid Swash Caps",
      },
    },
  },
  plugins: [],
}