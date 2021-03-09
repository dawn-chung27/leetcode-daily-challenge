
const wordPattern2 = function (char, word) {
  let boolVal = false;
  if (char.length === undefined || word.length === undefined) return boolVal;

  let splittedChar = char.split(''); // ['a', 'b', 'b', 'a']
  let splittedWord = word.split(' '); // ['dog', 'cat', 'cat', 'dog']
  let obj = {};

  for (let i = 0; i < char.length; i++) {
    obj.hasOwnProperty(char[i]) && obj[char[i]] === splittedWord[i]
      ? (boolVal = true)
      : (boolVal = false);

    if (obj[char[i]] === undefined) obj[char[i]] = splittedWord[i];
  }

  let keysInArr = Object.keys(obj);
  let valsInArr = Object.values(obj);


function sameKeysVals(array) {
  return array.reduce((acc, cur) => {
    return acc === cur ? true : false;
  });
}
  if (valsInArr[0] === valsInArr[1] || keysInArr[0] === keysInArr[1]) {
    sameKeysVals(valsInArr);
    sameKeysVals(keysInArr)
  }

  // if (valsInArr[0] === valsInArr[1]) {
  //   return keysInArr.reduce((acc, cur) => {
  //     return acc === cur ? true : false;
  //   });
  // }
  return boolVal;
};
console.log(wordPattern2('abba', 'dog cat cat dog')); // true
console.log(wordPattern2('abba', 'dog dog cat dog')); //! false
console.log(wordPattern2('aaaa', 'dog dog dog dog')); // true
console.log(wordPattern2('abba', 'dog cat cat cat')); // false
console.log(wordPattern2('abba', 'dog dog cat cat')); // false
console.log(wordPattern2('bbbb', 'dog dog dog dog')); // true
console.log(wordPattern2('aaaa', 'dog cat cat dog')); //! false
if (char[0] === char[i] && word[0] === word[i]) return true; 
if (obj[char[i]] === && )