/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let idx = 0;
  for (let i=0; i<nums.length; i++) {
    if(nums[i]!==0) {
      nums[idx++] = nums[i];
    }
  }

  for (let i=idx;i<nums.length;i++) {
    nums[i] = 0;
  }
};

// 思路：将非零数移到前面，然后直接补充0
// 时间复杂度：O(n)
// 空间复杂度：O(1)
