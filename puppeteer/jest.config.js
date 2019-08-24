module.exports = {
  setupFilesAfterEnv: ['./lib/jest/defaultTimeout.js'],
  testEnvironment: './lib/jest/puppeteer-environment.js',
  globalSetup: './lib/jest/setup.js',
  globalTeardown: './lib/jest/teardown.js',
};
