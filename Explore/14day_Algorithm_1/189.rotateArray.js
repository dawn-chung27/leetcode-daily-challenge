var rotate = function(nums, k) {
  // slice method. 
  // take k number of elements from the end.
  // put (using unshift method) those cut elements in the start.
//   let slicedStart = nums.slice(0, nums.length-k);
//   console.log(slicedStart);
//   let slicedEnd = nums.slice(-k); 
//   console.log(slicedEnd);
//   let result = slicedEnd.concat(slicedStart);
//   console.log(result);
//   return result
// };
 // if k < nums.length use pop and unshift 
 if (k > nums.length) {
   k = k % nums.length;
   console.log(k);
   rotate(nums, k)
 }

 if (k < nums.length) {  
   for (let i = nums.length-1; i >= nums.length-k; i--) {
    let element = nums.pop(i);
    nums.unshift(element);
    console.log(nums);
   }
} 
  return nums;
// if k > nums.length use k % nums.length's remaining use rotate(nums, k) 
};

const input = [1,2,3,4,5,6,7];

console.log(rotate(input, 3));//Output: [5,6,7,1,2,3,4]