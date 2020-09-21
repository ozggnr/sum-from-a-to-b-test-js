
function sum(fromN, toN) {
  if(fromN === toN) { //if the numbers are equal then return this number
    return fromN;
  }
  return sumToOne(toN) - sumToOne(fromN) + fromN;
};
function sumToOne(n) {
  if (n === 0) {
    return 0; //base case should be 0 if the number less than zero then recursion function should stop
  }
  return n + sumToOne(n - 1);
};
// console.log(sumToOne(1))
// console.log(sum(3,4))

module.exports = sum;
