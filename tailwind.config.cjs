/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                light: {
                    fondo: {
                        primary: "#fafbfc",
                        secondary: "#fff",
                    },
                    texto: {
                        primary: "#111",
                        secondary: "#252525",
                    },
                    gray: {
                        primary: "#6a6a6a",
                        secondary: "#bbb",
                    },
                },
                dark: {
                    fondo: {
                        primary: "#0a0a0a",
                        secondary: "#181818",
                    },
                    texto: {
                        primary: "#f3f3f3",
                        secondary: "#ccc",
                    },
                    gray: {
                        primary: "#999",
                        secondary: "#555",
                    },
                },
                primary: "#ffb200",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
