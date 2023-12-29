/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 142. Linked List Cycle II
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            // 相遇，将 slow 指向链表头，然后2个指针每次都前景一步，相遇则为环入口
            slow = head;
            while (slow!==fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null
};

// 如果存在环，两个指针最终会在环内相遇。然后，将其中一个指针重新指向链表头部，然后两个指针都每次移动一步，它们再次相遇的节点就是环的起始节点。
// 时间复杂度：O(N)
// 空间复杂度：O(1)

// 比较好理解的一个解题法，是利用哈希表，不过它的空间复杂度为O(N)
var detectCycle = function(head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};
