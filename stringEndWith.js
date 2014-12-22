// Description:

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

'use strict';

function solution(str, ending){

  var diff = str.length - ending.length;

  if(diff < 0) return false;

  for (var i = str.length - 1; i >= 0; i--) {
    if ((i-diff) < 0) return true;
    if (str[i] !== ending[i-diff]) return false;
  }

  return true;
}
