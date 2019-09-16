import Page from './page';
import CampIndexPage from './campIndex.page';

class LoginPage extends Page {
  constructor(page = null) {
    super(page);
  }

  async open() {
    return super.open('/');
  }

  async fillEmailField(value) {
    await super.fillField('[name="user[email]"]', value);
  }

  async fillPasswordField(value) {
    await super.fillField('[name="user[password]"]', value);
  }

  async clickSubmitBtn() {
    const xpath = '//button[contains(text(), "LOG IN")]';
    await this.page.waitForXPath(xpath, 5000);
    const [button] = await this.page.$x(xpath);
    if (button) button.click();
    await this.page.waitForNavigation();

    this.page = new CampIndexPage(this.page);
    return this.page;
  }

  async login() {
    await this.fillEmailField(process.env.USERNAME_ADMIN);
    await this.fillPasswordField(process.env.PASSWORD_ADMIN);
    return this.clickSubmitBtn();
  }
}

export default LoginPage;
