module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "open-sans": ["Open Sans", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },

            backgroundImage: {
                "hero-desktop": "url('/images/bg-hero-desktop.svg')",
                "hero-mobile": "url('/images/bg-hero-mobile.svg')",
            },

            colors: {
                primary: {
                    pink: "hsl(322, 100%, 66%)",
                },
                neutral: {
                    "pale-cyan": "hsl(193, 100%, 96%)",
                    "dark-cyan": "hsl(192, 100%, 9%)",
                    "grayish-blue": "hsl(208, 11%, 55%)",
                },
            },
        },
    },

    plugins: [],
};
