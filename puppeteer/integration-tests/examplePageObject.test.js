import ActionsPage from '../lib/pages/actions.page';

describe('PageObject example', () => {
  let page;

  beforeAll(async () => {
    page = new ActionsPage();
    await page.init();
    await page.open();
  });

  afterAll(async () => {
    await page.close();
  });

  test('fill the form', async () => {
    await page.fillEmailField('valid@email.com');
    await page.fillPasswordField('mySecretPassword');
    await page.clickSubmitBtn();
    const alertHtml = await page.getAlertMsg();

    expect(alertHtml).toMatch('Your form has been submitted!');
  });

  test('navigate between pages', async () => {
    const queryingPage = await page.header.navigateToQueryingPage();
    queryingPage.greeting();

    const selector = 'body h1';
    const headerText = await page.getInnerText(selector);

    expect(headerText).toEqual('Querying');
  });
});
