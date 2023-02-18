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
console.log(isPalindrome(race car),'isPalindrome(race car)')
//validPalindrome
