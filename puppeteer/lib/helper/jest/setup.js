import jestConfig from './config';

function setupJest() {
  jest.setTimeout(jestConfig.JEST_TIMEOUT);
}

export default setupJest;
