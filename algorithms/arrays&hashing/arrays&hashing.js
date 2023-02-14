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
  //the 1 that initiates the prefix and postfix are 1 so they dont have to mutate the very first value
  let prefix = 1;
  let postfix = 1;
  //multiples whats to the left moving toward the right
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;//1,1,2,6 //cant use for of because i use [i] here
    prefix *= nums[i];//1,2,6,24
    console.log(result, 'result')
  }


  //multiplies whats to the right moving towards the left
  for (let i = nums.length - 2; i >= 0; i--) {//if i goes too far to left it becomes negative thus exits the loop
    postfix *= nums[i + 1];
    result[i] *= postfix; //cant be nums.length-1 because of this line
    //so that i can be reused
  }

  return result;
};
//the very last number of the array only runs thru the first foor loop

//productOfArrayExceptSelf


//validSodoku

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {//creates a new row/col/box for every 9 iterations of the j in loop below
    let row = new Set();
    let col = new Set();
    let box = new Set();

    for (let j = 0; j < 9; j++) {//runs thru j first then once its done exits and increments i then reinitializes j and runs thru it again
      let _row = board[i][j];//[i0][j0]
      let _col = board[j][i];//[j0][i0]
      let _box = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)] //done in order left to right for both []
      if (_row != '.') {//CHECKS ROW IF ITS NOT .

        if (row.has(_row)) {//DOES SECOND CHECK ON ROW IS IT A DUPLICATE?
          return false;//IF IT IS RETURN FALSE
        }
        row.add(_row);// IF ITS NOT ADD IT TO THE SET OBJ
      }

      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true //IF IT NEVER RETURNS FALSE AND NONE OF THE VALUES DUPLICATE
};

//second for loop checks one row and column and box at a time by creating one single set object
//then checks the second column and row and box with a new set obj
//so on and so forth

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]),'isvalidsodoku')

//validSodoku
