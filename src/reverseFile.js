// @ts-check
import { promises as fs } from 'fs';

// BEGIN (write your solution here)

// VERSION #1-------------------------------------

/*
const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => (data.split('\n').reverse().join('\n')))
  .then((reversed) => fs.writeFile(filepath, reversed)); */

// VERSION #2-------------------------------------

const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fs.writeFile(filepath, preparedData);
  });

export default reverse;
// END

/* file.js
Реализуйте и экспортируйте асинхронную функцию reverse(),
которая изменяет порядок расположения строк в файле на обратный.

# file.txt
one
two
import { reverse } from './file.js';

reverse('file.txt');
// two
// one */
