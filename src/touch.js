/* eslint-disable no-console */
// @ts-check

import { promises as fs } from 'fs';

// BEGIN (write your solution here)
const touch = (filepath) => fs.access(filepath)
  .then(() => console.log('File with that name already exist'))
  .catch(() => fs.writeFile(filepath, ''));

export default touch;
// END

/* file.js
Реализуйте и экспортируйте асинхронную функцию touch(),
которая создаёт файл, если его не существует.

import { touch } from './file.js';

touch('/myfile').then(() => console.log('created!'));
 */
