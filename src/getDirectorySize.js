// @ts-check

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)

// VERSION #1 for custom use(this passes tests too)

/* const getPath = (dirpath) => path.join(process.cwd(), dirpath);
const buildPath = (path_, filename) => path.join(process.cwd(), path_, filename);

const getDirectorySize = (dirPath, cb) => {
  fs.readdir(getPath(dirPath), (err, filesInDir) => {
    if (err) {
      cb(err);
      return;
    }
    const builtPaths = filesInDir.map((item) => buildPath(dirPath, item));
    async.map(builtPaths, fs.stat, (err1, stats) => {
      if (err1) {
        cb(err1);
        return;
      }
      const filterediles = stats.filter((item) => item.isFile());
      cb(null, _.sumBy(filterediles, (file) => file.size));
    });
  });
}; */

// VERSION #2 for tests use

const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (err, filenames) => {
    if (err) {
      cb(err);
      return;
    }
    const filepaths = filenames.map((name) => path.join(dirPath, name));
    async.map(filepaths, fs.stat, (err1, stats) => {
      if (err1) {
        cb(err1);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(null, sum);
    });
  });
};

export default getDirectorySize;
// END

/* info.js

Подсказки
fs.readdir() - чтение содержимого директории
path.join() - конструирует пути
async.map()
fs.stat() - информация о файле
_.sumBy() - нахождение суммы в массиве

Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает
размер переданной директории (не включая поддиректории). Анализ размера файла должен
происходить параллельно, для этого воспользуйтесь библиотекой async

Примеры
import { getDirectorySize } from './info.js';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
}); */
