// global jest

import setupExpectPuppeteer from '../helper/expectPuppeteer/setup';

import setupJest from '../helper/jest/setup';

// TODO: fix double calling
setupJest();
setupExpectPuppeteer();
