const nums = [1,2,3,4,5,6,7];
const k = 3;
//3 / 8 = 3 
//!
var rotateSlice = function(nums, k) {
  // slice

  let firstHalf = nums.slice(-k);
  let secondHalf = nums.slice(0, nums.length-k);

  return firstHalf.concat(secondHalf)
}

console.log(rotateSlice(nums, k));

//!
var rotateUnshift = function(nums, k) {
  //unshift, pop
  while (k > 0) {
    nums.unshift(nums.pop())
    k--;
  }
  return nums;
}
console.log(rotateUnshift(nums, k))

const num2 = [1,2,3]
reverse()


console.log(nums.reverse());
