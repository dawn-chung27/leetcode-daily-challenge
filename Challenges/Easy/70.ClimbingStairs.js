var climbStairs = function(n) {
  // memoization func
  let counterFunc = (stairsRemaining, savedResult) => {    
  // base case 0, 1
      if (stairsRemaining < 0) return 0;
      if (stairsRemaining === 0) return 1;
  // memoization 
  //  * Read = recall
      if (savedResult[stairsRemaining]) return savedResult[stairsRemaining];
  // recursive case  * Post = storing
      savedResult[stairsRemaining] = counterFunc(stairsRemaining-1, savedResult) + counterFunc(stairsRemaining-2, savedResult);
      
  // return memoization
      return savedResult[stairsRemaining];
  }
  return counterFunc(n, {});
  
};
console.log(climbStairs(5))