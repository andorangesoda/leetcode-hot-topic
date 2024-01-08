/**
 * 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  // for...of 遍历数组、字符串的值，for...in 主要是遍历对象的属性、数组或数组的下标等
  for(let str of strs) {
    // 转换成字符数组并排序
    const sortedStr = str.split('').sort().join('');
    if(map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  }
  return Array.from(map.values())
};

// 思路就是利用Map, 存储str 和 anagrams
// 时间复杂度：O(K * log(K) * N) ,其中 K*log(K) 主要是排序，N 是数组长度
// 空间复杂度：O(N * K), 其中 K 是字符串平均长度

const a = 'safa';
console.log(a.split(''))
console.log(a.split('').sort())
console.log(a.split('').sort().join(''))
