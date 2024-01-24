// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * 101. Symmetric Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // 定义一个递归函数
  const check = (p, q)=>{
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
  }
  // 调用
  return check(root, root);
};

// 思路：利用双指针进行递归判断。根节点相同，左子树的左节点和右子树的右节点相同。
// 时间复杂度：O(n)，n表示节点数
// 空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。
