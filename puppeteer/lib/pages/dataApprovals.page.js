import Page from './page';

class DataApprovalsPage extends Page {
  async open() {
    return super.open('/admin/stats');
  }
}

export default DataApprovalsPage;
