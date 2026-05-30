/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        if (head === null) return head;
        let dummy = new ListNode(0, head);

        function recursive(prev, curr) {
            if (curr == null) return;
            if (curr.val == val) {
                let temp = curr.next;
                prev.next = curr.next;
                recursive(prev, curr.next);
            } else {
                recursive(curr, curr.next);
            }
        }

        recursive(dummy, head);
        return dummy.next;
    }
}
