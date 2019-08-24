/* global jest */

import config from 'config';

const jestConfig = config.get('jest');

jest.setTimeout(jestConfig.timeout);
