/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 19. Remove Nth Node From End of List
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 获取链表长度
  let len = 0;
  let p = head
  while(p) {
    p = p.next;
    len++;
  }

  // 边界条件
  if(len===0 || len < n) return head;
  if(len===n) {
    // 移除头节点
    head = head.next;
    return head;
  }

  // 找到待删除的节点的前一个节点，需要减1，因为cur一开始就指向了head节点
  let cur = head;
  let step = len -n -1;
  while (step--) {
    cur = cur.next
  }
  cur.next = cur.next? cur.next.next : null;
  return head;
};
// 暴力解法：链表不好从尾部遍历，所以需要获取链表长度，减去第n个节点，转换正向遍历时移除某个节点。
// 时间复杂度：O(n)
// 空间复杂度：O(1)



var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(0, head);
  let first = head, second = dummyHead;
  for(let i=1;i<=n;i++) {
    first = first.next;
  }
  while (first) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next? second.next.next :null;
  return dummyHead.next;
};
// 双指针：由于我们需要找到倒数第 n 个节点，因此我们可以使用两个指针 first 和 second 同时对链表进行遍历，并且 first 比 second 超前 n 个节点。
// 当 first 遍历到链表的末尾时，second 就恰好处于倒数第 n 个节点。
// 时间复杂度：O(n)
// 空间复杂度：O(1)
