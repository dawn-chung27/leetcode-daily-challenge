var isPowerOfThree = function(n) {
  // edge case:
  if (n === 0) return false;

  let exponent = (Math.log(n) / Math.log(3));
  console.log(exponent);
  let checker = Math.pow(3, exponent);
  console.log(checker);
  return checker === n;

}

console.log(isPowerOfThree(8));