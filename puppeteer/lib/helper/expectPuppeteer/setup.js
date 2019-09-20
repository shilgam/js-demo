import { setDefaultOptions } from 'expect-puppeteer';
import config from './config';

function setupExpectPuppeteer() {
  setDefaultOptions({ timeout: config.EXPECT_TIMEOUT });
}

export default setupExpectPuppeteer;
