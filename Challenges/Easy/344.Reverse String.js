const reverseString = function(s) {
  return reverse(s, 0, s.length-1);
};

const reverse = (s, left, right) => {
  if (left > right) return;

  let temp;
  temp = s[left];
  s[left] = s[right];
  s[right] = temp;

  reverse(s, left+1, right-1);
}

const s = ['h','e','l','l','o'];
console.log(reverseString(s))

//! 2nd Trial
//   let left = 0;
//   let mid = Math.floor(s.length/2);
//   let right = s.length-1;

//   while (left < mid) {
//     let temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//     left++;
//     right--;
//   }

//   return s;

// }
// const s = ['h','e','l','l','o'];


// console.log(reverseString(s))