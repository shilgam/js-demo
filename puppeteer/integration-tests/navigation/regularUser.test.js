import LoginPage from '../../lib/pages/login.page';
import CampDetailsPage from '../../lib/pages/campDetails.page';
import SearchPage from '../../lib/pages/search.page';


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

  test('Campaign Details Page', async () => {
    const page = new CampDetailsPage();
    await page.init();
    await page.open(1001);

    const selector = '.lci-graphs';
    const chartsNode = await page.waitForSelector(selector);
    expect(chartsNode).not.toBeNull();

    await page.close();
  });

  test('Search Page', async () => {
    const page = new SearchPage();
    await page.init();
    await page.open();

    const pageTitle = await page.getInnerText('.nd-content h1');
    expect(pageTitle).toEqual('Search');

    await page.close();
  });
});
