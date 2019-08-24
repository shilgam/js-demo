import assert from 'assert';
import ActionsPage from '../lib/pages/commands/actions.page';
import { delay } from '../lib/helper';

let basePage;

beforeEach(async () => {
  basePage = await global.__BROWSER__.newPage();
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
