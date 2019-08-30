export default class Page {
  constructor() {
    this.browser = global.__BROWSER__;
    this.page = null;
  }

  async open(path) {
    const page = await this.browser.newPage();
    await page.goto(`${process.env.APP_URL}${path}`);
    this.page = page;
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

  async fillField(selector, value) {
    await this.page.focus(selector);
    await this.page.type(selector, value);
  }

  async debugger() {
    await this.page.evaluate(() => {
      debugger;
    });
  }
}
