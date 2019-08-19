import puppeteer from 'puppeteer'; // eslint-disable-line

export default class Browser {
  constructor() {
    this.driver = null;
    this.options = {};
  }

  /**
   * Init page object and define this.driver and this.page instances
   */
  async initialize() {
    this.options = {
      args: [
        // Required for Docker version of Puppeteer
        '--no-sandbox',
        '--disable-setuid-sandbox',
        // This will write shared memory files into /tmp instead of /dev/shm,
        // because Docker’s default for /dev/shm is 64MB
        '--disable-dev-shm-usage',
      ],
    };

    if (process.env.HEADLESS === '0') {
      this.options = {
        ...this.options,
        ...{
          headless: false,
        },
      };
    }

    this.driver = await puppeteer.launch(this.options);
    return this;
  }

  async tearDown() {
    await this.driver.close();
  }

  async newPage() {
    return this.driver.newPage();
  }
}
