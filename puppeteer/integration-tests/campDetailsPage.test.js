import { loginAsRegularUser } from '../lib/steps/login';
import CampDetailsPage from '../lib/pages/campDetails.page';


describe('As regular user I want', () => {
  test('to access campaign Detail page', async () => {
    await loginAsRegularUser();

    const page = new CampDetailsPage();
    await page.init();
    await page.open(1001);

    await expect(page.page).toClick('button', { text: 'Download' });

    // click dim name
    await expect(page.page).toClick('.dimension-item', { text: 'Site' });

    // select dim values
    await expect(page.page).toClick('.dimension-value-item:nth-child(1)');
    await expect(page.page).toClick('.dimension-value-item:nth-child(2)');

    // dim charts displayed
    await expect(page.page).toMatchElement('#location-visits .relative-charts .chart');

    await page.close();
  });

  test('to download XLSX reports', async () => {
    const page = new CampDetailsPage();
    await page.init();
    await page.open(1001);

    // able to download standard XLSX report
    await expect(page.page).toClick('button', { text: 'Download' });

    await page.header.logout();
    await page.close();
  });
});
