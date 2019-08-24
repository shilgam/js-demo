const { createTmpDirPath, removeTmpDir } = require('../helper/filesystem.js');

async function teardown() {
  console.log('<<<<<< Teardown Puppeteer'); // eslint-disable-line
  await global.__BROWSER_GLOBAL__.close();
  const DIR = createTmpDirPath();
  removeTmpDir(DIR);
}

module.exports = teardown;
