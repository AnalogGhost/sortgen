"use strict";

(function () {
  var root = this;
  var previous_sortgen = root.sortgen;

  var sortgen = {
    keySort: keySort,
    noConflict: noConflict
  };

  function noConflict() {
    root.sortgen = previous_sortgen;
    return sortgen;
  };

  function keySort(key, desc) {
    return function (a, b) {
      return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    };
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = sortgen;
    }
    exports.sortgen = sortgen;
  } else {
    root.sortgen = sortgen;
  }
}).call(this);