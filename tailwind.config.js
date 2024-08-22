/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                'black': '#333333',
                'primary': {
                    '100': '#FFF3E3',
                    '900': '#B88E2F',
                },
            },
        },
    },
    plugins: [],
};
