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
  return arr.length === 0; // for cases when the parentheses match it will skip the false return and make the array length 0 so that it returns true
};// i cant simply say return true for cases when i only have one parentherses '('

console.log(validParentheses('{}'), '{}' ,'validParentheses');
console.log(validParentheses('[}'), '[}' , 'validParentheses');
console.log(validParentheses('[]}'), '[]}', 'validParentheses');
console.log(validParentheses('('), '(', 'validParentheses');
console.log(validParentheses(''), '', 'validParentheses');

// would check if arr is empty which is not so it would return false


//valid parentheses
