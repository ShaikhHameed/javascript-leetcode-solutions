/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// CARRY BASED METHOD 
var addTwoNumbers = function(l1, l2) {
    // create a new List
    const MyLL = new ListNode(0); 
    let current = MyLL; // current node (HEAD). Will use for adding node next to it.
    let carry = 0; // Well...Duh.

    // Run this While loop until l1, l2 are null and there are no carried value
    while(l1!==null || l2!==null || carry!==0){
        // get current Node of both l1 and l2. get Zero if one list is smaller than the other. 
        let val1 = l1!==null? l1.val :0;
        let val2 = l2!==null? l2.val :0;

        const sum = val1+val2+carry // Duhh
        carry = Math.floor(sum/10) // carry foward sum. (If the sum is '175', '17' will get carry forward)
        current.next = new ListNode(sum%10) // keep only last digit of the sum
        current = current.next;
        
        // jump to next node for next iteration or leave it null if current node is null.
        if(l1!=null) l1 = l1.next;
        if(l2!=null) l2 = l2.next;
    }

    return MyLL.next; // return first current Node as HEAD
};