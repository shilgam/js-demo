import Page from './page';

class Header extends Page {
  async open() {
    return super.open('/');
  }

  async navigateToUtilitiesPage() {
    const selector = '.navbar [href="/utilities"]';
    await this.page.click(selector);

    return this;
  }
}

export default Header;
