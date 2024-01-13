/**
 * 11. Container With Most Water
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // 计算面积并存储较大面积
    let curArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, curArea);
    // 移动较小的数
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

// 思路：利用双指针，从两头往中间移动，每次计算面积后，较短的移动到下一位，再次比较大小
// 时间复杂度：O(n)
// 空间复杂度：O(1)
