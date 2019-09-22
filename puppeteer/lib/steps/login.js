import LoginPage from '../pages/login.page';


async function loginAs(username, password) {
  const page = new LoginPage();
  await page.init();
  await page.open();
  await page.login(username, password);
  await page.close();

  return this;
}

export async function loginAsRegularUser() {
  await loginAs(process.env.USERNAME_REGULAR, process.env.PASSWORD_REGULAR);
}

export async function loginAsAdminUser() {
  await loginAs(process.env.USERNAME_ADMIN, process.env.PASSWORD_ADMIN);
}


// export default loginAsRegularUser;
