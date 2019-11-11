
const fs = require('fs');
const rimraf = require('rimraf');
const os = require('os');
const path = require('path');

function createTmpDirPath() {
  return path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
}

function createTmpDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeTmpDir(dir) {
  rimraf.sync(dir);
}

function readFileFromDir(dir, filename) {
  return fs.readFileSync(path.join(dir, filename), 'utf8');
}

function writeToFile(pathToFile, content) {
  const pathToDir = path.dirname(pathToFile);
  fs.mkdirSync(pathToDir, { recursive: true });
  fs.writeFileSync(pathToFile, content, (err) => {
    if (err) {
      console.info('Error writing file', err);
    }
  });
}

function readFromFile(pathToFile) {
  return fs.readFileSync(pathToFile, 'utf8', (err) => {
    if (err) {
      console.info('File read failed:', err);
    }
  });
}

function fileExists(pathToFile) {
  return fs.existsSync(pathToFile);
}

module.exports = {
  createTmpDirPath,
  createTmpDir,
  removeTmpDir,
  readFileFromDir,
  writeToFile,
  readFromFile,
  fileExists,
};
