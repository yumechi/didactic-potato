module.exports = {
    verbose: true,
    testMatch: [
        "**/__tests__/**/*.test.js"
    ],
    coverageThreshold: {
        global: {
            lines: 80,
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10
        },
    },
};