
const head = require('../head');
const assertEqual = require('../assertEqual');
console.log(head([]));
console.log(head([5]));
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
