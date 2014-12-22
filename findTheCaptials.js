// Instructions

// Write a function capitals that takes a single string (word) as argument.
// The functions must return an ordered list containing the indexes of all
// capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

'use strict';

var capitals = function (word) {
  var indexes = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[i]) {
      indexes.push(i);
    }
  }

  return indexes;
};
