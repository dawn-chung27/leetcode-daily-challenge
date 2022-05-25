var mySqrt = function(x) {
  // input is 7, outcome is ...
  // 1, 2, 3, 4, 5, 6, 7
  // x is zero or all positive, decimals
  // return the square root of x.
  //need to use Math.floor method.
  
  // edge case: 
  if (x < 2) return x;
  
  // declare left, right pointer
  let left = 1;
  let right = x;
  
  // loop: left < right
  while (left < right) {
      let mid = Math.floor((left + right) / 2 );
      
      if (mid * mid === x) return mid;
      else if (mid * mid > x) right = mid;
      else if (mid * mid < x) left = mid+1;
  }
      return left-1;
  
};