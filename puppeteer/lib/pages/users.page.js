import Page from './page';

class UsersPage extends Page {
  async open() {
    return super.open('/users');
  }
}

export default UsersPage;
