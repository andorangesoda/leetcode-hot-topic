/**
 * 739.Daily Temperatures
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    // 初始化结果数组
    const ans = new Array(n).fill(0);
    const stack = [];

    for(let i=0; i<n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            const curIdx = stack.pop();
            ans[curIdx] = i - curIdx;
        }
        stack.push(i);
    }

    return ans;
};


// 时间复杂度：O(N)，其中 n 是温度列表的长度。正向温度遍历列表一次，对于温度列表中的每个下标，最多有一次的进栈和出栈的操作
// 空间复杂度：O(N)，需要维护一个单调栈存储温度列表的下标
