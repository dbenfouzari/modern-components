module.exports = {
  preset: 'ts-jest',
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js",
  testEnvironment: 'jsdom',
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
