const assert = require('assert')
const puppeteer = require('puppeteer')

let browser
let page

function delay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}

before(async() => {
  let options

  options = {
    args: [
      // Required for Docker version of Puppeteer
      '--no-sandbox',
      '--disable-setuid-sandbox',
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      '--disable-dev-shm-usage'
    ]
  }

  if (process.env.HEADLESS === '0') {
      options = {...options, ...{
          headless: false
      }};
  }

  browser = await puppeteer.launch(options)

  const browserVersion = await browser.version()
  console.log(`Started ${browserVersion} with options:`)
  console.log(options)
})

beforeEach(async() => {
  page = await browser.newPage()
})

afterEach(async() => {
  await page.close()
})

after(async() => {
  await browser.close()
})

describe('App', () => {
  it('renders', async() => {
    const response = await page.goto('http://web/')
    assert(response.ok())
    await page.screenshot({ path: `/screenshots/app.png` })

    console.log('>>> before waiting');
    await delay(1000);
    console.log('<<< after waiting');
  })
})
