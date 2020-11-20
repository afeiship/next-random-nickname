(function () {
  const NxRandomNickname = require('../src');

  const results = [];
  for (let index = 0; index < 10; index++) {
    results.push(NxRandomNickname.get());
  }
  console.log(JSON.stringify(results, null, 2));
})();
