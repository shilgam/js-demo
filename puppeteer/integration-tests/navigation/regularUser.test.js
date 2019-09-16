import LoginPage from '../../lib/pages/login.page';

describe('Test suite', () => {
  test('Create screenshot of the page', async () => {
    const page = new LoginPage();
    await page.init();
    await page.open();

    await page.screenshot({ path: './screenshots/dash.png' });

    // index page
    const indexPage = await page.login();
    const listSelector = '.teams.list-view';
    const listNode = await indexPage.page.waitForSelector(listSelector);
    expect(listNode).not.toBeNull();

    indexPage.greeting();

    await page.close();
  });
});
