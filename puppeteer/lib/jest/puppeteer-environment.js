// custom environment
import NodeEnvironment from 'jest-environment-node';

export default class PuppeteerEnvironment extends NodeEnvironment {
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
