import Page from './page';
import Header from './components/header';

class ActionsPage extends Page {
  constructor(page = null) {
    super(page);
    this.header = null;
  }

  async init() {
    await super.init();
    this.header = new Header(this.page);
  }

  async open() {
    return super.open('/commands/actions');
  }

  async fillEmailField(value) {
    await super.fillField('.action-email', value);
  }

  async fillPasswordField(value) {
    await super.fillField('#password1', value);
  }

  async clickSubmitBtn() {
    await expect(this.page).toClick('button', { text: 'Submit' });
  }

  async getAlertMsg() {
    const selector = '.action-form';
    const bodyHandle = await this.page.$(selector);
    const elemHtml = await this.page.evaluate(body => body.parentElement.innerHTML, bodyHandle);
    await bodyHandle.dispose();
    return elemHtml;
  }
}

export default ActionsPage;
