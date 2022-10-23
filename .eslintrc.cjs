module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: ["warn", 4],

        quotes: ["warn", "double"],
        semi: ["warn", "always"],
    },
};
