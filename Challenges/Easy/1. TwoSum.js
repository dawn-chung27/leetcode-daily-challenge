// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// // You may assume that each input would have exactly one solution, and you may not use the same element twice.

// // You can return the answer in any order.

 

// // Example 1:

// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Example 2:

// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// // Example 3:

// // Input: nums = [3,3], target = 6
// // Output: [0,1]


// // check on which Big O this is. Get a chart of Big Os

// function twoSum(nums, target) {
// // create edge case
//   if (nums === undefined || target === undefined) return undefined;
// // declare an empty array as 'matching pairs'
//   let matchingPairs = [];

// // iterate each index and iterate next each index to check the sum to match up with the target
//   for (i = 0; i < nums.length; i++) {
//   // after iterates, i should be incremented by one, j should be incremented by one
//     for (j = i+1; j < nums.length; j++) {
//   // use condition, if matches to the target, create a set of array with index as a pair. 
//       if ((nums[i] + nums[j]) === target) matchingPairs.push(i, j);
//     }
//   }
// // return 'matching pairs'
//   return matchingPairs;
// }


// const num1 = [3, 2, 4];
// const num2 = [2, 7, 4, 5, 2];

// // console.log(twoSum(2));
// // console.log(twoSum(num1, 6));
// // console.log(twoSum(num2, 9));


// // !Solution #2: O(n) returning value, not index

// function twoSum2(array, targetSum) {
//   // create an empty object, "nums"
//   let nums = {};
//   // iterate each element in array
//   for (let num of array) {
//     // const variable, "possibleMatchingNum" set value as targetSum - element of array
//     const possibleMatchingNum = targetSum - num;
//     // if possibleMatchingNum is found in the object, "nums"
//     if (possibleMatchingNum in nums) {
//     // return [possibleMatchingNum, element of array]
//     return [possibleMatchingNum, num]
//     // else set nums[element of array] = true;
//     } else {
//       nums[num] = true;
//     }
//   }

//   // return empty []; (for everything else)
//     return [];
// };

// const  nums3 = [2, 7, 4, 5, 2];

// console.log(twoSum2(nums3 , 9))



// 5/4/2022 Top Liked Qs.

function twoSum(array, target) {
  // first sort in asc order
  let result = [];
  let copyArr = array;
  let sortedArr = copyArr.sort((a, b) => a-b);
  // console.log(sortedArr);
  let left = 0;
  let right = sortedArr.length-1;
  console.log(left, right)

  while (left < right) {
    if (target === (sortedArr[left]+sortedArr[right])) {
      result.push(sortedArr[left], sortedArr[right]);
      console.log(result)
      break;
      
    }
    if (target < (sortedArr[left]+sortedArr[right])) {
      right -= 1;
    }
    if (target > (sortedArr[left]+sortedArr[right])) {
      left += 1;
    }

  }
  helper(array, result);
  
}
function helper(array, values) {
  let value1 = values[0];
  let value2 = values[1];
  let indices = [];
  let counter = 2;
  console.log(value1, value2)

  for (let i = 0; i < array.length; i++) {
    if (counter === 0) return indices;
    if (value1 === array[i]) {
      console.log(array)
      indices.push(i);
      counter-=1;
      console.log(indices)
    } 
    if (value2 === array[i]) {
     indices.push(i);
     counter-=1;
   } 
  }
  return undefined;
 }

const arr1 = [2, 5, 3, 1, 4];

console.log(twoSum(arr1, 7));