const moveZeroes = function(nums) {
  // [3, 1, 0, 6, 9, 0, 12]
  // create two pointers
  // first pointer is first zero
  // second pointer is the next element
  // if so, switch places.
//   let firstPt = 0;
//   let secondPt = 0;
//   let zeroCounter = 0;
//   // count zeroes = 0 ++;
//   // use splice? use it from zero's place index to next zero's place index
//   for (let i = 0; i <= nums.length; i++) {
//       if (nums[i] === 0) {
//           zeroCounter++;
//           firstPt = i;
//           secondPt = firstPt+1;
//           nums[firstPt] = nums[secondPt];
           
//           nums.splice(secondPt, 1);
//       }
//   }
  
//   while (zeroCounter > 0) {
//     nums.push(0);
//     zeroCounter--;
//   }
//   return nums;
  
// };

//! Second trial
// let zeroCounter = 0;
// // count zeroes = 0 ++;
// // use splice? use it from zero's place index to next zero's place index
// for (let i = nums.length-1; i > 0; i--) { // [1, 0, 0, 1, 1, 0]
//     if (nums[i] !== 0) {
//         for (let j = i-1; j >=0; j--) {
//           if (nums[j] === 0) {
//             zeroCounter++;
//             nums[j] = nums[i];
//             nums.splice(i, 1);
//             break;
//           }
//         } 
//     }
// }

// while (zeroCounter > 0) {
//   nums.push(0);
//   zeroCounter--;
// }
// return nums;

// };
// const nums1 = [3, 0, 4, 0, 7, 12];
// const nums2 = [1, 0];
// console.log(moveZeroes(nums1));
// console.log(moveZeroes(nums2));
// console.log(moveZeroes([0,1,0,3,12])); // 1, 3, 12, 0, 0

// //! Third trial
  let index = 0; // 3, 4

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]; // curr num

    if (num !== 0) { // moving non-zero numbers to left
      nums[index] = num;
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }

  // return nums;
};

const nums1 = [3, 0, 4, 0, 7, 12];
const nums2 = [1, 0];
console.log(moveZeroes(nums1));
console.log(moveZeroes(nums2));
console.log(moveZeroes([0,1,0,3,12])); // 1, 3, 12, 0, 0
