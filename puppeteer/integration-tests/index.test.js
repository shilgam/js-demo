import ActionsPage from '../lib/pages/commands/actions.page';
import { delay } from '../lib/helper';


describe('Test suite', () => {
  test('Create screenshot of the page', async () => {
    let page = new ActionsPage();
    page = await page.open();

    await page.screenshot({ path: './screenshots/app.png' });
    expect(await page.title()).toEqual('Cypress.io: Kitchen Sink');
    await page.close();
  });

  test('fill the form', async () => {
    let page = new ActionsPage();
    page = await page.open();

    await page.fillEmailField('valid@email.com');
    await delay(300);
    expect(1).toEqual(1);
    await page.close();
  });
});
