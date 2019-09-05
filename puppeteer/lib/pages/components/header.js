class Header {
  constructor(page) {
    this.page = page;
  }

  async navigateToQueryingPage() {
    const commandsDropdown = '.navbar .dropdown-toggle';
    await this.page.click(commandsDropdown);
    const queryingListItem = '.navbar [href="/commands/querying"]';
    await this.page.click(queryingListItem);
    return this;
  }
}

export default Header;
