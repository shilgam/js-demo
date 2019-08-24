// custom environment
const NodeEnvironment = require('jest-environment-node');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    console.log('>>>>>> setup');
    await super.setup();
  }

  async teardown() {
    console.log('<<<<<< tearDown');
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
