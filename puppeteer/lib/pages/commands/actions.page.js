import Page from '../page';

class ActionsPage extends Page {
  async fillEmailField(value) {
    const selector = '.action-email';
    await this.page.click(selector);
    await this.page.type(selector, value);
  }
}

export default ActionsPage;
