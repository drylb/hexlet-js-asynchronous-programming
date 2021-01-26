// @ts-check
import fs from 'fs';

// BEGIN (write your solution here)

// VERSION #1

/* const move = (initPath, destPath, cb) => {
  fs.readFile(initPath, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(destPath, data, (err) => {
      if (err) {
        cb(err);
        return;
      }
      fs.unlink(initPath, (err1) => {
        if (err1) {
          cb(err1);
          return;
        }
        cb(null);
      });
    });
  });
}; */

// VERSION #2

const move = (from, to, cb) => {
  fs.readFile(from, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.writeFile(to, data, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.unlink(from, cb);
    });
  });
};

// END
export default move;
/* file.js
Реализуйте и экспортируйте функцию move, которая асинхронно перемещает файл
из одного места в другое. Ее параметры:

Путь до файла исходника
Путь по которому нужно копировать файл
Колбек, у которого единственный аргумент — ошибка.
Алгоритм работы функции следующий:

Читаем исходный файл
Создаём новый файл и записываем туда данные исходного файла
(это важно сделать до попытки удаления исходного файла!)

Удаляем исходный файл

Реальная функция move устроена не так. Если исходник и приемник находятся на одном устройстве,
то копирования не происходит, меняются лишь указатели в фс

import { move } from './file.js';

move('/opt/myfile', '/tmp/newfile', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!')
}); */
