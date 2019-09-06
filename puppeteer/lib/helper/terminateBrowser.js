const { createTmpDirPath, removeTmpDir } = require('../helper/filesystem.js');

async function terminateBrowser() {
  console.info('<<<<<< Teardown Puppeteer');
  await global.__BROWSER_GLOBAL__.close();
  const DIR = createTmpDirPath();
  removeTmpDir(DIR);
}

module.exports = terminateBrowser;
