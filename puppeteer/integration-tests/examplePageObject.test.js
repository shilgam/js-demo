import ActionsPage from '../lib/pages/actions.page';

describe('PageObject example', () => {
  let page;
  let browserContext;

  beforeAll(async () => {
    const actionsPage = new ActionsPage();
    await actionsPage.init();
    browserContext = actionsPage.browserContext; // eslint-disable-line

    page = new ActionsPage(browserContext);
    await page.init();
    await page.open();
  });

  afterAll(async () => {
    await page.close();
    await browserContext.close();
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
