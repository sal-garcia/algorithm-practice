const containsDuplicate = (nums) => {
  const numsSet = new Set(nums);/* Time O(N) | Space O(N) */
  // console.log(numsSet.length,'numsset')
  const isEqual = numsSet.size === nums.length;

  return !isEqual; // if not equal true if equal false
};

console.log(containsDuplicate([1, 2, 3, 1]),'containsduplicate([1,2,3,1])')
