/* Given two arrays of strings, create a function that returns whether the second array is a subset of the first array.
*/

// 1st array 'hello', 'hi',
// 2nd array 'hi'

//  ouput wheter true or false;

const test = (arr1, arr2) => { // 'hi', 'hi'
  let counter = 0;
  let hashmap = {};
  arr1.forEach(element => {
  
  //  if (arr1.includes(element)) {
  //   counter++;
  //  } 
    (hashmap[element]) ? hashmap[element]++ : hashmap[element] = 1; 
    // hashmap: { 'hi' : 1}
  
  });
console.log(hashmap)
  for (let el of arr2) {
    if (hashmap[el]) {
      counter++;
      hashmap[el]--;
    }
    if (hashmap[el] === -1) return false;

  }
  
  return counter === arr2.length;
}

const arr1 = ['hello', 'hi', 'bye'];
const arr2 = ['hi', 'hi']; //

console.log(test(arr1, arr2));
//O(n)