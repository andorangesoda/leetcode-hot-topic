/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 21. Merge Two Sorted Lists
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(0);
    let cur = res;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1;
            list1 = list1.next;
        }else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    // 处理多余链表
    cur.next = (list1 ? list1: list2)
    return res.next;
};

// 时间复杂度：O(n+m)
// 空间复杂度：O(1)
// 这题我之前还以为需要创建新节点，结果直接指向待比较链表即可
