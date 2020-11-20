# next-random-nickname
> Random nickname.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-random-nickname
```

## apis
| api | params | description            |
| --- | ------ | ---------------------- |
| get | -      | Get a random nickname. |

## usage
```js
import NxRandomNickname from '@jswork/next-random-nickname';

// generate an array:
const results = [];
for (let index = 0; index < 10; index++) {
  results.push(NxRandomNickname.get());
}

console.log(results);

// random:
[ '豪气的木瓜',
  '纯真的油条',
  '从未表白的帽子',
  '高大的泡面',
  '要出家的馒头',
  '傻傻的黄豆',
  '乖乖的松球',
  '沉稳的饭卡',
  '爱搭讪的奔马',
  '飘逸的遥控器' ]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-random-nickname/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-random-nickname
[version-url]: https://npmjs.org/package/@jswork/next-random-nickname

[license-image]: https://img.shields.io/npm/l/@jswork/next-random-nickname
[license-url]: https://github.com/afeiship/next-random-nickname/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-random-nickname
[size-url]: https://github.com/afeiship/next-random-nickname/blob/master/dist/next-random-nickname.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-random-nickname
[download-url]: https://www.npmjs.com/package/@jswork/next-random-nickname
