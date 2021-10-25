const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${actual}`);
  }
};

const head = function(arr) {
  if (arr.length >= 0) {
    return arr[0];
  } else {
    return undefined;
  }

};

console.log(head([]));
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
