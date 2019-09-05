import Page from './page';

class QueryingPage extends Page {
  greeting() {
    // console.log('>>> greeting()');
    return this;
  }

  async open() {
    return super.open('/commands/querying');
  }
}

export default QueryingPage;
