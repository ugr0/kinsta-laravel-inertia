/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
            "./resources/**/*.blade.php",
            "./resources/**/*.js",
            "./resources/**/*.vue",
            "./storage/framework/views/*.php", // これは何？
        ],
    theme: {
    extend: {},
    },
    plugins: [],
}

