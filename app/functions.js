if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return (str2) => {
        return `${str}, ${str2}`;
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map( item => { 
        return () => fn(item)
      });
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null, str1, str2);
    },

    useArguments : function() {
      
      let sum = 0;
      for (let k = 0; k < arguments.length; k++)
        sum += arguments[k];
      console.log(arguments);
      return sum;
    },

    callIt : function(fn, ...params) {
      return fn.apply(null, params);
    },

    partialUsingArguments : function(fn, ...params) {
      return fn.bind(null, ...params);
    },

    curryIt : function(fn) {
      return (a) => (b) => (c) => fn(a,b,c);
    }
  };
});
