import Page from './page';

class ActionsPage extends Page {
  async open() {
    return super.open('/commands/actions');
  }

  async fillEmailField(value) {
    super.fillField('.action-email', value);
  }

  async fillPasswordField(value) {
    super.fillField('#password1', value);
  }

  async clickSubmitBtn() {
    const selector = '.action-form button';
    await this.page.waitFor(500); // TODO: implement wait for parent element change
    await this.page.click(selector);
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