const containsDuplicate = (nums) => {
  const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
  // console.log(numsSet.length,'numsset')
  const isEqual = numsSet.size === nums.length;

  return !isEqual; // if not equal true if equal false
};

console.log(containsDuplicate([1, 2, 3, 1]),'containsduplicate([1,2,3,1])')

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

console.log(isAnagram('anagram', 'nagaram'), 'isAnagram (anagram tanagram)')
// validAnagram

//two sum
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) { //i+1 rather than simply 1 to avoid j and i from landing on the same value twice
      if (nums[i] + nums[j] === target) {
        return [i, j]//i and j only so that it grabs the indexes not the values
      }
    }
  }
}

console.log(twoSum([1, 3, 2], 4), 'target is 4');
console.log(twoSum([1, 3, 2], 5), 'targer is 5');
//two sum
