// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * 94. Binary Tree Inorder Traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res= [];
  const inorder = (root)=>{
    if(!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res;
};
// preorder 前序 、inorder 中序、postorder 后序
// 时间和空间复杂度：O（N）


// 利用栈来模拟实现
var inorderTraversal = function(root) {
  let res= [];
  const stack = [];
  let cur = root;
  while (cur || stack.length>0) {
    // 先把左节点都放入栈
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }

    const node = stack.pop()
    res.push(node.val);

    // 移到右节点
    cur = node.right;
  }
  return res;
};

