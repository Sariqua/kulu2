class Solution {

    divide(N,head){
   
     if(head===null)
   
       return head;
   
     let even = null;
   
     let evenTail=null;
   
     let odd = null;
   
     let oddTail = null;
   
     while(N>0){
   
       if(head.data%2===0){
   
         if(even===null){
   
           even = head;
   
           evenTail = head;
   
         }else{
   
           evenTail.next =head;
   
           evenTail = head;
   
         }
   
        
   
       }
   
       else{
   
         if(odd===null){
   
           odd = head;
   
           oddTail = head;
   
         }
   
         else{
   
           oddTail.next = head;
   
           oddTail = head;
   
         }
   
       }
   
       head = head.next;
   
       N--;
   
     }
   
     if(evenTail !== null)
   
       evenTail.next = odd;
   
     if(oddTail !== null)
   
       oddTail.next = null;
   
     return (even) ? even : odd;
   
    }
   
   }