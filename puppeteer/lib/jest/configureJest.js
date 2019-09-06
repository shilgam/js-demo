/* global jest */

import config from 'config';

function configureJest() {
  // # set default timeout
  const jestConfig = config.get('jest');
  jest.setTimeout(jestConfig.timeout);
}

module.exports = configureJest;
