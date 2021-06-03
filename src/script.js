const { isEqual } = require('lodash');

const arrOne = [1, 2, 3];
const arrTwo = [1, 2, 3];

console.log("do arrOne and arrTwo have strict equality (referential identity) (===)?", arrOne === arrTwo);
console.log("do arrOne and arrTwo have deep value equality?", isEqual(arrOne, arrTwo));