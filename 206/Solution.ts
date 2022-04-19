class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    let fakeHead = new ListNode();
    reverse(head, fakeHead);
    return fakeHead.next;
};

function reverse(node: ListNode, fakeHead: ListNode) {
    if (node === null) {
        return fakeHead;
    }
    let tail: ListNode = reverse(node.next, fakeHead);
    tail.next = node;
    node.next = null;
    return node;
}