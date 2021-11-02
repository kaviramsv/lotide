const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);
let arr2 = ["Lighthouse", "Labs"];
const assert = require('chai').assert;
describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(result,arr2);
  });
  
});