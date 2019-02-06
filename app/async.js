if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      let p = new Promise( (resolve) => {
        setTimeout( () => {
          resolve(value);
        }, 100);
      });
      return p;
    },

    manipulateRemoteData : function(url) {
      let p = new Promise( (resolve) => {
        $.get(url, {}, (data) => {
          let r = data.people.map( item => item.name ).sort();
          resolve(r);
        })
      });
      
      return p;
    }
  };
});
