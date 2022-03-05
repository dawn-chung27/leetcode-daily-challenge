const coinChange = function(coins, amount) {
    let counter = 0;
    let leftAmount = amount;
    let sortedArr = coins.sort((a, b) => a - b);

    let minNum = sortedArr[0];
    let maxNum = sortedArr[sortedArr.length-1];

    let indicatorMax = -2;
    let indicatorMin = 2;

    for (let i = 0; i < coins.length; i++) {
      if (leftAmount >= maxNum) {
        leftAmount = helperMax(leftAmount);
        counter+=1;
      }
      if (leftAmount <= minNum) {
        leftAmount = helperMin(leftAmount);
        counter+=1;
      }
      if (leftAmount < maxNum && leftAmount > minNum) {
        maxNum = 
      }
    }
    
    return counter;
    
  };
  function indicatorMaxFunc(){
    maxNum = sortedArr[sortedArr.length-indicatorMax];
    i+=1;
  };
  function indicatorMinFunc(){
    maxNum = sortedArr[indicatorMin];
    i+=1;
  };

  function helperMax(leftAmount) {
    let newAmount = leftAmount;
    leftAmount = leftAmount - maxNum;
    
    return newAmount;
  };

  function helperMin(leftAmount) {
    let newAmount = leftAmount;
    leftAmount = leftAmount - minNum;
    
    return newAmount;
  };

const array1 = [1, 2, 5];
const amount1 = 11;
console.log(coinChange(array1, amount1));