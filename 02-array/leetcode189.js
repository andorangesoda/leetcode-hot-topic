/**
 * 189. Rotate Array
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const n = nums.length;
  if(!nums || n <2 ) return nums;

  // 处理 k 大于数组长度的情况，避免多余的旋转
  k = k % n;
  if(k === 0) return nums;

  // 先整体旋转(可以看成首尾两两交换),然后按k分组，左右2边都进行旋转
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  return nums;
};

function reverse(nums, start, end) {
  while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
  }
}

const nums = [1,2], k = 3
console.log(rotate(nums,k));// [2,1]

// 这题重点是，避免多余的旋转。
// 时间复杂度：O(N)
// 空间复杂度：O(1)