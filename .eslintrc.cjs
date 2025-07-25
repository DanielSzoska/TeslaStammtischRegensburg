module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {ecmaVersion: "latest", sourceType: "module"},
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "off",
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-implicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@mui/*/*/*"],
            },
        ],
    },
}
