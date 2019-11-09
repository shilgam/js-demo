import appConfig from '../appConfig';
import puppConfig from '../helper/puppeteer/config';

export default class Page {
  constructor(page = null) {
    this.browser = global.__BROWSER__;
    this.page = page;
  }

  async init() {
    this.page = await this.browser.newPage();
    await this.page.setViewport({
      width: puppConfig.SCREEN_WIDTH,
      height: puppConfig.SCREEN_HEIGHT,
    });
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
    await expect(this.page).toFill(selector, value);
  }

  async debugger() {
    await this.page.evaluate(() => {
      debugger; // eslint-disable-line
    });
  }
}
