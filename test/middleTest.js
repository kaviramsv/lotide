
const assertArraysEqual = require('../assertArraysEqual');
const middle=require('../middle');

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]



assertArraysEqual(middle([1, 2]), [1, 2])
assertArraysEqual(middle([1]), [1])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])