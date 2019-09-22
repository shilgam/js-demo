import CampDetailsPage from '../lib/pages/campDetails.page';
import SearchPage from '../lib/pages/search.page';
import ChangePasswordPage from '../lib/pages/changePassword.page';
import DataApprovalsPage from '../lib/pages/dataApprovals.page';
import CustomReportUploadPage from '../lib/pages/customReportUpload.page';
import UsersPage from '../lib/pages/users.page';
import ManageAlertsPage from '../lib/pages/manageAlerts.page';
import CustomReportPage from '../lib/pages/customReport.page';
import CampIndex from '../lib/pages/campIndex.page';
import { loginAsRegularUser, loginAsAdminUser } from '../lib/steps/login';


describe('As regular user I can view', () => {
  test('Index Page', async () => {
    await loginAsRegularUser();

    const indexPage = new CampIndex();
    await indexPage.init();
    await indexPage.open();

    const campListSelector = '.teams.list-view';
    await expect(indexPage.page).toMatchElement(campListSelector);

    await indexPage.page.waitFor(3000);

    await indexPage.close();
  });

  test('Campaign Details Page', async () => {
    const page = new CampDetailsPage();
    await page.init();
    await page.open(1001);

    const selector = '.lci-graphs';
    await expect(page.page).toMatchElement(selector);

    await page.close();
  });

  test('Search Page', async () => {
    const page = new SearchPage();
    await page.init();
    await page.open();

    const selector = '.nd-content h1';
    await expect(page.page).toMatchElement(selector, { text: 'Search' });

    await page.close();
  });

  test('Change Password Page', async () => {
    const page = new ChangePasswordPage();
    await page.init();
    await page.open();

    const selector = '.nd-content h1';
    await expect(page.page).toMatchElement(selector, { text: 'Change Password' });

    await page.header.logout();

    await page.close();
  });
});


describe('As admin user I can also view', () => {
  test('Data Approvals page', async () => {
    await loginAsAdminUser();

    const aprrovalsPage = new DataApprovalsPage();
    await aprrovalsPage.init();
    await aprrovalsPage.open();

    const selector = '.approval-table';
    await expect(aprrovalsPage.page).toMatchElement(selector);

    await aprrovalsPage.close();
  });

  test('Custom Report Upload page', async () => {
    const page = new CustomReportUploadPage();
    await page.init();
    await page.open();

    const selector = '.upload-form';
    await expect(page.page).toMatchElement(selector);

    await page.close();
  });

  test('Users page', async () => {
    const page = new UsersPage();
    await page.init();
    await page.open();

    const selector = '#users-table';
    await expect(page.page).toMatchElement(selector);

    await page.close();
  });

  test('Manage Alerts page', async () => {
    const page = new ManageAlertsPage();
    await page.init();
    await page.open();

    const selector = '.nd-content h1';
    await expect(page.page).toMatchElement(selector, { text: 'Alerts' });

    await page.close();
  });

  test('Custom LCIv2 Report page', async () => {
    const page = new CustomReportPage();
    await page.init();
    await page.open('1001last');

    const selector = '.nd-content #lci-result';
    await expect(page.page).toMatchElement(selector);

    await page.header.logout();

    await page.close();
  });
});
