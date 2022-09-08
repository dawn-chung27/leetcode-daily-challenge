var containsDuplicate = function(nums) { 
  //console.log('input: ', nums);
  // save occurences in a hashmap
  let hashmap = new Map();
  
  /*  
      hashmap = {
          1: undefined,
          2: undefined,
          3: undefined
      }
  */

  
  for (let num of nums) {
      if (hashmap.has(num)) return true;
      else (hashmap.set(num));
  }
  
  return false;
};