module.exports = {
    plugins: {
       tailwindcss: {
           content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
           theme: {
           extend: {},
           },
        plugins: [require("@tailwindcss/forms")],
        },
    autoprefixer: {},
    },
 };