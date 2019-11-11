const puppeteer = require('puppeteer'); // eslint-disable-line
const puppConfig = require('./puppeteer/config');
const { createTmpDirPath, createTmpDir, writeToFile } = require('../helper/filesystem.js');

async function initBrowser() {
  console.info('\n>>>>>>> Setup puppeteer');
  let options = {
    args: [
      // Required for Docker version of Puppeteer
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      '--disable-dev-shm-usage',
      `--window-size=${puppConfig.SCREEN_WIDTH},${puppConfig.SCREEN_HEIGHT}`,
    ],
  };

  if (process.env.HEADLESS === '0') {
    options = {
      ...options,
      headless: false,
      // devtools: true, // required for debugger
    };
  }

  const browser = await puppeteer.launch(options);

  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser;

  // Instead, we expose the connection details via file system to be used in tests
  const DIR = createTmpDirPath();
  createTmpDir(DIR);

  const pathToFile = `${DIR}/wsEndpoint`;
  const wsEndpointAddr = browser.wsEndpoint();
  writeToFile(pathToFile, wsEndpointAddr);
}

module.exports = initBrowser;
