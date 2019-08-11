class CommandsActionsPage {
  constructor(page) {
    this.page = page;
  }

  async fillEmailField(value) {
    const selector = '.action-email';
    await this.page.click(selector);
    await this.page.type(selector, value);
  }
}

export default CommandsActionsPage;
