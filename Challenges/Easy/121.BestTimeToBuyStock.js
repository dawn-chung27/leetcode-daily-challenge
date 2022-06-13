var maxProfit = function(prices) {
    
  let buy = prices[0]; // 1
  let profit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i]-buy, profit);
    }
  }
  return profit;
};

let prices1 = [7,1,5,3,6,4];
let prices2 = [7,6,4,3,1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));