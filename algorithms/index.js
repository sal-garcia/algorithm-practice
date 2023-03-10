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
  console.log(Object.keys(sLetters))
  return Object.keys(sLetters).length === 0
  // if the length of the keys in the array is 0 then its truthy else its falsy
};

console.log(isAnagram('anagram', 'nagaram'),'isAnagram (anagram tanagram)')
// validAnagram

//binarySearch

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;//length of array minus 1

  while (left <= right) {// while left is less or equal to right
    const middle = Math.floor((left + right) / 2); //0+5/2 =2.5= 2

    const potentialMatch = nums[middle];//nums[2]

    if (target === potentialMatch) { // if the target is the middle return middle which is the index
      return middle;
    } else if (target < potentialMatch) {//else increment or decrement
      right = middle - 1;
    } else {
      left = middle + 1
    }
  }
  return -1
};

//binarySearch

//FibbonacciNthNumber
//return the Nth number in a fibbonacci sequence
//LINEAR TIME
// function FibbonacciNthNumber(n){
//   if(n<3) return 1;

//   let prev = 1
//   let curr = 1

//   for (let i=2; i<n; i++){
//     let next = prev+curr;//--3--5
//     prev = curr;//1--2
//     curr=next//2--3
//   }
//   return curr
// }
//LINEAR TIME
//LOGARITHMIC TIME
function FibbonacciNthNumber(n){
  if(n<3){
    return 1
  }
  return FibbonacciNthNumber(n-1)+FibbonacciNthNumber(n-2)
}
//LOGARITHMIC TIME
console.log(FibbonacciNthNumber(6), '8thfibNthNumber')
console.log(FibbonacciNthNumber(5),'5thfibNthNumber')

//FibbonacciNthNumber


//FloodFill
//constrains
//m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n
//constrains

var floodFill = function (image, sr, sc, color) {
  const original = image[sr][sc] //red color starting point

  function recurse(image, sr, sc) {//check boundaries
    //if starting row is less than 0 or
    //if starting row is greater than images length -1(because constrains sr<m not sr<=m) or
    //if starting column is less than 0 or
    //if starting column is greater than first index of images length -1(because constrains sc<n) or
    //if image at sr and sc is not the same as the original or
    //if image at sr and sc is the same as color or
    //if these conditions are met return the image
    if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1 ||
      image[sr][sc] !== original || image[sr][sc] === color) {//checks boundaries
      return image // returns image as is if it meets if conditions
    }
    image[sr][sc] = color //color image at sr sc
    recurse(image, sr + 1, sc)//moves starting row down 1
    recurse(image, sr - 1, sc)//moves starting row up 1
    recurse(image, sr, sc + 1)//moves starting column by one to the right
    recurse(image, sr, sc - 1)//moves starting column by one to the left

    return image //return final updated image

  }
  return recurse(image, sr, sc);
}
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]],1,1,2),'floodfill([[1,1,1],[1,1,0],[1,0,1]]),1,1,2')
//FloodFill
