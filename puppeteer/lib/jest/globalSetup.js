const initDotEnv = require('../helper/initDotEnv.js');
const initBrowser = require('../helper/initBrowser');

async function setup() {
  initDotEnv();
  await initBrowser();
}

module.exports = setup;
