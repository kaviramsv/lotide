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

const letterPositions = function(sent) {
  
  // logic to update results here
  const res={};
 const noSpaces = sent;
 let ct=1;
 for (let i=0;i<noSpaces.length;i++){
    
    let letter=noSpaces[i];
    // console.log(letter);
    if (!res[letter]) {
      if(letter !==" ")
      {
      res[letter] =[i];
      // console.log("if",i);
    }
    }else{
   
      //console.log("else",i);
    res[letter].push(i);
    // console.log(res);
  }
  }
   //console.log("resfult final",res);
  return res;

};

letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").e, [1]);