const eqArrays = function (arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

const assertArraysEqual=function (arr1,arr2){
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
const middle = function(array) {
  if (array.length<=2){
    return array;
  }
 mid_index=array.length/2;
 console.log(mid_index);
 let new_arr=[];
 
 if ((array.length%2)==0){
   new_arr.push(array[mid_index-1]);
   new_arr.push(array[mid_index]);
 }else{
   mid_index=Math.floor(mid_index);
  new_arr.push(array[mid_index]);
 }
console.log(new_arr);
return new_arr;
}

middle([1, 2, 3, 4]) // => [2, 3]
 middle([1, 2, 3, 4, 5, 6]) // => [3, 4]



 assertArraysEqual(middle([1, 2]) ,[ 1, 2])
 assertArraysEqual(middle([1]) ,[ 1])
 assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) ,[3, 4])
 assertArraysEqual(middle([1, 2, 3]) ,[2])
 assertArraysEqual(middle([1, 2, 3, 4, 5, 6 ,7]) ,[4])