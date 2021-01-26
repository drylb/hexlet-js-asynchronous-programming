// @ts-check

import path from 'path';
import fs from 'fs';
import getDirectorySize from '../src/getDirectorySize';

const getPath = (dirpath) => path.join('__fixtures__', dirpath);

test('getDirectorySize', () => (
  new Promise((done) => {
    const dirpath = getPath('/undefined');
    getDirectorySize(dirpath, (err) => {
      expect(err).not.toBeNull();
      done();
    });
  })
));

test('getDirectorySize2', () => (
  new Promise((done) => {
    const dirpath = getPath('/opt');
    if (!fs.existsSync(dirpath)) {
      fs.mkdirSync(dirpath);
    }
    getDirectorySize(dirpath, (err, size) => {
      expect(err).toBeNull();
      expect(size).toBe(0);
      done();
    });
  })
));

test('getDirectorySize3', () => (
  new Promise((done) => {
    const dirpath = getPath('/usr/local/bin');
    getDirectorySize(dirpath, (err, size) => {
      expect(err).toBeNull();
      expect(size).toBe(1240);
      done();
    });
  })
));

test('getDirectorySize4', () => (
  new Promise((done) => {
    const dirpath = getPath('/usr/local/lib');
    getDirectorySize(dirpath, (err, size) => {
      expect(err).toBeNull();
      expect(size).toBe(0);
      done();
    });
  })
));
