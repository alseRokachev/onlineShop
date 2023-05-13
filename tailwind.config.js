/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        screens: {
            'xsm' : '320px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                'prpl': '#5C2018',
                'lagoone': '#D8C3A5',
                'gray': '#A97953'
            },
        },
    },
    plugins: [],
}

