import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('hello') === 'Hello');

assert(capitalize('') === '');

console.log('Все тесты пройдены!');
