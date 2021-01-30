// @ts-check

import { promises as fs } from 'fs';

// BEGIN (write your solution here)

const getTypes = (filePaths) => {
  const initPromise = Promise.resolve([]);
  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, data.isDirectory() ? 'directory' : 'file'])
    .catch(() => [...result, null]);

  const resultPromise = filePaths.reduce(
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    initPromise,
  );
  return resultPromise;
};

export default getTypes;

// END

/* file.js
Реализуйте и экспортируйте асинхронную функцию getTypes(),
которая анализирует список переданных путей и возвращает массив (в промисе),
с описанием того, что находится по каждому из путей.

Эта функция должна отрабатывать успешно в любом случае.
Если во время выполнения асинхронной операции возникла ошибка,
то значением для этого пути будет null. Для простоты считаем,
что в эту функцию всегда передается как минимум один путь для обработки
(иначе придется задействовать механизм, который проходится в курсах далее).

Примеры
import { getTypes } from './file.js';

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
// ['directory', 'file', null]
 */

// export default getTypes;
