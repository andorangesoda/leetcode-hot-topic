// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * 104. Maximum Depth of Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) {
    return 0;
  }
  // 计算高度
  let leftHeight = maxDepth(root.left);
  let rightHeight = maxDepth(root.right);
  return Math.max(leftHeight, rightHeight) + 1;
};

// 时间复杂度：O(N) ，需要遍历整棵二叉树
// 空间复杂度：O(height)
