var containsDuplicate = function(nums) { // Input [1, 2, 3, 1]
  // save occurences in a hashmap
  let hashmap = new Map();
  
  /*  
      hashmap = {
          1: undefined,
          2: undefined,
          3: undefined
      }
  */
  console.log('input: ', nums);
  
  for (let num of nums) {
      if (hashmap.has(num)) return true;
      else (hashmap.set(num));
  }
  
  return false;
};