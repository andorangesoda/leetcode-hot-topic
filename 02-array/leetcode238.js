/**
 * 238. Product of Array Except Self
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // 用一个变量保存左边乘积
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
      result[i] *= leftProduct;
      leftProduct *= nums[i];
  }

  // 用一个变量保存右边乘积
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
  }

  return result.map(num => (num === 0 ? 0 : num));
};

console.log(productExceptSelf([1, 2, 3, 4])); // 输出: [24, 12, 8, 6]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // 输出: [0, 0, 9, 0, 0]

// 题目中 product 平时常见的是产品的意思，没想到还有乘积的意思
// 时间复杂度：O(N)
// 空间复杂度：O(1)

// 通过 result[i+1] 来存储 result[i] 位置前面的乘积
