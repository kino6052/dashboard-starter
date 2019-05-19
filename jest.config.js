module.exports = {
    automock: false,
    collectCoverage: true,
    coverageDirectory: "./coverage",
    coverageReporters: [
        "json-summary",
        "text",
        "lcov"
    ],
    globals: {
        "babel-jest": {
            // "tsConfig": "./tsconfig.json",
            babelConfig: "./babel.config.json"
        }
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePaths: ["src"],
    reporters: [
        "default",
        [
            "jest-html-reporters",
            {
                filename: "report.html",
                publicPath: "./coverage"
            }
        ]
    ],
    roots: ["<rootDir>"],
    // setupFiles: ["./jest.setup.js"],
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: {
        "^.+\\.tsx?$": "babel-jest"
    }
};
