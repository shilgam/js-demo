import appConfig from '../appConfig';
import Header from './components/header';

export default class Page {
  constructor(page = null) {
    this.browser = global.__BROWSER__;
    this.page = page;
    this.header = null;
  }

  async init() {
    this.page = await this.browser.newPage();
    this.header = new Header(this.page);
  }

  async open(path) {
    await this.page.goto(`${appConfig.APP_URL}${path}`);
    return this;
  }

  async close() {
    return this.page.close();
  }

  async title() {
    return this.page.title();
  }

  async screenshot(options) {
    await this.page.screenshot(options);
  }

  async getInnerText(selector) {
    return this.page.$eval(selector, e => e.innerText);
  }

  async fillField(selector, value) {
    await this.page.type(selector, value);
  }

  async debugger() {
    await this.page.evaluate(() => {
      debugger; // eslint-disable-line
    });
  }

  async waitForSelector(selector) {
    return this.page.waitForSelector(selector);
  }
}
