import Page from './page';

class CampIndexPage extends Page {
  async open() {
    return super.open('/');
  }
}

export default CampIndexPage;
