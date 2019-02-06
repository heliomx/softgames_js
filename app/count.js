if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      let current = start;
      let interval = setInterval( () => {
        console.log(current);
        if(current == end) {
          clearInterval(interval);
        } else {
          current++;
        }
      }, 100);

      return {
        cancel: () => clearInterval(interval)
      }
    }
  };
});