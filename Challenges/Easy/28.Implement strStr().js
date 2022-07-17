var strStr = function(haystack, needle) {
  if (!needle) return 0;
//! 1st Trial

//   if (haystack.length < needle.length) return -1;
//   console.log(haystack.length, needle.length)
  
//     let firstIndex = -Infinity;
//     // let firstIndex = haystack.indexOf(needle[0]);
//     let x;


//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0]) {
//             x = i;
//             for (let j = 1; j < needle.length; j++) {
//                 x+=1;
//                 if (haystack[x] !== needle[j]) {
//                     break;
//                 } 
              
//             }
//             firstIndex = i;
//             return firstIndex;
//         }
//     }
      
//     return -1;
// };
  
//! 2nd trial
  let i = 0;
  while (haystack.substring(i, needle.length+i) !== needle && i <= haystack.length) {
    i++;
  }
  return (i < haystack.length) ? i : -1;
  
}

const haystack = 'hello';
const needle = 'll';

const haystack2 = 'aaa';
const needle2 = 'aaaa';

console.log(strStr(haystack, needle));
console.log(strStr(haystack2, needle2));