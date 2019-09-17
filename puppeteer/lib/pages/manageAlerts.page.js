import Page from './page';

class ManageAlertsPage extends Page {
  async open() {
    return super.open('/admin/messages');
  }
}

export default ManageAlertsPage;
