if (typeof define !== 'function') { var define = require('amdefine')(module); }
'use strict';
/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  
  let myObject = {
    name : 'Jory'
  };

  return {
    globals : function() {
      return myObject;
    },

    functions : function(flag) {
      let fn;
      if (flag) {
        fn = () => 'a';
      } else {
        fn = () => 'b';
      }

      return fn();
    },

    parseInt : function(num) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      return val1 === val2;
    }
  };
});
