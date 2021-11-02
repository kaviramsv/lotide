

const eqArrays = require('./eqArrays');

const eqObjects = require('./eqObjects');


const assertObjectsEqual = function (obj1, obj2) {
   const inspect = require('util').inspect; // <= add this line
   if (eqObjects(obj1, obj2)) {
      console.log(`✅✅✅ Assertion Passed:${inspect(obj1)} === ${inspect(obj2)}`);
   } else {
      // console.log(`🛑🛑🛑 Assertion Failed: ${obj1} !== ${obj2}`);
      console.log(`🛑🛑🛑 Failed:${inspect(obj1)} !== ${inspect(obj2)}`);
   }
};

assertObjectsEqual({ a: '2', b: [1,2,3] }, { b:[1,2,3], a: '2' })

module.exports=assertObjectsEqual;