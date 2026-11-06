import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('classic', () => {
  assert.equal(api.rot13('Hello, World!'), 'Uryyb, Jbeyq!');
});
test('alphabet', () => {
  assert.equal(api.rot13('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'NOPQRSTUVWXYZABCDEFGHIJKLM');
});
test('non ASCII', () => {
  assert.equal(api.rot13('123 é 😀'), '123 é 😀');
});
test('involution all ASCII', () => {
  const x = Array.from({ length: 128 }, (_, i) => String.fromCharCode(i)).join('');
  assert.equal(api.rot13(api.rot13(x)), x);
});
test('empty', () => {
  assert.equal(api.rot13(''), '');
});
test('type and budget', () => {
  assert.throws(() => api.rot13(1));
  assert.throws(() => api.rot13('a'.repeat(16385)));
});
