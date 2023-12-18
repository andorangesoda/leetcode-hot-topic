/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 0) return 0;

  let maxSum = nums[0];
  let curSum = nums[0];

  for(let i=1; i<nums.length; i++) {
    curSum = Math.max(nums[i], nums[i] + curSum);
    maxSum = Math.max(curSum, maxSum);
  }

  return maxSum;
};

// 动态规划适合那种， 具有一定公式的的题
// 时间复杂度： O(N)
// 空间复杂度：因为使用到变量，为 O(1)