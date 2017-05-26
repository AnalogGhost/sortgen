"use strict";

(function() {
  const root = this;
  const previous_sortgen = root.sortgen;

  let sortgen = function() {
    console.log(root);
  };

  sortgen.noConflict = function() {
    root.sortgen = previous_sortgen;
    return sortgen;
  };

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
