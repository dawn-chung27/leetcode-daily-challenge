// Q: Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let prefixComparer = strs[0];
  let prefix = [];

  if (strs.length === 1) return strs[0];
  if (strs.length === 0) return '';
  if (strs[0][0] !== strs[1][0]) return '';
  if (strs.length <= 2) return strs[0];

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (prefixComparer[j] === strs[i][j]) {
        prefix.push(strs[i][j]);
      } else if (prefixComparer[j] !== strs[i][j]) {
        prefix = prefix.slice(0, j);
      }
    }
  }

  prefix = prefix.join('');

  return prefix.length > 1 ? prefix : '';
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['atom', 'flow', 'alaska'])); // ""
console.log(longestCommonPrefix(['a'])); // a
console.log(longestCommonPrefix(['c', 'c'])); // c
console.log(longestCommonPrefix([])); // ""
console.log(longestCommonPrefix(['a', 'b'])); // ""
