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
  let minBuyPrice = prices[0]// cant sell before i buy so start at 0
  let max = 0
  for (let i =1;i<prices.length;i++){ // start at 1 because i alraedy bought at 0
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
    // console.log(s[i], 'i')
    // console.log(s[j], 'j')
    i++
    j--
  }// increment and check each time and if not one fails then exit and return true
  return true
}
console.log(isPalindrome('tacocat'),'isPalindrome(tacocat)')
//valid palindrome

// validAnagram
 function isAnagram(s, t) {
  if (s.length !== t.length) { //checking that the length is not different
    return false
  }

  const sLetters = {}; //builds map

  for (let char of s) { // for every character in the string s
    if (!sLetters[char]) {
      sLetters[char] = 1 // if the character doesnt exist, mark it as occurring once

    } else {
      sLetters[char]++  // if the character is found increment that count
    }
  }
  for (let char of t) {  // if that character does not exist in t return false
    if (!sLetters[char]) {
      return false
    }
    if (sLetters[char]) { // if it is found in the map, then subtract it
      sLetters[char]--
    }
    if (sLetters[char] === 0) { // if it becomes 0, then delete that property from the map
      delete sLetters[char]
    }

  }
  // console.log(Object.keys(sLetters))
  return Object.keys(sLetters).length === 0
  // if the length of the keys in the array is 0 then its truthy else its falsy
};

console.log(isAnagram('anagram', 'nagaram'),'isAnagram (anagram tanagram)')
// validAnagram
