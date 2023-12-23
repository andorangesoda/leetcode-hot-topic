/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 206. Reverse Linked List
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    let next = null;
    while (cur) {
        // next 节点负责探路
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    // 返回头节点的位置
    return pre;
};

// 我印象中只需要2个指针，一前一后就能解题，没想到需要3个指针
// 时间复杂度：O(N)
// 空间复杂度：O(1)
