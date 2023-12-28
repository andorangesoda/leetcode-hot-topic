/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 141. Linked List Cycle
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    // 快指针走到末尾时
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            return true;
        }
    }
    return false;
};

// 利用快慢指针，一个走1步，一个走2步，遇到则说明有环。
// 时间复杂度：O(N)
// 空间复杂度：O(1)
