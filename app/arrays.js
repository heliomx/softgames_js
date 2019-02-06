if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce((sum, el) => {
        return sum += el;
      });
    },

    remove : function(arr, item) {
      let filtered = arr.filter( el => {
        return el !== item;
      });
      return filtered;
    },

    removeWithoutCopy : function(arr, item) {
      let index;
      do {
        index = arr.indexOf(item);
        if (index >= 0)
        {
          arr.splice(index, 1);
        } 
      } while (index >= 0);

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      let newArray = [];
      return newArray.concat( arr.slice(0, index), item, arr.slice(index));
    },

    count : function(arr, item) {
      let reducer = ( ct, currentItem ) => {
        ct += currentItem == item ? 1 : 0;
        return ct;
      };

      return arr.reduce( reducer, 0 );
    },

    duplicates : function(arr) {
      let count = [];
      let duplicates = [];
      arr.forEach( item => {
        if (!count[item]) count[item] = 0;
        count[item]++;
        if (count[item] == 2) duplicates.push(item); 
      });
      
      return duplicates;
    },

    square : function(arr) {
      return arr.map(num => num * num);
    },

    findAllOccurrences : function(arr, target) {
      let ocurrences = [];
      arr.forEach( (el, index) => {
        if (el == target)
        {
          ocurrences.push(index);
        }
      });
      
      return ocurrences;
    }
  };
});
