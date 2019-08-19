/* global jest */

const config = require('config');

const jestConfig = config.get('jest');

jest.setTimeout(jestConfig.timeout);
