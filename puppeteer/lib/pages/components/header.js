import QueryingPage from '../querying.page';

class Header {
  constructor(page) {
    this.page = page;
  }

  async navigateToQueryingPage() {
    const commandsDropdown = '.navbar .dropdown-toggle';
    await this.page.click(commandsDropdown);
    const queryingListItem = '.navbar [href="/commands/querying"]';
    await this.page.click(queryingListItem);
    this.page = new QueryingPage(this.page);
    return this.page;
  }
}

export default Header;
