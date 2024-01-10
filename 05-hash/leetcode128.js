/**
 * 128. Longest Consecutive Sequence
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  // 去重
  const setNums = new Set(nums);
  // 遍历列表，以当前元素为基准，判断是否有连续元素存在
  let maxLen = 0;
  for (let num of setNums) {
    // 如果存在 num-1 这个元素，说明之前当前序列已经被处理过了
    if (!setNums.has(num-1)) {
      // 如果不存在，说明当前元素是连续序列的起点元素，可以计算连续序列。
      let curNum = num
      let curLen = 1;
      while (setNums.has(num+1)) {
        curNum += 1;
        curLen += 1;
      }
      maxLen = Math.max(curLen, maxLen);
    }
  }
  return maxLen;
};

// 时间复杂度：O(n)，n是数组的长度
// 空间复杂度：O(n)
