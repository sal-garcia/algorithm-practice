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

//Group Anagrams

function groupAnagrams(strs){
  let results = {}
  for (let word of strs){
    let arranged = word.split("").sort().join("")
    if (results[arranged]) {//if there is already a result
      results[arranged].push(word)//add it to the array
    }else{
      results[arranged] = [word]//else just assign that new arranged word the unarranged word in an array
    }
  }
  return Object.values(results) //returns the values as an array
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),'groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])')
//Group Anagrams

//Top K Frequent Elements

var topKFrequent = (nums, k) => {
  let storage = {}
  for (let num of nums) {
    storage[num] = (storage[num] ?? 0) + 1
  }
  return Object.entries(storage).sort((a, b) => b[1] - a[1]).map(val => Number(val[0])).slice(0, k);
}
//sort from biggest to smallest value not property which would be index[1] since
//Object.entries turns the property and value into an array which results in an array of arrays
//[[][][]]
//.map() then returns the result in a single array
// but first it turns the index at [0] of each of the arrays into a number
//then slice simply slices the result array from map from 0 - k
console.log(topKFrequent([3, 3, 3, 7, 7, 9],2),'topkFrequent[3,3,3,7,7,9],2')

//Top K Frequent Elements

//productOfArrayExceptSelf

function productExceptSelf(nums) {
  const result = [];
  let prefix = 1;//initiated at 1 else result[i] will be undefined
  let postfix = 1;
  //multiples whats to the left moving toward the right
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;//1,1,2,6 //cant use for of because i use [i] here
    prefix *= nums[i];//1,2,6,24
    console.log(result, 'result')
  }


  //multiplies whats to the right
  for (let i = nums.length - 2; i >= 0; i--) {//if i goes too far to left it becomes negative thus exits the loop
    postfix *= nums[i + 1];
    result[i] *= postfix; //cant be nums.length-1 because of this line
    //so that i can be reused
  }

  return result;
};
//the very last number of the array only runs thru the first foor loop

//productOfArrayExceptSelf
