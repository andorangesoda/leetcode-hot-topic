
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * 155. Min Stack
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);

  if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1]){
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  // 主栈弹出
  const node = this.stack.pop()
  if(this.minStack && this.minStack[this.minStack.length-1] === node){
    // 弹出的是最小元素时，最小栈中的最小元素需要弹出以维持实际的最小栈。
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack && this.stack[this.stack.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack && this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.getMin(); // return 0