const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

 const countLetters= function ( sent ){

 const res={};
 const noSpaces = sent.split(" ").join("");
 let ct=1;
 for (const letter of noSpaces){
    //console.log(letter);
  
    if (!res[letter]) {
      res[letter] =ct;
      // console.log(res);
     
    }else{
    // ct+=1;
    // res[letter]=ct;
    old_ct=res[letter];
    old_ct++;
    res[letter]=old_ct;
    // console.log(res);
  }
  }
  // console.log("resfult final",res);
  return res;
 }
 
 console.log(countLetters("lighthouse in the house"));


//  const ans={ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
 
 const result1 =countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);