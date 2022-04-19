class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
     let node: ListNode = new ListNode();
     let head: ListNode = node;
     while (list1 !== null && list2 !== null) {
         if (list1.val < list2.val) {
             node.next = list1;
             list1 = list1.next;
         } else {
            node.next = list2;
            list2 = list2.next;
         }
         node = node.next;
     }
     if (list1 !== null) {
         node.next = list1;
     } else {
         node.next = list2;
     }
     return head.next;
};