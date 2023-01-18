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
    } else if (s[i] !== obj[arr.pop()]) { //if its not equal to the value that has just been pushed in the if statement with the || conditions

      return false;
    }
  }
  return arr.length === 0; // for cases when the parentheses match it will skip the false return and make the array length 0 so that it returns
};// true is the arr length is 0 but false if its not 0

console.log(validParentheses('{}'), '{}' ,'validParentheses');
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
    const sellPrice=prices[i]
    const profit = sellPrice-minBuyPrice
    max = Math.max(max,profit) //if profit is encounteres larger than my max value  update the max value
    minBuyPrice=Math.min(minBuyPrice,prices[i]) //any time a day is cheaper to buy than the current min price i will update
  }
  return max
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 'maxProfit [7,1,5,3,6,4]');


// best time to buy and sell
// valid palidrome

function isPalindrome (s) {
  let i = 0
  s = s.replace(/[^a-zA-Z0-9]/g, '') //replace (^from after the start of each character in the string or line ranges- a-z and A-Z and 0-9 g means to test the whole string) with no space
  s = s.toLowerCase()// then convert it to lower case
  for (let j = s.length - 1; i < j;) { //if i is less than j
    if (s[i] != s[j]) {

      return false
    }
    console.log(s[i], 'i')
    console.log(s[j], 'j')
    i++
    j--
  }// increment and check each time and if not one fails then exit and return true
  return true
}

//valid palindrome

//invert binary tree class
class TreeNode {
  constructor(val, left, right){
  this.val = (val === undefined ? 0 : val)
   this.left = (left === undefined ? null : left)
   this.right = (right === undefined ? null : right)
     }

    }
//invert binary tree class
//inverted binary tree function
// 1. If root is null, return null
// 2. Create pointer variable and assign it to root.left pointer moves root down
// so that the recursion can start again but from a different root
// 3. Change root.left to equal root.right
// 4. Change root.right to equal to temp
// 5. invertTree(root.left)
// 6. invertTree(root.right)

// n is the number of nodes
function invertTree (root) {
  if (root === null) return null;
  let pointer = root.left; // 2-- 1
  root.left = root.right; //7 -- null
  root.right = pointer; //2 -- null

  invertTree(root.left);//2 left goes first then right
  invertTree(root.right); // right is last to go

  return root
};
// console.log(invertTree([4, 2, 7, 1, 3, 6, 9]),'Inverted tree [4,2,7,1,3,6,9]')
//inverted binary tree function
