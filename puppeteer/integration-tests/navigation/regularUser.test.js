import LoginPage from '../../lib/pages/login.page';
import CampDetailsPage from '../../lib/pages/campDetails.page';


describe('Navigation', () => {
  test('Index Page', async () => {
    const page = new LoginPage();
    await page.init();
    await page.open();

    const indexPage = await page.login();
    const campListSelector = '.teams.list-view';
    const campListNode = await indexPage.waitForSelector(campListSelector);
    expect(campListNode).not.toBeNull();

    await page.close();
  });

  test('Search Page', async () => {
    const page = new LoginPage();
    await page.init();
    await page.open();

    // await page.login();
    const campDetailsPage = new CampDetailsPage();
    await campDetailsPage.init();
    await campDetailsPage.open();

    const pageTitle = await campDetailsPage.getInnerText('.nd-content h1');
    expect(pageTitle).toEqual('Search');

    await campDetailsPage.close();
    await page.close();
  });
});
