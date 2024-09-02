module.exports = {
    trailingComma: 'es5',
    semi: false,
    singleQuote: true,
    printWidth: 60,
    tabWidth: 4,
    endOfLine: 'auto',
    overrides: [
        {
            files: ['*.json'],
            options: {
                tabWidth: 2,
            },
        },
    ],
}
