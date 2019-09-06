const puppeteer = require('puppeteer'); // eslint-disable-line
const config = require('config');
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
    ],
  };

  const puppeteerConfig = config.get('puppeteer');

  if (process.env.HEADLESS === '0') {
    options = {
      ...options,
      ...{
        headless: false,
        slowMo: puppeteerConfig.slowMoTime, // slow down (in millisec)
        // devtools: true, // required for debugger
      },
    };
  }

  const browser = await puppeteer.launch(options);

  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser;

  // Instead, we expose the connection details via file system to be used in tests
  const DIR = createTmpDirPath();
  createTmpDir(DIR);

  writeToFile(DIR, 'wsEndpoint', browser.wsEndpoint());
}

module.exports = initBrowser;
