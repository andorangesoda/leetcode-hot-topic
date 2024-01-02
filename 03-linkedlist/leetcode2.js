/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2. Add Two Numbers
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  let carry = 0;
  while (l1 || l2) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;

    let sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);

    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
    cur = cur.next;
  }

  if(carry > 0) {
    cur.next = new ListNode(carry);
  }

  return dummyHead.next;
};

// 时间复杂度：O(Max(m,n)) , 其中m是l1的长度，n是l2的长度
// 空间复杂度：O(1)
