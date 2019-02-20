# next-random-nickname
> Random nickname

## install:
```bash
npm install -S afeiship/next-random-nickname --registry=https://registry.npm.taobao.org
```

## apis:
| api | param | description       |
|-----|-------|-------------------|
| get | -     | Random a nickname |

## usgae:
```js
import NxRandomNickname from 'next-random-nickname';

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

## resouces:
- https://github.com/laii7/random-name
