var isValid = function(s) {

  let brackets  = {
    '('  : ')',
    '['  : ']',
    '{'  : '}'
  }

  let heap = [];

  for (let character of s) {
    if (brackets[character]) {
      heap.push(brackets[character])
      console.log(heap)
    } else {
      if (heap.pop() !== character) return false;
    }
  }
  return (!heap.length);
}

console.log(isValid('({})'));