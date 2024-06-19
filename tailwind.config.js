/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'custom-1': '0 4px 8px rgba(0, 0, 0, 0.25)',
                'custom-2': '0 2px 20px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    plugins: [],
};
