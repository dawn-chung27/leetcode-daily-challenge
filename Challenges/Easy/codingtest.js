
  function maximumOccurringCharacter(text) {
    // Write your code here
    if (!text) return undefined;
    let hashmap = {};
    
    for (let el of text) {
         (hashmap[el]) ? hashmap[el]++ : hashmap[el] = 1;
    }
    
    let values = Object.values(hashmap);
    let maxChar = Math.max(...values);  
    let result = Object.keys(hashmap).find(key => hashmap[key] === maxChar);
    return result;
    
}

const text1 = 'helloworld';
console.log(maximumOccurringCharacter(text1)); // 14 min.


//? 2nd Q
// https://leetcode.com/discuss/interview-question/374846/Twitter-or-OA-2019-or-University-Career-Fair/337958
function maxEvents(arrival, duration) {
  // Write your code here  
  if (!arrival) return 0;
  
  let maxEvents = 0;
  let currArrive = 0;
  let minDur = 0
  
  for (let i = 0; i < arrival.length; i++) {
      if (currArrive !== arrival[i]) {
          if (currArrive + minDur <= arrival[i]) {
              currArrive = arrival[i];
              minDur = Math.min(minDur, duration[i]);
              maxEvents+=1;
          }
      }
          // minDur = Math.min(minDur, duration[i]);
  }
  return maxEvents;
}

// fetch('https://jsonmock.hackerrank.com/api/countries?name=%3Ccountry%3E')
//     .then(res => console.log(res))
    
console.log(x);
var x=5;
console.log(x);

console.log(y);
let y=5;
console.log(y);
/*main difference between let and var is that scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. So we can say that var is rather a keyword which defines a variable globally regardless of block scope.
*/

//? what's event loop
// The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. 