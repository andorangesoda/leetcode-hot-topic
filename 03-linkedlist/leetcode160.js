/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 160. Intersection of Two Linked Lists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 获取链表的长度
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    if(!lenA || !lenB) {
        return null;
    }

    // 处理多余长度
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    // 同时遍历链表 A 和链表 B,直到找到相交节点
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
};

function getLength(head) {
    let len = 0;
    while (head) {
        head = head.next;
        len++;
    }
    return len;
}

// 找到两个链表相交的节点，我原先的思路是，尾部对齐，从尾部从前找，下一个不相等，则当前是相交开始节点
// 但是这是链表，尾部开始遍历比较麻烦。
// 换个思路，让2个链表长度保存相等，那尾部自然就对齐了，直接从链表头部遍历即可
// 时间复杂度：O(N+M)
// 空间复杂度：O(1)
