import Page from './page';

class SearchPage extends Page {
  async open() {
    return super.open('/search');
  }
}

export default SearchPage;
