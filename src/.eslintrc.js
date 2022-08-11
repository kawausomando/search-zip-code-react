module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "plugin:react/recommended",
        "google"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'quotes': ['error', 'single'],
        'indent': ['error', 2],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"]
    }
}
