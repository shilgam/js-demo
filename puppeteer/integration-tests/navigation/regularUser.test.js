import LoginPage from '../../lib/pages/login.page';
import CampDetailsPage from '../../lib/pages/campDetails.page';
import SearchPage from '../../lib/pages/search.page';
import ChangePasswordPage from '../../lib/pages/changePassword.page';
import DataApprovalsPage from '../../lib/pages/dataApprovals.page';
import CustomReportUploadPage from '../../lib/pages/customReportUpload.page';
import UsersPage from '../../lib/pages/users.page';
import ManageAlertsPage from '../../lib/pages/manageAlerts.page';
import CustomReportPage from '../../lib/pages/customReport.page';


describe('As regular user I can view', () => {
  test('IndexPage', async () => {
    const page = new LoginPage();
    await page.init();
    await page.open();

    const indexPage = await page.login(process.env.USERNAME_ADMIN, process.env.PASSWORD_ADMIN);
    const campListSelector = '.teams.list-view';
    const campListNode = await indexPage.waitForSelector(campListSelector);
    expect(campListNode).not.toBeNull();

    await page.close();
  });

  test('CampaignDetails Page', async () => {
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

  test('ChangePassword Page', async () => {
    const page = new ChangePasswordPage();
    await page.init();
    await page.open();

    const pageTitle = await page.getInnerText('.nd-content h1');
    expect(pageTitle).toMatch('Change Password');

    await page.close();
  });
});

describe('As admin user I can also view', () => {
  test('DataApprovals page', async () => {
    const page = new DataApprovalsPage();
    await page.init();
    await page.open();

    const selector = '.approval-table';
    const chartsNode = await page.waitForSelector(selector);
    expect(chartsNode).not.toBeNull();

    await page.close();
  });

  test('CustomReportUpload page', async () => {
    const page = new CustomReportUploadPage();
    await page.init();
    await page.open();

    const selector = '.upload-form';
    const chartsNode = await page.waitForSelector(selector);
    expect(chartsNode).not.toBeNull();

    await page.close();
  });

  test('Users page', async () => {
    const page = new UsersPage();
    await page.init();
    await page.open();

    const selector = '#users-table';
    const node = await page.waitForSelector(selector);
    expect(node).not.toBeNull();

    await page.close();
  });

  test('ManageAlerts page', async () => {
    const page = new ManageAlertsPage();
    await page.init();
    await page.open();

    const pageTitle = await page.getInnerText('.nd-content h1');
    expect(pageTitle).toEqual('Alerts');

    await page.close();
  });

  test('Custom LCIv2 Report page', async () => {
    const page = new CustomReportPage();
    await page.init();
    await page.open('1001last');

    const selector = '.nd-content #lci-result';
    const node = await page.waitForSelector(selector);
    expect(node).not.toBeNull();

    await page.close();
  });
});
