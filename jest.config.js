module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "/lib/", "/\.storybook/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};
