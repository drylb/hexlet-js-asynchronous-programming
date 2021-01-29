// @ts-check
/* eslint-disable import/prefer-default-export */

import fs from 'fs';
import async from 'async';

const { waterfall } = async;

// BEGIN (write your solution here)

// VERSION #1----------------------------------------------

/* const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall([
    function readFile(readFileCallback) {
      fs.readFile(inputPath1, 'utf-8', (err, data) => {
        if (err) {
          cb(err);
          return;
        }
        readFileCallback(null, data);
      });
    },
    function readFile1(firstFile, readFileCallback1) {
      fs.readFile(inputPath2, 'utf-8', (err1, data1) => {
        if (err1) {
          cb(err1);
          return;
        }
        readFileCallback1(null, firstFile, data1);
      });
    },
    function writeFile(firstFile, secondFile, callback) {
      fs.writeFile(outputPath, `${firstFile}${secondFile}`, (err2) => {
        callback(null, err2);
      });
    },
  ], (err, result) => {
    cb(result);
  });
}; */

// VERSION #2----------------------------------------------

export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall([
    (callback) => fs.readFile(inputPath1, callback),
    (data, callback) => fs.readFile(inputPath2, (err, data1) => callback(err, data, data1)),
    (data, data1, callback) => fs.writeFile(outputPath, `${data}${data1}`, callback),
  ], cb);
};

export default unionFiles;

// END

/* В библиотеке async есть функция waterfall(), которая позволяет строить цепочки асинхронных
функций без необходимости вкладывать их друг в друга. Подробнее о том как она работает,
посмотрите в документации. Попробуйте решить данное упражнение с применением этой функции.

file.js
Реализуйте и экспортируйте асинхронную функцию unionFiles(), которую мы рассматривали
в предыдущих уроках.Вот её обычное решение на колбеках:

Примеры
import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null); // не забываем последний успешный вызов
      });
    });
  });
}; */
