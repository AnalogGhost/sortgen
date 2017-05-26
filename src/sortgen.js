"use strict";

(function() {
  const root = this;

  function sortgen() {
    console.log(root);
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
