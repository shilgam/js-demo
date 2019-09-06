const terminateBrowser = require('../helper/terminateBrowser');

async function teardown() {
  await terminateBrowser();
}

module.exports = teardown;
