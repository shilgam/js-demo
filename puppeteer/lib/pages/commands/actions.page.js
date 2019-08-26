import Page from '../page';

class ActionsPage extends Page {
  async emailField() {
    return this.page.$('.action-email');
  }

  async open() {
    return super.open('/commands/actions');
  }

  async fillEmailField(value) {
    const selector = '.action-email';
    await this.page.focus(selector);
    await this.page.type(selector, value);
  }
}

export default ActionsPage;
