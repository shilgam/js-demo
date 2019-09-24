module.exports = {
  setupFilesAfterEnv: [
    './lib/jest/configureJest.js',
    'expect-puppeteer',
  ],
  testEnvironment: './lib/jest/PuppeteerEnvironment.js',
  globalSetup: './lib/jest/globalSetup.js',
  globalTeardown: './lib/jest/globalTeardown.js',
};
