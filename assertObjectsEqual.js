const eqObjects = function(obj1, obj2) {

  let keys_1=Object.keys(obj1);
  let keys_2=Object.keys(obj2);

 if(keys_1.length!==keys_2.length){
    return false;
 }
 for(const key of keys_1){
    if(obj1[key]!==obj2[key]){
      if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
         return(eqArrays(obj1[key],obj2[key]));
       
      }
         return false;
    }
 }
 return true;
};

const assertObjectsEqual = function(obj1,obj2) {
   const inspect = require('util').inspect; // <= add this line
   if (eqObjects(obj1,obj2)) {
      console.log(`✅✅✅ Assertion Passed:${inspect(obj1)} === ${inspect(obj2)}`);
    } else {
      // console.log(`🛑🛑🛑 Assertion Failed: ${obj1} !== ${obj2}`);
       console.log(`🛑🛑🛑 Failed:${inspect(obj1)} !== ${inspect(obj2)}`); 
    }
 };

 assertObjectsEqual({ a: '1', b: 2 } ,{ b: 2, a: '2' })
 