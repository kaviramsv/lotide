// 

const assertEqual = require('./assertEqual');
const tail = function(arr) {
  if (arr.length === 0) {
    return [];
  } else {
    return arr.slice(1);//no need of if..silce of [] array returns []
  }

};

module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it// assertEqual(words.length, 3);
// ==================below to tailtest.js==========


// assertEqual(JSON.stringify(result), JSON.stringify(["Lighthouse", "Labs"])); // => will always fail!

