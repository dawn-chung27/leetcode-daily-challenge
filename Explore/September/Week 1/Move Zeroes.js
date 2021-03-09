/* Move Zeroes
Move zeroes to the backside of the array
*/

// //Method 1
let moveZeroes = function (nums) {
  let seungho = 'hello';
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      moveZeroes(nums);
    }
  }
  return nums.flat();
};
// seungho = 'not hello';
// console.log(seungho);
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0, 0, 1, 0, 1, 0, 0])); // [1,1,0,0,0,0,0]

//Method 2
// use filter to remove 0s. declare a new variable 'count' set it to 0.
// when element is 0, count goes up
// push the 0s while the 'count' is decreased down to 0;
// let count = 0;

// var moveZeroes = function (nums) {
//   nums.forEach((countZero) => {
//     if (countZero === 0) count++;
//   });

//   let newArr = nums.filter((zero) => zero !== 0);

//   while (count > -1) {
//     newArr.push(0);
//     count--;
//   }
//   return newArr;
// };

// // console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
const moveZeroes2 = function (nums, targetNum) {
  return nums
    .filter((el) => el !== targetNum)
    .push(nums.filter((el) => el === targetNum));
};
console.log(moveZeroes2([0, 0, 1, 0, 1, 0, 0], 0)); // [1,1,0,0,0,0,0]
