(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NX_CONST_NOUN = nx.constNoun || require('@jswork/next-const-noun');
  var NX_CONST_ADJECTIVE = nx.constAdjective || require('@jswork/next-const-adjective');
  var nxSample = nx.sample || require('@jswork/next-sample');

  var NxRandomNickname = nx.declare('nx.RandomNickname', {
    statics: {
      get: function () {
        var noun = nxSample(NX_CONST_NOUN);
        var adj = nxSample(NX_CONST_ADJECTIVE);
        return adj + '的' + noun;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRandomNickname;
  }
})();
