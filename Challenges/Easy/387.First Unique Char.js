var firstUniqChar = function(s) {
  let hashmap = new Map();
  let result = [];
  
  for (let el of s) { // {l: 1, e: 3, t: 1, }
      (hashmap.get(el)) ? hashmap.set(el, hashmap.get(el)+1) : hashmap.set(el, 1);
  }
  
  //! solution 1: forEach loops all the way thru last value, key. Not returning during looping. It causes more delay.
//   hashmap.forEach((value, key)=> {
//       // console.log(value, key, s.indexOf(hashmap.get(key)))
//       console.log(value, key)
//       if (value === 1) {
//       result.push(key);
//       console.log(result)
//       // return s.indexOf(key); 
//       // return s.indexOf(key.toString()); 
//       // return s.indexOf(result[0])
//       }
//   })
//   return result[0] ? s.indexOf(result[0]) : -1
   
// }

//! solution 2. This is faster than solution 1. It can return during the loop.
for (let i = 0; i < s.length; i++) {
  if (hashmap.get(s[i]) === 1) return i;
}

return -1;
}

const s = 'leele';

console.log(firstUniqChar(s));