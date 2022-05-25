var climbStairs = function(n) {
  // helper func
  let counterFunc = (stairsRemaining, savedResult) => {    
  // base case 0, 1
      if (stairsRemaining < 0) return 0;
      if (stairsRemaining === 0) return 1;
  // memoization 
  //  * Read
      if (savedResult[stairsRemaining]) return savedResult[stairsRemaining];
  //  * Post
      savedResult[stairsRemaining] = counterFunc(stairsRemaining-1, savedResult) + counterFunc(stairsRemaining-2, savedResult);
      
  // return memoization
      return savedResult[stairsRemaining];
  }
  // return helper func
  return counterFunc(n, {});
  
};
