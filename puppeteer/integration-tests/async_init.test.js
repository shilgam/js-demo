import assert from 'assert';
import Browser from '../lib/browser';

describe('async initialization', () => {
  test('App renders', async () => {
    let browser = new Browser();
    browser = await browser.initialize();

    const page = await browser.newPage();
    const response = await page.goto('http://example.com');
    assert(response.ok());
    await page.screenshot({ path: './screenshots/app.png' });

    await browser.tearDown();
  });
});
