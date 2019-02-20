(function() {
  var nx = require('next-js-core2');
  var NxRandomNickname = require('../src/next-random-nickname');

  test('init', function() {
    var results = [];
    for (let index = 0; index < 10; index++) {
      results.push(NxRandomNickname.get());
    }
    // console.log(results);
  });
})();
