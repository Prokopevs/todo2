module.exports = {
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.mjs$": "babel-jest",
        "^.+\\.svelte$": "svelte-jester"
      },
    transformIgnorePatterns: [
        "src/node_modules/(?!axios)"
      ],
    moduleFileExtensions: [
        "js",
        "mjs",
        "svelte"
      ],
    moduleDirectories: [
        "node_modules",
        "src/node_modules"
      ],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
      ]
}
