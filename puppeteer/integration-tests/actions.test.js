import ActionsPage from '../lib/pages/actions.page';

describe('Test suite', () => {
  test('Create screenshot of the page', async () => {
    const page = new ActionsPage();
    await page.init();
    await page.open();

    // single selection
    const selector = '.action-select';
    await page.page.focus(selector);
    await page.page.select(selector, 'fr-bananas');

    // multiple selections
    const selectorMultiselect = '.action-select-multiple';
    await page.page.select(selectorMultiselect, 'fr-bananas', 'fr-oranges');

    // scroll to element
    await page.page.evaluate(() => {
      document.querySelector('#scroll-horizontal button').scrollIntoView();
    });

    await page.close();
  });
});
