import Page from './page';

class ChangePasswordPage extends Page {
  async open() {
    return super.open('/users/edit');
  }
}

export default ChangePasswordPage;
