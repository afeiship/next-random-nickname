(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxRandomNickname = require('../src/next-random-nickname');

  var results = [];
  for (let index = 0; index < 200; index++) {
    results.push(NxRandomNickname.get());
  }
  console.log(JSON.stringify(results, null, 2));
})();
