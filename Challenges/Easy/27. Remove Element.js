/*
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, 
with the first five elements of nums containing 0, 1, 3, 0, and 4. 
Note that the order of those five elements can be arbitrary. 
It doesn't matter what values are set beyond the returned length.
*/

// use a loop and filter only the non matching val

// let removeElement = function(nums, val) {
//     // console.log(nums); // [0,1,2,2,3,0,4,2]
//     return nums.filter(el => {
//      return (el !== val);
//     })
// };

// let removeElement = function(nums, val) {
//   // console.log(nums); // [0,1,2,2,3,0,4,2]
//   return nums.filter(el => {
//    return (el !== val);
//   })
// };

// console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5, nums = [0,1,4,0,3]

// console.log(removeElement([3,2,2,3,], 3)); // 2, nums = [2, 2]

//? Pass by reference??? what's that mean?
//! I shall approach in object way

// let removeElement = function(nums, val) {
// let obj = {};
// obj[nums.filter(el => {
//    return (el !== val);
//   }).length] = nums.filter(el => {
//     return (el !== val);
//    })

//    return obj;
// };
// console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5, nums = [0,1,4,0,3]
// console.log(removeElement([3,2,2,3,], 3)); // 2, nums = [2, 2]

//! I thought that filter method returns mutated value. It actually returns a whole new array with new elements.
//! Therefore, use "splice" method. It mutates the array.
let removeElement = function(nums, val) {
   let i = 0;
   while (i <= nums.length) {
      if (nums[i] === val) {
         nums.splice(i, 1);
         i--;
      }
      i++;
   }

   return nums;
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2)); 
console.log(removeElement([3,2,2,3], 3)); // 2, nums = [2, 2]
