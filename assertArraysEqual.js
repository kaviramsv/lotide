const eqArrays= function(arr1,arr2){

  for(let i=0;i<=arr1.length-1;i++){
    for(let j=0;j<=arr2.length-1;j++){
      // console.log(arr1[i],arr2[i]);
       if(arr1[i]!==arr2[i]){
         return false;
       }
     
    }
  }
  return true;
}

const assertArraysEqual=function (arr1,arr2){
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS