import ActionsPage from '../lib/pages/actions.page';

describe('Test suite', () => {
  test('Create screenshot of the page', async () => {
    const page = new ActionsPage();
    await page.init();
    await page.open();

    await page.screenshot({ path: './screenshots/app.png' });
    expect(await page.title()).toEqual('Cypress.io: Kitchen Sink');
    await page.close();
  });

  test('fill the form', async () => {
    const page = new ActionsPage();
    await page.init();
    await page.open();

    await page.fillEmailField('valid@email.com');
    await page.fillPasswordField('mySecretPassword');
    await page.clickSubmitBtn();
    const alertHtml = await page.getAlertMsg();
    expect(alertHtml).toMatch('Your form has been submitted!');
    await page.close();
  });

  test('navigate between pages', async () => {
    const page = new ActionsPage();
    await page.init();
    await page.open();

    const queryingPage = await page.header.navigateToQueryingPage();
    queryingPage.greeting();

    const selector = 'body h1';
    const headerText = await page.getInnerText(selector);
    expect(headerText).toEqual('Querying');

    await queryingPage.close();
  });
});
