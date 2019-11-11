const { tmpDirPath, removeDir } = require('../helper/filesystem.js');

async function terminateBrowser() {
  console.info('<<<<<< Teardown Puppeteer');
  await global.__BROWSER_GLOBAL__.close();

  const pathToDir = `${tmpDirPath()}/jest_puppeteer_global_setup`;
  removeDir(pathToDir);
}

module.exports = terminateBrowser;
