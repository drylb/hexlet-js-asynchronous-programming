// @ts-check

import os from 'os';
import { promises as fs } from 'fs';
import _ from 'lodash';
import touch from '../src/touch';

test('touch 1', () => {
  const filepath = `${os.tmpdir()}/example`;
  return fs.unlink(filepath)
    .catch(_.noop)
    .then(() => touch(filepath))
    .then(() => fs.access(filepath))
    .then((data) => {
      // @ts-ignore
      expect(data).toBe();
    });
});

test('touch 2', () => {
  const filepath = `${os.tmpdir()}/example`;
  return fs.unlink(filepath)
    .catch(_.noop)
    .then(() => fs.writeFile(filepath, 'content'))
    .then(() => touch(filepath))
    .then(() => fs.readFile(filepath, 'utf-8'))
    .then((data) => {
      expect(data).toBe('content');
    });
});

test('touch 3', () => {
  const filepath = `${os.tmpdir()}/example`;
  return fs.unlink(filepath)
    .catch(_.noop)
    .then(() => fs.writeFile(filepath, 'text'))
    .then(() => touch(filepath))
    .then(() => fs.readFile(filepath, 'utf-8'))
    .then((data) => {
      expect(data).toBe('text');
    });
});
