function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }

var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode(-1);
let head = dummy; // {val: [-1]}
console.log(dummy)

while (list1 !==null && list2 !== null) {
 if (list1.val <= list2.val) {
   dummy.next = list1; //? dummy:  {val: [-1], next: [1,2,3]}???
     console.log(dummy.next)
   list1 = list1.next //? l1.next?
 } else {
   dummy.next = list2;
   list2 = list2.next;
 }
 dummy = dummy.next;
}
 if (list1 != null) {
     dummy.next = list1;
 } else {
     dummy.next = list2;
 };
 
 return head.next;
}





class LinkedList
{
    constructor()
    {
        this.head=null;
        //this.next=null;
        this.length=0;
    }

    addtoLast(value)
    {
        if(!this.head)
        {
            this.head={'value':value, 'next':null};
            this.length++;
        }
        else
        {
            let now=this.head;
            let newNode={'value':value, 'next':null};

            while(now.next!=null)
            now=now.next;

            now.next=newNode;   //it gives that error
            newNode.next=null;  //and it gives too!
            this.length++;
        }  
    }
}

//and my main function is:



let list1 = new LinkedList();
list1.addtoLast(1);
list1.addtoLast(2);
list1.addtoLast(3);
let list2 = new LinkedList();
list2.addtoLast(1);
list2.addtoLast(4);
list2.addtoLast(5);


console.log(mergeTwoLists(list1, list2));


//! practice

const mergeTwoSortedList = (l1, l2) => {
// list1 = [1, 2, 3];  
// list2 = [1, 4, 5];  
  let dummy = new ListNode(-1); // dummy: {val: -1, next: null}
  let head = dummy;

  while (l1&&l2) {
    if (l1.val <= l2.val) {   //  1 <= 1, 
      dummy.next = l1;        //  dummy: {val: -1, next: [1, 2, 3]}
      l1 = l1.next;           //  l1.next = [2, 3]
    } else {
      dummy.next = l2;        //  dummy: {val: -1, next: [1, 4, 5]}
      l2 = l2.next;           //  l2.next = [4, 5]
    }
  }
  dummy = dummy.next; 

  if (ls1 != null) {
    dummy.next = ls1;
  } else {
    dummy.next = ls2;
  }
}

console.log(mergeTwoSortedList(list1, list2));
