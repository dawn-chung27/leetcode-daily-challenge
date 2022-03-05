//! understanding Dynamic Programming

// // Algorithms in Javascript
// // Leetcode 139. Word Break: https://leetcode.com/problems/word-break/
// // Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// // Note:
// // The same word in the dictionary may be reused multiple times in the segmentation.
// // You may assume the dictionary does not contain duplicate words.

// const wordBreak = (s, wordDict) => {
//   if(!wordDict) return false;
	
// //Create a DP table of len(s) elements, and set true when if mark index i when s(i) is a word that can be formed from wordDict
//   let dp = new Array(s.length + 1);

//   console.log(dp)

//   dp[0] = true; //word of length 0 is always true;
//   // let matches =[ ];
//   for(let i = 1; i <= s.length; i++) {
//     //i denotes that word length.
//     for(let j = 0; j<i; j++) {
// 	  	if(dp[i]) break; //will not need to set dp[i] if it's already true
//       if(dp[j] && wordDict.indexOf(s.substring(i,j)) >= 0) {
//         console.log(s.substring(i,j))
//         console.log(wordDict.indexOf(s.substring(i,j)))
// // dp[j] = previous substring, s.substring(i,j) = remaining substring
//         dp[i] = true;
//         console.log(dp[i])
//         break;
//       }
//     }
//   }
//   console.log(s.length)
//   console.log(dp)
//   console.log(dp[s.length])
//   console.log(Boolean(dp[s.length]))
//   return Boolean(dp[s.length]);
// };

// const s = 'leetcode';
// const wordDict = ['code', 'leet'];

// // const s2 = "applepenapple";
// // const wordDict2 = ["apple","pen"];

// // const s3 = "catsandog";
// // const wordDict3 = ["cats","dog","sand","and","cat"];


// console.log(wordBreak(s, wordDict));
// // console.log(wordBreak(s2, wordDict2));
// // console.log(wordBreak(s3, wordDict3));


//! To know better about Dynamic Programming or dp, started watching youtube tutorial https://www.youtube.com/watch?v=oBt53YbR9Kk
//? There are two main types of DP.
//? 1. memoization
  //! 1. Make it work. (brute force)
    //! * visualize the problem as a tree
    //! * implement the tree using recursion
    //! * test it
  //! 2. Make it efficient.
    //! * add a memo object (and share it along the way)
    //! * add a base case to return memo values
    //! * store return values into the memo
    //! * return the value of the memo
//? 2. Tabulation
//* first, going back to fib problem (recursion)
const fib = (n) => {
  // base case
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

console.log(fib(7));


//* using memoization
const fib2 = (n, memo = {}) => {
  // base case for memo
  if (n in memo) return memo[n]; //if n is found in the memo as key, returning the key

  if (n <= 2) return 1; // base case for finishing recursion
  memo[n] = fib2(n-1, memo) + fib2(n-2, memo); // storing the calculation of fib

  return memo[n]; // return memo[n] the result of calculation
}

console.log(fib2(7));
console.log(fib2(55));

//* how many routes can you get to the point A to point B (traverse)-grid
const routeCounter = (r, c, memo={}) => {
  //? brute force: O(2^n+m) time complexity
  //? using memo: O(m*n) time
  //? same O(n+m) space
  // base case for memo
  // declare a variable and its value will be r + c in string type
  const key = r + ',' + c; // storing key(location of r, c by seperating with comma)
  if (key in memo) return memo[key];
 
  // base case for edge cases
  if (r === 1 && c === 1) return 1;
  if (r === 0 || c === 0) return 0;

  // storing memo with calculation of r and c routes
  memo[key] = routeCounter(r-1, c, memo) + routeCounter(r, c-1, memo);
  // returning the memo
  return memo[key];
}


const r = 3;
const c = 3;


console.log(routeCounter(r, c)); // output # of routes
console.log(routeCounter(3, 2)); // output # of routes
console.log(routeCounter(18, 18)); // output # of routes


function ageCalculator(bornYear) {
  // let thisYear = 2021;
  let todayDate = new Date(); 
    console.log(todayDate)
  let thisYear = todayDate.getFullYear();
    console.log(thisYear);

  return thisYear - bornYear;
}


console.log(ageCalculator(1988));