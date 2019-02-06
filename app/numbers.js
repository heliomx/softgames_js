if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      let bin = num.toString(2);
      return Number(bin.charAt(bin.length - bit));
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      let lead = '00000000';
      let bin = num.toString(2,8);
      return (lead + bin).substring(bin.length);
    },

    multiply: function(a, b) {
      return Number((a * b).toFixed(8).replace(/0+$/,''));
    }
  };
});

