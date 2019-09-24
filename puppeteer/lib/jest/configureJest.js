/* global jest */

import config from 'config';
import setupExpectPuppeteer from '../helper/expectPuppeteer/setup';

const jestConfig = config.get('jest');
jest.setTimeout(jestConfig.JEST_TIMEOUT);

setupExpectPuppeteer();
