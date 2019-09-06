// custom jest-environment
const NodeEnvironment = require('jest-environment-node');
const puppeteer = require('puppeteer'); // eslint-disable-line

const { createTmpDirPath, readFileFromDir } = require('../helper/filesystem.js');

const DIR = createTmpDirPath('jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    // get the wsEndpoint
    const wsEndpoint = readFileFromDir(DIR, 'wsEndpoint');
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found');
    }
    // connect to puppeteer
    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    });
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
