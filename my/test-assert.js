'use strict';

// Flags: --expose-internals

const assert = require('assert');
const { URL } = require('../lib/internal/url')
const { isDeepEqual } = require('../lib/internal/util/comparisons')

// function assertDeepAndStrictEqual(a, b) {
//   assert.deepEqual(a, b);
//   assert.deepStrictEqual(a, b);
//
//   assert.deepEqual(b, a);
//   assert.deepStrictEqual(b, a);
// }
//
// function assertNotDeepOrStrict(a, b, err) {
//   assert.throws(
//     () => assert.deepEqual(a, b),
//     err || re`${a}\n\nshould loosely deep-equal\n\n${b}`
//   );
//   assert.throws(
//     () => assert.deepStrictEqual(a, b),
//     err || { code: 'ERR_ASSERTION' }
//   );
//
//   assert.throws(
//     () => assert.deepEqual(b, a),
//     err || re`${b}\n\nshould loosely deep-equal\n\n${a}`
//   );
//   assert.throws(
//     () => assert.deepStrictEqual(b, a),
//     err || { code: 'ERR_ASSERTION' }
//   );
// }
//
// // Comparing two different URL instances
// {
//   const a = new URL('http://foo');
//   const b = new URL('http://bar');
//
//   assertNotDeepOrStrict(a, b);
// }
//
// // Comparing two same URL instances
// {
//   const a = new URL('http://foo');
//   const b = new URL('http://foo');
//
//   assertDeepAndStrictEqual(a, b);
// }
//
// // Comparing two different URL instances
// {
//   const a = new URL('http://foo');
//   const b = new URL('http://foo');
//   a.bar = 1;
//   b.bar = 2;
//   assertNotDeepOrStrict(a, b);
// }
//
// // Comparing two same URL instances
// {
//   const a = new URL('http://foo');
//   const b = new URL('http://foo');
//   a.bar = 1;
//   b.bar = 1;
//   assertDeepAndStrictEqual(a, b);
// }

const url1 = new URL("http://foo1.com/");
const url2 = new URL("http://foo2.com/");
// console.log(url1, url2)
isDeepEqual(url1, url2);

