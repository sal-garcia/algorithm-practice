//validPalindrome

//1:put to lowercase all of the s string value
//2:replace, all of the letters and numbers in the string, globally so it should be tested against all possible matches in the string
//3:declare a variable to hold the VALUE of the index at s.length - 1
//4:loop thru that variable from 0 until its end
//5:if the VALUE at s[i] is not equal to the VALUE of s[s.length-1] return false
//6:then increment i by one and decrement the index of the lastindexofS variable
//7:return true outside of the variable if its condition is never met
var isPalindrome = function (s) {
  let i = 0
  s = s.toLowerCase()
  s = s.replace(/[^a-z0-9]/g, '')//selects all that meet regex conditional a-z0-9
  let lastIndexOfS = s.length - 1
  while (i < lastIndexOfS) {
    if (s[i] !== s[lastIndexOfS]) {
      return false
    }
    i++
    lastIndexOfS--
  }
  return true
}
console.log(isPalindrome('race car'),'isPalindrome(race car)')
//validPalindrome

//Two Sum II

//difference between two sum one is O(n) complexity, this one must be constant
//start by defining two POINTERS
//1:destructure 0 and the numbers array length-1 into two different variables
//2:left being 0 and right being the numbers.length-1
//3:while loops while left is less than right
//4:declare a sum variable and set it equals to numbers[left] + numbers[right]
//5:check if the sum is equal to target
//6:if it is return [left + 1 and right + 1] because of indexing
//7:if sum is less than target increment left
//8:if target is less than sum decrement right to move the right pointer thru the whole array
var twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left < right) {//0<2
    const sum = numbers[left] + numbers[right]; //numbers AT left and AT right
    // console.log(sum,'sum')

    if (sum === target) return [left + 1, right + 1];//because of indexing or else the solution would be [0,1] in the first test case


    if (sum < target) left++;


    if (target < sum) right--;
  }

};
console.log(twoSum([2, 7, 11, 15],9), 'twoSum([2,7,11,15],9)')
