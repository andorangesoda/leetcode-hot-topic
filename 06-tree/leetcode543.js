/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  // 存储直径
  let diameter = 0;
  const calcDepth = (root)=>{
    if(!root) return 0;
    // 计算左右子树深度
    const leftDepth = calcDepth(root.left);
    const rightDepth = calcDepth(root.right);
    // 更新直径
    diameter = Math.max(diameter, (leftDepth + rightDepth));
    // 返回左右子树较大的路径，用于上层节点累计进行计算。
    return Math.max(leftDepth, rightDepth) +1 ;
  }
  // 进行递归深度计算
  calcDepth(root);

  return diameter;
};

// 思路：递归，左右进行查找，计算左右子树到根节点的直径
// 时间复杂度：O(N)
// 空间复杂度：递归调用栈的最大深度是树的深度，空间复杂度为 O(h)，其中 h 是树的高度。在最坏情况下，二叉树可能成为链表，高度为 n，此时空间复杂度为 O(n)。
