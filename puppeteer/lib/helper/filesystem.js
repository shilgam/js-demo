
const fs = require('fs');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const os = require('os');
const path = require('path');

function createTmpDirPath() {
  return path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
}

function createTmpDir(dirPath) {
  mkdirp.sync(dirPath);
}

function removeTmpDir(dir) {
  rimraf.sync(dir);
}

function readFileFromDir(dir, filename) {
  return fs.readFileSync(path.join(dir, filename), 'utf8');
}

function writeToFile(dir, filename, content) {
  return fs.writeFileSync(path.join(dir, filename), content);
}

module.exports = {
  createTmpDirPath,
  createTmpDir,
  removeTmpDir,
  readFileFromDir,
  writeToFile,
};
