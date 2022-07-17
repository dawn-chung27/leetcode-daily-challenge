var rob = function(nums) {
  //! First Trial  (realized I was only skipping one next element no matter what)
  //     let oddIdx = 1;
  //     let evenIdx = 0;
      
  //     let sum1 = 0;
  //     let sum2 = 0;
      
  //     sum1 = helperFunc(nums, oddIdx, sum1);
  //     sum2 = helperFunc(nums, evenIdx, sum2);
      
  //     return sum1 > sum2 ? sum1 : sum2
  // };
  
  // const helperFunc = (nums, idx, sum) => {
  //     while (idx < nums.length) {
  //         sum += nums[idx];
  //         idx+=2;
  //     }
  //     return sum;
  // }

  //! Second Trial

  for (let i = 2; i < nums.length; i++) {
    nums[i] = nums[i] + Math.max(nums[i-1], (nums[i-2] || 0));
  }  
    return Math.max(nums[nums.length-1], nums[nums.length-2])
}
const nums = [2, 1, 1, 2, 4, 6, 3];
console.log(rob(nums));
