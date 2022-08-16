var romanToInt = function(s) {
  // creaate a hashmap of roman numerals and what they mean
  const romanToInteger = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }
  // declare a result variable sum up 
  let result = 0;
  // iterate over s
  for (let i = 0; i < s.length; i++) {
      let curEl = romanToInteger[s[i]];
      let nextEl = romanToInteger[s[i+1]];
       // compare the current element with the next element, and the current number is smaller than the next element, we subtract current from next element,
       // match the current element with a key in hashmap 
      if (curEl < nextEl) {
          result = result + nextEl - curEl;
          // we increment i++
          i++;
      } else {
       // sum up on the result with the value
      result += curEl;
      }
  }
  // finally, we return our result
  return result;
};

const s = "MCMXCIV";
console.log(romanToInt(s));
