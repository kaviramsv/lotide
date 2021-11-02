const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {

  const new_obj = {};

  for (const key in itemsToCount) {

    if (itemsToCount[key] === true) {
      let ct = 0;
      for (let j = 0; j < allItems.length; j++) {
        if (allItems[j] == key) {
          ct++;
        }
      } //for
      console.log(ct);
      if (ct > 0) {
        new_obj[key] = ct;
      }
    }

  }
  console.log(new_obj);
  return new_obj;

}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// TEST CODE

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports=countOnly;