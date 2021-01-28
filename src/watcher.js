// @ts-id
import fs from 'fs';

// BEGIN (write your solution here)

// VERSION #1

/* const watch = (filepath, period, cb) => {
  let lastCheckTime = Date.now();

  const id = (timerId) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      if (lastCheckTime < stats.mtimeMs) {
        cb(null);
        lastCheckTime = stats.mtimeMs;
      }
    });
  };
  const timerId = setInterval(() => id(timerId), period);
  return timerId;
}; */

// VERSION #2

const watch = (filepath, period, cb) => {
  let lastCheck = Date.now();
  const id = setInterval(() => fs.stat(filepath, (err, stats) => {
    if (err) {
      clearInterval(id);
      cb(err);
      return;
    }
    if (stats.mtimeMs > lastCheck) {
      lastCheck = stats.mtimeMs;
      cb(null);
    }
  }), period);
  return id;
};

export default watch;
// END

/* watcher.js
Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая следит за изменением файла
с заданной периодичностью. Функция должна возвращать идентификатор таймера, запущенного внутри.

Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек.
Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер
и вызвать колбек, передав туда ошибку.

Отслеживание изменений файла должно начинаться с момента вызова функции. Параметры функции:

Путь до файла, который нужно отслеживать
Период отслеживания
Колбек, принимающий аргументом ошибку
import watch from './watcher.js';

const timerId = watch(filepath, 500, (err) => {
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => clearInterval(timerId), 5000); // остановить отслеживание через 5 секунд */
