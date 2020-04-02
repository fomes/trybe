const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:

const addOne = (ar) => {
  const newAr = ar.slice();
  for (let i in ar){
    newAr[i] += 1;
  }
  return newAr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
