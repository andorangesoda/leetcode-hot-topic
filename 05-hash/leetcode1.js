/**
 * 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i=0;i<nums.length;i++) {
    let v1 = nums[i];
    let v2 = target - nums[i];
    if(map.has(v2)) {
      return [map.get(v2), i]
    } else {
      map.set(v1, i)
    }
  }
  return []
};
