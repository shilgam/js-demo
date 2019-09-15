import LoginPage from '../lib/pages/login.page';

describe('Test suite', () => {
  test('Create screenshot of the page', async () => {
    const page = new LoginPage();
    await page.init();
    await page.open();

    await page.screenshot({ path: './screenshots/dash.png' });

    await page.fillEmailField(process.env.USERNAME_ADMIN);
    await page.fillPasswordField(process.env.PASSWORD_ADMIN);
    const indexPage = await page.clickSubmitBtn();
    const selector = '.navbar-title';
    const navBarTitle = await indexPage.getInnerText(selector);
    expect(navBarTitle).toEqual('LCI® Measurement Dashboard');
    indexPage.greeting();

    await page.close();
  });
});
