import Page from './page';

class IndexPage extends Page {
  greeting() {
    // console.log('>>> greeting()');
    return this;
  }

  async open() {
    return super.open('/commands/querying');
  }
}

export default IndexPage;
