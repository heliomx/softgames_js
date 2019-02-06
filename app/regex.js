if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      let re = /\d+/g;
      return re.test(str);
    },

    containsRepeatingLetter : function(str) {
      let re = /([a-z])\1+/i;
      return re.test(str);
    },

    endsWithVowel : function(str) {
      let re = /.*[aeiou]$/i
      return re.test(str);
    },

    captureThreeNumbers : function(str) {
      let re = /^.*?(\d{3})/;
      let r = false;
      if(re.test(str)) r = re.exec(str)[1];
      return r;
    },

    matchesPattern : function(str) {
      let re = /^\d{3}-\d{3}-\d{4}$/;
      return re.test(str);
    },
    isUSD : function(str) {
      let re = /^\$\d{1,3}\,?((\d{3}),?)*(\.\d{2})?$/;
      return re.test(str);
    }
  };
});
