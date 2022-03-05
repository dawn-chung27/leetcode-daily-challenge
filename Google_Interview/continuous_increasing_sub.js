var findLengthOfLCIS = function(nums) {
  let arrayOfOutput = [];
  // longestSub = 1;
  let longestSub = 1;
  // currentSub = 1;
  let currentSub = 1;
  // use iteration (for loop) to iterate all elements in array
  for (let i = 1; i < nums.length; i++) {
  // use if condition: 
      if (nums[i-1] < nums[i]) {
          currentSub+=1;
          longestSub = currentSub;
      // if the previous number is greater than current number,
          // then, the currentSub will increase by 1
      }
      if (nums[i-1] > nums[i]) { 
      // if the previous number is less than current number,
          // also, longestSub will store currentSub
          arrayOfOutput.push(longestSub);
          // then, the currentSub will be 1 again.
          currentSub = 1;
      }
  }
  // return longestSub with Maximum number out of the array;
  return Math.max(arrayOfOutput);

};      