const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${actual}`);
  }
};

const tail = function(arr) {
  if (arr.length <= 0) {
    return [];
  } else {
    return arr.slice(1);
  }

};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it// assertEqual(words.length, 3);
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

let arr2 = ["Lighthouse", "Labs"];
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], arr2[i]);
}

// assertEqual(JSON.stringify(result), JSON.stringify(["Lighthouse", "Labs"])); // => will always fail!

