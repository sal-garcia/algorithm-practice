//two sum
function twoSum(nums,target){
  for(let i=0;i<nums.length;i++){
    for(let j = i+1;j<nums.length;j++){ //i+1 rather than simply 1 to avoid j and i from landing on the same value twice
      if(nums[i]+nums[j]===target){
        return [i, j]//i and j only so that it grabs the indexes not the values
      }
    }
  }
}

console.log(twoSum([1,3,2],4), 'target is 4');
console.log(twoSum([1, 3, 2], 5),'targer is 5');
//two sum

//valid parentheses
function validParentheses (s) {
  let arr = [];
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else if (s[i] !== obj[arr.pop()]) { //if its not equal to the value of the property that has just been pushed in the if statement with the || conditions

      return false;
    }
  }
  return arr.length === 0; // for cases when the parentheses match it will skip the false return and make the array length 0 so that it returns
};// true is the arr length is 0 but false if its not 0

console.log(validParentheses('{}'), '{}' ,'validParentheses');
console.log(validParentheses('{}[]'), '{}[]', 'validParentheses');
console.log(validParentheses('[}'), '[}' , 'validParentheses');
console.log(validParentheses('[]}'), '[]}', 'validParentheses');
console.log(validParentheses('('), '(', 'validParentheses');
// would check if arr is empty which is not so it would return false
console.log(validParentheses(''), '', 'validParentheses');
// if length of array is 0 then true else false line 32

//valid parentheses

// best time to buy and sell

function maxProfit (prices){
  let minBuyPrice = prices[0]
  let max = 0
  for (let i =1;i<prices.length;i++){ // cant sell before i buy so start at 1
    const sellPrice=prices[i] // price you will be selling at
    const profit = sellPrice - minBuyPrice //sell price should be bigger subtract and find profit
    max = Math.max(max,profit) //if profit encounteres larger value than my max value  update the max value
    minBuyPrice=Math.min(minBuyPrice,prices[i]) //any time a day is cheaper to buy than the current min price i will update the variable
     //which will be subtracted from the sellPrice
  }
  return max // return max profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 'maxProfit buy at 1 sell at 6 [7,1,5,3,6,4]');
console.log(maxProfit([[7, 6, 4, 3, 1]]), 'maxProfit 0 [7,1,5,3,6,4]');



// best time to buy and sell
