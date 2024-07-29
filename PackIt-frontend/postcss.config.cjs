// eslint-disable-next-line no-undef
module.exports = {
    plugins: {
       tailwindcss: {
           content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
           theme: {
           extend: {},
           },
        // eslint-disable-next-line no-undef
        plugins: [require("@tailwindcss/forms")],
        },
    autoprefixer: {},
    },
 };