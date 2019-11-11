// custom jest-environment
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer'); // eslint-disable-line
const puppConfig = require('../helper/puppeteer/config');

const { createTmpDirPath, readFileFromDir } = require('../helper/filesystem.js');

const DIR = createTmpDirPath();

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    // get the wsEndpoint
    const wsEndpoint = readFileFromDir(DIR, 'wsEndpoint');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }

    // connect to puppeteer
    let options = {
      browserWSEndpoint: wsEndpoint,
    };

    if (process.env.HEADLESS === '0') {
      options = {
        ...options,
        slowMo: puppConfig.SLOW_MO_TIME,
      };
    }

    this.global.__BROWSER__ = await puppeteer.connect(options);
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
