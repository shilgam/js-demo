import assert from 'assert';
import Browser from '../lib/browser';
import ActionsPage from '../lib/pages/commands/actions.page';
import { delay } from '../lib/helper';

let browser;
let mypage;

beforeAll(async () => {
  browser = await new Browser().initialize();
});

afterAll(async () => {
  await browser.tearDown();
});

beforeEach(async () => {
  mypage = await browser.newPage();
});

afterEach(async () => {
  await mypage.close();
});


describe('Suite', () => {
  test('App renders', async () => {
    const page = new ActionsPage(mypage);
    const response = await page.visit('/');
    assert(response.ok());
    await mypage.screenshot({ path: './screenshots/app.png' });
  });

  test('fill the form', async () => {
    const page = new ActionsPage(mypage);
    const response = await page.visit('/commands/actions');
    assert(response.ok());
    await page.fillEmailField('valid@email.com');

    await delay(200);
  });
});
