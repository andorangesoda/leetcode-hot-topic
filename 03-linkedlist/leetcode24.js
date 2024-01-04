/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 24. Swap Nodes in Pairs
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    // 指针不一定要按照固定间隔移动，可以直接移动到对应的位置
    let first = cur.next;
    let second = cur.next.next;

    // 交换
    first.next = second.next;
    second.next = first;
    cur.next = second;

    // 并移动当前指针
    cur = first;
  }
  return dummy.next;
};

// 虚拟头节点，是一个很好的解题技巧。有时候双指针完成不了的事，需要想到借助第三个指针
// 时间复杂度：O(n)
// 空间复杂度：O(1)
