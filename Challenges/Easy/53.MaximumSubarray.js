var maxSubArray = function(nums) {
  //if starting at first el, plus next el is larger than
  // previous sum, 
  let idx = 1;
  let currSubArr = nums[0];
  let maxSubArr = nums[0];
  
  while (idx < nums.length) {
      // left is smaller than next el, move left to right
      currSubArr = Math.max(nums[idx], currSubArr + nums[idx]);
      maxSubArr = Math.max(maxSubArr, currSubArr);
      idx+=1;
  }
  return maxSubArr;
};

const arr1 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr1));