//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  // 交换根节点左右子树
  root.left = right;
  root.right = left;
  return root;
};

// 思路：递归地对树进行遍历，翻转左右子树

// 时间复杂度：O（N）,需要遍历整棵树
// 空间复杂度：O(N)，使用的空间由递归栈的深度决定，它等于当前节点在二叉树的高度。
// 平均情况下，二叉树的高度与节点个数成对数关系，，即O(logN)
// 最坏情况下，树形成链，空间复杂度为O(N)
