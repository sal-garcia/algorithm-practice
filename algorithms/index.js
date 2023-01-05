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
