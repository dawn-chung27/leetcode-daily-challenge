var removeDuplicates = function(nums) {
  
  let index = 0; //1

  for (let i = 1; i < nums.length; i++) {
    const currNum = nums[i];
    const prevNum = nums[index]; // 1
    if (currNum !== prevNum) {
      // console.log(index);
      index++;
      nums[index] = currNum;
      console.log(index);
    }   
  }
  return index;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));