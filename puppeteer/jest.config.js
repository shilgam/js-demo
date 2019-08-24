module.exports = {
  setupFilesAfterEnv: ['./lib/jest/defaultTimeout.js'],
  testEnvironment: './lib/jest/puppeteer-environment.js',
  verbose: true,
};
