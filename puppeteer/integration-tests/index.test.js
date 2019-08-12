import assert from 'assert';
import { setupBrowser, tearDownBrowser } from '../lib/helper';
import CommandsActionsPage from '../lib/commands.actions.page';

let browser;
let mypage;

beforeAll(async () => {
  browser = await setupBrowser();
});

afterAll(async () => {
  await tearDownBrowser(browser);
});

beforeEach(async () => {
  mypage = await browser.newPage();
});

afterEach(async () => {
  await mypage.close();
});

function delay(time) {
  return new Promise(((resolve) => {
    setTimeout(resolve, time);
  }));
}

describe('Suite', () => {
  test('App renders', async () => {
    const page = new CommandsActionsPage(mypage);
    const response = await page.visit('/');
    assert(response.ok());
    await mypage.screenshot({ path: './screenshots/app.png' });
  });

  test('fill the form', async () => {
    const page = new CommandsActionsPage(mypage);
    const response = await page.visit('/commands/actions');
    assert(response.ok());
    await page.fillEmailField('valid@email.com');

    await delay(200);
  });
});
