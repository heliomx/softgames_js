if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {

  return {
    createModule : function(str1, str2) {
      return (function() {
        function _sayIt()
        {
          return `${this.greeting}, ${this.name}`;
        }

        return {
          name: str2,
          greeting: str1,
          sayIt: _sayIt
        }
      })();
    }
  };
});

