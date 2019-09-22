// As a regular user, I can:
// access campaign Detail page
// dowload pancake report
// dowload standard report
// dowload png image for chart
// select dim value in chart

import { loginAsRegularUser } from '../lib/steps/login';
import CampDetailsPage from '../lib/pages/campDetails.page';


describe('As regular user I want', () => {
  test('to access campaign Detail page', async () => {
    await loginAsRegularUser();

    const detailsPage = new CampDetailsPage();
    await detailsPage.init();
    await detailsPage.open(1001);

    const selector = '.lci-graphs';
    await expect(detailsPage.page).toMatchElement(selector);

    await detailsPage.header.logout();

    await detailsPage.close();
  });
});
