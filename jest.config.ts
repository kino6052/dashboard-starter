module.exports = {
    automock: false,
    globals: {
        "babel-jest": {
            // "tsConfig": "./tsconfig.json",
            babelConfig: "./babel.config.json"
        }
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePaths: ["src"],
    roots: ["<rootDir>"],
    setupFiles: ["./jest.setup.js"],
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    transform: {
        "^.+\\.tsx?$": "babel-jest"
    }
};
