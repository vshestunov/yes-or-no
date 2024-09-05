const prettierConfig = require('./prettier.config')
const stylistic = require('@stylistic/eslint-plugin')

module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    parserOptions: {
        ecmaVersion: 2021,
    },
    env: {
        es6: true,
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['tsconfig.json'],
                createDefaultProgram: true,
            },
            plugins: ['@typescript-eslint', '@stylistic'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'plugin:prettier/recommended',
            ],
            rules: {
                'prefer-const': ['error', { destructuring: 'all' }],
                'max-len': ['error', { code: 126 }],
                eqeqeq: ['error', 'always', { null: 'ignore' }],
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-misused-promises': ['warn', { checksVoidReturn: false }],
                '@typescript-eslint/no-floating-promises': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                '@typescript-eslint/prefer-nullish-coalescing': 'off',
                '@typescript-eslint/prefer-optional-chain': 'error',
                '@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],
                '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
                '@typescript-eslint/restrict-template-expressions': [
                    'error',
                    {
                        allowAny: true,
                        allowNumber: true,
                    },
                ],
                'dot-notation': 'off',
                '@typescript-eslint/dot-notation': 'error',
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': 'error',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
                '@typescript-eslint/no-unsafe-member-access': 'error',
                '@angular-eslint/no-output-native': 'off',
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'yon',
                        style: 'kebab-case',
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'warn',
                    {
                        selector: 'default',
                        format: ['camelCase'],
                        leadingUnderscore: 'forbid',
                        trailingUnderscore: 'forbid',
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'UPPER_CASE'],
                        leadingUnderscore: 'forbid',
                        trailingUnderscore: 'forbid',
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'PascalCase'],
                        types: ['function'],
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'enumMember',
                        format: ['PascalCase', 'UPPER_CASE'],
                    },
                ],
                '@stylistic/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'none',
                            requireLast: true,
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false,
                        },
                    },
                ],
                curly: ['error', 'all'],
                semi: 'off',
                '@stylistic/semi': ['error', 'never'],
                'no-empty-function': 'off',
                '@typescript-eslint/no-empty-function': [
                    'error',
                    {
                        allow: ['arrowFunctions', 'functions'],
                    },
                ],
                'max-classes-per-file': ['error', 1],
                'no-magic-numbers': 'off',
                '@typescript-eslint/no-magic-numbers': [
                    'error',
                    {
                        ignore: [-1, 0, 1, 2, 5, 7, 10, 16, 24, 50, 60, 100, 180, 360, 1000],
                        ignoreNumericLiteralTypes: true,
                        ignoreDefaultValues: true,
                        ignoreEnums: true,
                        ignoreReadonlyClassProperties: true,
                    },
                ],
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            constructors: 'no-public',
                        },
                    },
                ],
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowExpressions: true,
                    },
                ],
                'prettier/prettier': ['error', prettierConfig],
            },
            overrides: [
                {
                    files: ['src/app/app.component.ts'],
                    rules: {
                        '@angular-eslint/component-selector': 'off',
                    },
                },
            ],
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {},
        },
        {
            files: ['*.html'],
            excludedFiles: ['*inline-template-*.component.html'],
            extends: ['plugin:prettier/recommended'],
            rules: {
                'prettier/prettier': [
                    'error',
                    {
                        parser: 'angular',
                        endOfLine: 'auto',
                    },
                ],
            },
        },
        {
            files: ['*.spec.ts'],
            rules: {
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/unbound-method': 'off',
            },
        },
    ],
    rules: {},
}
