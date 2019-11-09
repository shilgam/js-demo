import appConfig from '../lib/appConfig';

describe('Actions', () => {
  let page;

  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
    const pageUrl = `${appConfig.APP_URL}/commands/actions`;
    await page.goto(pageUrl);
  });

  afterAll(async () => {
    await page.close();
  });

  test('single selection', async () => {
    const selector = '.action-select';
    await page.focus(selector);
    await page.select(selector, 'fr-bananas');
  });

  test('multiple selections', async () => {
    const selector = '.action-select-multiple';
    await page.select(selector, 'fr-bananas', 'fr-oranges');
  });

  test('scroll to element', async () => {
    await page.evaluate(() => {
      const selector = '#scroll-horizontal button';
      document.querySelector(selector).scrollIntoView();
    });
  });

  test('Create screenshot of the page', async () => {
    await page.screenshot({ path: './screenshots/sampleScript.png' });
  });
});
