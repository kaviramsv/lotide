const tail = require('../tail');
const assertEqual = require('../assertEqual');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

let arr2 = ["Lighthouse", "Labs"];
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], arr2[i]);
}