// @ts-check
import fs from 'fs';

// BEGIN (write your solution here)
const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};

export default compareFileSizes;
// END

/* info.js
Реализуйте и экспортируйте асинхронную функцию compareFileSizes(),
которая сравнивает размеры двух файлов. Если первый больше второго,
то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.

import { compareFileSizes } from './info.js';

compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result)); */
