/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const temp = [];
  while (head !== null) {
    temp.push(head.val);
    head = head.next;
  }

  for(let i=0,j=temp.length-1; i<j; i++,j--) {
    if(temp[i]!==temp[j]) {
      return false;
    }
  }

  return true;
};

// 思路：有个空间复杂度为 O(1) 的解法，不过需要反转，中间部分到链尾的节点，然后利用双指针从链表头和链表中部往后移动，判断回文
// 这里为了不改动链表，使用了一个比较简单但是空间复杂度为 O(N) 的解法：将值复制到数组，然后利用双指针来判断

// 时间复杂度：O(N)
