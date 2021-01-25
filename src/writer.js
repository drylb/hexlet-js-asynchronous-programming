// @ts-check
import fs from 'fs';

// BEGIN (write your solution here)

// VERSION #1

export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, (err) => {
    if (err) {
      throw new Error('Something went wrong');
    }
    cb(null);
  });
};

// VERSION #2

/* export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, (_error, success) => {
    cb(success);
  })
}; */

// VERSION #3

/* export default (filepath, data, cb) => {
  fs.writeFile(filepath, data, cb);
}; */

// END

/* writer.js
Реализуйте асинхронную функцию, которая записывает данные по указанному пути и
оповещает о завершении работы через переданный колбек. Экспортируйте функцию
по умолчанию.

import write from './writer.js';

write('./myfile', 'data', () => {
  console.log('success');
}); */
