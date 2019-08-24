import assert from 'assert';
import Browser from '../lib/browser';
import ActionsPage from '../lib/pages/commands/actions.page';
import { delay } from '../lib/helper';

let browser;
let basePage;

beforeAll(async () => {
  browser = await new Browser().initialize();
  console.log('>>>>>> beforeAll');
});


afterAll(async () => {
  await browser.tearDown();
  console.log('<<<<<< afterAll');
});

beforeEach(async () => {
  basePage = await browser.newPage();
});

afterEach(async () => {
  await basePage.close();
});


describe('Suite', () => {
  test('App renders', async () => {
    const page = new ActionsPage(basePage);
    const response = await page.visit('/');
    assert(response.ok());
    await basePage.screenshot({ path: './screenshots/app.png' });
  });


  test('fill the form', async () => {
    const page = new ActionsPage(basePage);
    const response = await page.visit('/commands/actions');
    assert(response.ok());
    await page.fillEmailField('valid@email.com');

    await delay(200);
  });
});
