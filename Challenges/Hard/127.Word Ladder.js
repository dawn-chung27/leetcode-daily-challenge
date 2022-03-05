let ladderLength = function(beginWord, endWord, wordList) {
  if (endWord != wordList[wordList.length-1]) return 0;

  //keep matching with endWord for every iteration of each element
  let counter = 0;
  let transformer = beginWord;

  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      
    }

    
  }

  return counter;
}
// match transformer with endWord by each letter if only 1 letter difference, counter++ return counter
// if 2 or more different, then 
  // move on to next word in the list and match with transformer
    // if 1 different, transformer now becomes that word and 
  // repeat Line 16-17
const beginWord = "hit";
const wordList = ["hot","dot","dog","lot","log","cog"] // 5 including 'hit'
console.log(ladderLength(beginWord, "cog", wordList));