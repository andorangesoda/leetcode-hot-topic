/**
 * 56. Merge Intervals
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length <= 1) {
      return intervals;
  }
  // 先按照区间的起始位置进行排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 创建一个结果数组来存储合并后的区间
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
      let currentInterval = intervals[i];
      let lastMergedInterval = result[result.length - 1];
      // 如果当前区间的起始位置小于等于上一个合并区间的结束位置，说明它们重叠了
      if (currentInterval[0] <= lastMergedInterval[1]) {
          // 合并区间，取当前区间的结束位置和上一个合并区间的结束位置的较大值!!
          lastMergedInterval[1] = Math.max(currentInterval[1], lastMergedInterval[1]);
      } else {
          // 如果不重叠，直接将当前区间加入结果数组
          result.push(currentInterval);
      }
  }
  return result;
}

const intervals = [[1,4],[2,3]]
console.log(merge(intervals)) // [[1,4]]

// 时间复杂度，O(NlogN) ，主要是排序算法
// 空间复杂度：O(N)