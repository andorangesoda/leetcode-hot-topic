/**
 * 20. Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 长度是奇数，一定匹配不了
  if (s.length % 2 === 1) return false;

  const stack = [];
  for(let i=0; i<s.length; i++) {
    if(s[i]==='(' || s[i]==='[' || s[i]==='{') {
      stack.push(s[i]);
    }else {
      // 先获取栈顶元素与当前元素进行匹配
      const node = stack[stack.length-1];
      if((node==='(' && s[i]===')')
      || (node==='[' && s[i]===']')
      || (node==='{' && s[i]==='}')){
        stack.pop();
      }else {
        return false;
      }
    }
  }
  return stack.length===0;
};

const s = '(]';
console.log(isValid(s));

// 分析：遍历字符串，遇到左括号就入栈，匹配右括号则出栈，不匹配直接返回false，循环结束栈为空则为true.
// 时间复杂度：一个for循环，为O(N)
// 空间复杂度：使用到了一个线性增长的栈，为O(N)