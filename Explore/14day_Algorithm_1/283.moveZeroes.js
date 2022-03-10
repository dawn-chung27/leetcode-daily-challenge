var moveZeroes = function(nums) {
  let countZeros = 0;
  let filteredNums = nums.filter(x => {
      if (x == 0) countZeros+=1;
      return x != 0;
  });
  
  while (countZeros > 0) {
      filteredNums.push(0);
      countZeros--;
  }
  
  return filteredNums;    
};

const nums = [0,1,0,3,12];
console.log(moveZeroes(nums));