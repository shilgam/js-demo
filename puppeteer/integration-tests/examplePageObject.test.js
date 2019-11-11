import ActionsPage from '../lib/pages/actions.page';
import loginAs from '../lib/steps/login';

describe('PageObject example', () => {
  let page;
  let browserContext;

  beforeAll(async () => {
    const actionsPage = await loginAs('user@gmail.com');
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
