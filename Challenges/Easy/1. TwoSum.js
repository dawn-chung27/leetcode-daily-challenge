// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// check on which Big O this is. Get a chart of Big Os

function twoSum(nums, target) {
// create edge case
  if (nums === undefined || target === undefined) return undefined;
// declare an empty array as 'matching pairs'
  let matchingPairs = [];

// iterate each index and iterate next each index to check the sum to match up with the target
  for (i = 0; i < nums.length; i++) {
  // after iterates, i should be incremented by one, j should be incremented by one
    for (j = i+1; j < nums.length; j++) {
  // use condition, if matches to the target, create a set of array with index as a pair. 
      if ((nums[i] + nums[j]) === target) matchingPairs.push(i, j);
    }
  }
// return 'matching pairs'
  return matchingPairs;
}


const num1 = [3, 2, 4];
const num2 = [2, 7, 4, 5, 2];

console.log(twoSum(2));
console.log(twoSum(num1, 6));
console.log(twoSum(num2, 9));
