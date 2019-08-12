import Page from './page';

class CommandsActionsPage extends Page {
  async fillEmailField(value) {
    const selector = '.action-email';
    await this.page.click(selector);
    await this.page.type(selector, value);
  }
}

export default CommandsActionsPage;
