const config = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
    collectCoverageFrom: [
      "**/*.{js}",
      "!**/node_modules/**",
      "!**/coverage/**",
    ],
  },
};

module.exports = config;
