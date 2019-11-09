import appConfig from '../appConfig';
import puppConfig from '../helper/puppeteer/config';

export default class Page {
  constructor(browserContext = null, page = null) {
    this.browserContext = browserContext;
    this.page = page;
  }

  async init() {
    const browser = global.__BROWSER__;

    if (this.browserContext == null) {
      this.browserContext = await browser.createIncognitoBrowserContext();
    }

    this.page = await this.browserContext.newPage();
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
