class Header {
  constructor(page) {
    this.page = page;
  }

  async navigateToUtilitiesPage() {
    const selector = '.navbar [href="/utilities"]';
    await this.page.click(selector);
    return this;
  }
}

export default Header;
