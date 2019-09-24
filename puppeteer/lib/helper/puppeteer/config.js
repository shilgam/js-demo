const config = require('config');

const puppeteerConfig = config.get('puppeteer');

module.exports = puppeteerConfig;
