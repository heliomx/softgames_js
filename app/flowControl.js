if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      let result = false;
      if (!isNaN(num))
      {
        result = '';
        result += num % 3 === 0 ? 'fizz' : '';
        result += num % 5 === 0 ? 'buzz' : '';
        if (result == '') result = num;
      }
      
      return result;
    }
  };
});
