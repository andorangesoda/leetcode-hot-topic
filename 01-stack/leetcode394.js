/**
 * 394. Decode String
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    for(let char of s) {
        if(char !== ']'){
            stack.push(char);
        } else {
            let curStr = '';
            while(stack.length && stack[stack.length -1] !=='[') {
                // stack.pop()一定要放前面拼接，别写成 curStr += stack.pop()
                curStr = stack.pop() + curStr;
            }

            // 弹出 ' [ '
            stack.pop();

            // ' [ ' 前面就是数字了，但不会只有个位数，所有要循环处理。!isNaN()用来判断是数字
            let repStr = '';
            while (stack.length && !isNaN(stack[stack.length -1])){
                // 同理
                repStr = stack.pop() + repStr;
            }

            let repNums = parseInt(repStr);
            let realStr = ''
            for (let i = 1; i <= repNums; i++) {
                realStr += curStr;
            }
            // 存在嵌套的 ' [ ] ' ,所以还需要入栈
            stack.push(realStr);
        }
    }

    // 输出字符串
    return stack.join('');
};

// 时间复杂度：一个for循环，为O(N)
// 空间复杂度：使用到了一个线性增长的栈，为O(N)

console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('3[a2[c]]'))
console.log(decodeString('2[abc]3[cd]ef'))

// console.log(isNaN(1))
// console.log(isNaN('['))
// console.log(isNaN(undefined))

// console.log([1,5,7].join(','))
