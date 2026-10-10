import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
export default [
 {
    ignores: ['node_modules/**', 'legacy/**', 'reports/**'],
 },
    js.configs.recommended,
    {
        languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
            ...globals.node,
            },
        },
        rules: {
            // шість правил свого варіанта 7:
            eqeqeq: ['error', 'always'],
            'prefer-template': 'error',
            'arrow-body-style': ['warn', 'as-needed'],
            "max-depth": ["warn", 3],
            "camelcase": "error",
            "no-negated-condition": "warn"
        },
    },
 eslintConfigPrettier,
];