/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
   var temp = [], up = false;
   
   while(true){
       
       let num = 0
       if(up) {num++; up = false;}
       
       if(num + l1.val + l2.val >= 10){
           num = (Math.floor((num + l1.val + l2.val)%10))
           up = true;
       }else{
           num += (l1.val + l2.val)
       }
           
       temp.push(num)
       
       
       if(l1.next === null && l2.next === null)
           break;
       
       if(l1.next != null)
        l1 = l1.next;
       else{
           l1.val = 0
           l1.next = null
       }
       
       if(l2.next != null)
        l2 = l2.next
       else{
           l2.val = 0
           l2.next = null
       }
       
       
    }
    console.log(temp)
    if(up) temp.push(1)
    return temp
    
};

