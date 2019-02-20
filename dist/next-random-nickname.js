(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxRandom = nx.random || require('next-random');
  var NX_CONST_NOUN = nx.constNoun || require('next-const-noun');
  var NX_CONST_ADJECTIVE = nx.constAdjective || require('next-const-adjective');
  var len1 = NX_CONST_NOUN.length;
  var len2 = NX_CONST_ADJECTIVE.length;

  var NxRandomNickname = nx.declare('nx.RandomNickname', {
    statics: {
      get: function() {
        var noun = NX_CONST_NOUN[nx.random(0, len1)];
        var adj = NX_CONST_ADJECTIVE[nx.random(0, len2)];
        return adj + '的' + noun;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRandomNickname;
  }
})();
