// @ts-check
/* eslint-disable import/prefer-default-export */

import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)

const getPath = (dirpath) => path.join(process.cwd(), dirpath);
const buildPath = (path_, filename) => path.join(path_, filename);

const getDirSize = (dirPath) => {
  const filesInDir = fs.readdir(getPath(dirPath), 'utf-8')
    .then((filenames) => filenames.map((filename) => buildPath(dirPath, filename)))
    .then((buildedPaths) => buildedPaths.map((filepath) => fs.stat(filepath)))
    .then((stats) => Promise.all(stats))
    .then((result) => _.sumBy(result, (stat) => (stat.isFile() ? stat.size : 0)));
  return filesInDir;
};

export default getDirSize;

// END

/* Это упражнение вы уже делали, но теперь то же самое нужно сделать с помощью промисов.

file.js
Реализуйте и экспортируйте асинхронную функцию getDirectorySize(),
которая считает размер переданной директории (не включая поддиректории).

Пример:
import { getDirectorySize } from './file.js';

getDirectorySize('/usr/local/bin').then(console.log); */
