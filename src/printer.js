/* eslint-disable no-console */
// @ts-check

import fs from 'fs';

// BEGIN (write your solution here)
export default (filepath) => fs.readFile(
  filepath,
  'utf-8',
  (_error, data) => console.log(data),
);

// END

/* printer.js
Реализуйте и экспортируйте по умолчанию асинхронную функцию,
которая читает данные файла по указанному пути и выводит их в консоль.

Примеры:

import print from './printer.js';
print('./myfile') */