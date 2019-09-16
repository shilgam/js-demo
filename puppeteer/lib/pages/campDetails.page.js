import Page from './page';

class CampDetailsPage extends Page {
  async open() {
    return super.open('/search');
  }
}

export default CampDetailsPage;
