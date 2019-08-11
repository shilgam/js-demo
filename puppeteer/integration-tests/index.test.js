import assert from 'assert';
import puppeteer from 'puppeteer';

import CommandsActionsPage from '../lib/commands.actions.page';

let browser;
let page;

beforeAll(async () => {
  let options;

  options = {
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
    options = {
      ...options,
      ...{
        headless: false,
      },
    };
  }

  browser = await puppeteer.launch(options);

  const browserVersion = await browser.version();
  console.log(`Started ${browserVersion} with options:`);
  console.log(options);
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

function delay(time) {
  return new Promise(((resolve) => {
    setTimeout(resolve, time);
  }));
}

describe('Suite', () => {
  test('App renders', async () => {
    const response = await page.goto(process.env.APP_URL);
    assert(response.ok());
    await page.screenshot({ path: './screenshots/app.png' });

    // await delay(1000);
  });

  test('fill the form', async () => {
    const response = await page.goto(`${process.env.APP_URL}/commands/actions`);
    assert(response.ok());
    const form = new CommandsActionsPage(page);
    await form.fillEmailField('valid@email.com');

    await delay(1000);
  });
});
