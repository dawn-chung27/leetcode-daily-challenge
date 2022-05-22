var removeDuplicates = function(nums) {
  let output = nums.length;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
          nums.splice(i, 1);
          output-=1;
          nums.length-1;
          i--;
      }
  }

  let nullCounter = output;
  while (nullCounter > 0) {
    nums.push(null);
    nullCounter-=1;
  }
  // return output;
  return arr2
};

const arr1 = [1,1,2];
const arr2 = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(arr2));