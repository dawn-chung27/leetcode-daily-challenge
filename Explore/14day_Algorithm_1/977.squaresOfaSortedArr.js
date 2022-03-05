var sortedSquares = function(nums) {
      // declare an empty array called 'squaredNums'
      let squaredNums = [];
      
      // iterate the 'nums' array and
      for (let el of nums) {
      // square each element,
      // push the element into the 'squaredNums'
          squaredNums.push(el * el);
      }
      // sort the 'squaredNums'
      squaredNums.sort((a, b) => a - b);
      // return the 'squaredNums'
      return squaredNums;
  };