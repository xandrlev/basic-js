const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let num = Math.min.apply(null, (n.toString().split('').sort((a, b) => a-b)));
  // return +(n.toString().replace(num, ''));

  n = Array.from(String(n));

  let ind = n.findIndex((elem, ind) => elem < n[ind + 1]);
  if (ind > -1) {
    n.splice(ind, 1)
  } else {
    n.splice(-1)
  }
  
  return +n.join('');
}

module.exports = {
  deleteDigit,
};
