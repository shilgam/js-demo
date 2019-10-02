import appConfig from '../lib/pages/appConfig';

describe('Simple example', () => {
  let page;

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    const pageUrl = `${appConfig.APP_URL}/commands/actions`;
    await page.goto(pageUrl);
  });

  afterAll(async () => {
    await page.close();
  });

  test('fill in the form', async () => {
    const emailSelector = '.action-email';
    await expect(page).toFill(emailSelector, 'my@email.com');

    const passwordSelector = '#password1';
    await expect(page).toFill(passwordSelector, 'myPassword');

    await expect(page).toClick('button', { text: 'Submit' });

    const alertMsgSelector = '.action-form';
    const bodyHandle = await page.$(alertMsgSelector);
    const elemHtml = await page.evaluate(body => body.parentElement.innerHTML, bodyHandle);
    await bodyHandle.dispose();

    expect(elemHtml).toMatch('Your form has been submitted!');
  });

  test('navigate between pages', async () => {
    const commandsDropdown = '.navbar .dropdown-toggle';
    await page.click(commandsDropdown);

    const queryingListItem = '.navbar [href="/commands/querying"]';
    await page.click(queryingListItem);

    const pageUrl = `${appConfig.APP_URL}/commands/querying`;
    await page.goto(pageUrl);

    const selector = 'body h1';
    const headerText = await page.$eval(selector, e => e.innerText);

    expect(headerText).toEqual('Querying');
  });
});
