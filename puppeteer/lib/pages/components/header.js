class Header {
  constructor(page) {
    this.page = page;
  }

  async logout() {
    const selector = '.dropdown-toggle';
    await this.page.click(selector);
    const logoutListItemSelector = '.dropdown-menu [href="/users/sign_out"]';
    await this.page.click(logoutListItemSelector);
    return this.page.waitForSelector('.form-signin');
  }
}

export default Header;
