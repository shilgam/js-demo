import puppeteer from 'puppeteer';

export const sayHello = name => `Hello, ${name}!`;

export const setupBrowser = async () => {
  let options;

  options = {
    args: [
      // Required for Docker version of Puppeteer
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      '--disable-dev-shm-usage',
    ],
  };

  if (process.env.HEADLESS === '0') {
    options = {
      ...options,
      ...{
        headless: false,
      },
    };
  }

  const browser = await puppeteer.launch(options);

  // const browserVersion = await browser.version();
  // console.log(`Started ${browserVersion} with options:`);
  // console.log(options);

  return browser;
};


export const tearDownBrowser = async (browser) => {
  await browser.close();
};
