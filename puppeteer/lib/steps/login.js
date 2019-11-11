import { writeToFile, readFromFile, fileExists } from '../helper/filesystem';

import ActionsPage from '../pages/actions.page';

async function loginAs(username) {
  let initializedPage;

  const pathToDir = '/usr/src/app/tmp/cookies';
  const pathToFile = `${pathToDir}/${username}.json`;

  if (fileExists(pathToFile)) {
    /**
      * read cookies
      */
    console.info('Cookies already exists. Reusing...');

    const page = new ActionsPage();
    await page.init();

    const cookieText = readFromFile(pathToFile);
    const cookieObj = JSON.parse(cookieText);

    await page.page.setCookie(...cookieObj);
    initializedPage = page;
  } else {
    /**
      * create and cache cookies
      */
    console.info('Cookies not found... Logging in with credentials');

    const page = new ActionsPage();
    await page.init();
    await page.open();
    // Login to create a cookie here
    const browserContext = await page.page.browserContext(); // eslint-disable-line
    const pages = await browserContext.pages();
    const indexPage = await pages[0];
    const cookieObj = await indexPage.cookies();
    const cookieText = JSON.stringify(cookieObj);
    writeToFile(pathToFile, cookieText);

    initializedPage = page;
  }
  return initializedPage;
}

export default loginAs;
