// @ts-check

// BEGIN (write your solution here)

// VERSION #1

/* const timer = (ms) => {
  const time = new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
  return time;
}; */

// VERSION #2

export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// END

/* timer.js
Реализуйте таймер в виде промиса.

import wait from './timer.js';

wait(100).then(() => console.log('time is over!'));
 */
