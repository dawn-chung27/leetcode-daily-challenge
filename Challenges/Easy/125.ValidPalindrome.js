var isPalindrome = function(s) {
    // let alphabetOnly = s.replace(/[^0-9a-zA-Z ]/g, '');
    // let removedSpace = alphabetOnly.replace(/ /g,'');
    // // console.log(removedSpace);
    // let splitedStr = removedSpace.split('');
    // console.log(splitedStr)
    // let reversedStr = splitedStr.reverse();
    // console.log(reversedStr)

    // return splitedStr === reversedStr;

  let pointerOne = 0;
  let pointerTwo = s.length -1;

  while (pointerOne < pointerTwo) {
    // 캐릭터가 알파벳이 아닐 경우 스킵
    while (!isValidChar(s.charAt(pointerOne))) {
      pointerOne++;
    }
    // 캐릭터가 알파벳이 아닐 경우 스킵
    while (!isValidChar(s.charAt(pointerTwo))) {
      pointerTwo--;
    }

    if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()) {
      return false;
    }

    pointerOne++;
    pointerTwo--;
    
  }
    return true;

};

let isValidChar = (char) => {
  let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return validChars.indexOf(char.toLowerCase()) > -1;
} 


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));


let input = 'abcde';
// console.log(input.length)
console.log(input[input.length-1])