export default class Page {
  constructor(page) {
    this.page = page;
  }

  async visit(path) {
    const response = await this.page.goto(`${process.env.APP_URL}${path}`);
    return response;
  }
}
