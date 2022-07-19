const reverseString = function(s) {

//! 1st trial
  return reverse(s, 0, s.length-1);

};

const reverse = (s, left, right) => {
  if (left > right) return;

  let temp;
  temp = s[left];
  s[left] = s[right];
  s[right] = temp;

  return reverse(s, left+1, right-1);
}


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
const s = ['h','e','l','l','o'];


console.log(reverseString(s))