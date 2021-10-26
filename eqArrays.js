const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${actual}`);
  }
};
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
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS