const { head, tail } = require('lodash');

const arr = [1, 2, 3];

console.log(head(arr), "is the head of", arr);
console.log(tail(arr), "is the tail of", arr);