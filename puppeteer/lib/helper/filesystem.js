const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');

function tmpDirPath() {
  return '/usr/src/app/tmp';
}

function removeDir(dir) {
  rimraf.sync(dir);
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
  tmpDirPath,
  removeDir,
  writeToFile,
  readFromFile,
  fileExists,
};
