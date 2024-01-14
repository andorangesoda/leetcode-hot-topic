/**
 * 15. Three Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  for(let i=0; i<nums.length -2; i++) {
    // 1、先排序
    nums.sort((a, b) => a - b);
    // 排序完的第一个元素都大于 0 ，不会有三数之和为0
    if(nums[i]>0) return res;

    // 4、跳过重复元素。相邻元素重复可能产生重复结果。并且判断num[i]===nums[i+1]的方式不行。
    if(i>0 && nums[i] === nums[i-1]) {
      continue;
    }

    // 2、利用双指针找到三数之和为0的元素
    let left = i+1;
    let right = nums.length - 1;
    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right];
      if(threeSum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        // 3、跳过重复的元素，避免产生重复的结果，比如多个[-1,-1,2]
        while (left<right && nums[left] === nums[left+1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }else if (threeSum < 0) {
        // 当前数值太小，左指针需要往右边移动
        left++;
      }else {
        // 当前数值太大，右指针需要左移动
        right--;
      }
    }
  }
  return res;
};


// 示例：[-9,-1,-1,-1,-1,2,2]

// 思路：利用hash法，实现较为复杂，需要去重，判断多种情况
// 因为，题目不是获取下标，所以可以排序后，利用双指针实现。

// 时间复杂度：O(N^2)
// 空间复杂度：O(1)
