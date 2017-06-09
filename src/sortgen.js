"use strict";

(function() {
  const root = this;
  const previous_sortgen = root.sortgen;

  let sortgen = {
    keySort,
    noConflict
  }

  function noConflict() {
    root.sortgen = previous_sortgen;
    return sortgen;
  };

  function keySort(key,desc){
    return function(a,b) {
      return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    }
  }

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = sortgen;
    }
    exports.sortgen = sortgen;
  }
  else {
    root.sortgen = sortgen;
  }

}).call(this);
