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
    await expect(this.page).toClick('button', { text: 'LOG IN' });
    await this.page.waitForNavigation();

    this.page = new CampIndexPage(this.page);
    return this.page;
  }

  async login(username, password) {
    await this.fillEmailField(username);
    await this.fillPasswordField(password);
    return this.clickSubmitBtn();
  }
}

export default LoginPage;