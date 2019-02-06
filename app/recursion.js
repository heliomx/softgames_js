if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      let files = [];

      if (dirName == data.dir) dirName = null;

      data.files.forEach( item => {
        if (typeof item == 'string') { 
          if (dirName == null || dirName == data.dir)
            files.push(`${item}`);
        } else {
          files = files.concat( this.listFiles( item, dirName ));
        }
      });
      return files;
    },

    permute(arr) {
      let r = [];
    
      for (let k = 0; k < arr.length; k++) {
        let rest = this.permute(arr.slice(0, k).concat(arr.slice(k + 1)));
        
        if(!rest.length) {
          r.push([arr[k]])
        } else {
          for(let i = 0; i < rest.length; i++) {
            r.push([arr[k]].concat(rest[i]))
          }
        }
      }
      return r;
    }
  };
});
