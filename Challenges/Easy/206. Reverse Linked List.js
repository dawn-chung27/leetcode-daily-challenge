function reverse() {
  if(!this.head) return false;
  let node = this.head;
  this.head = this.tail;
  this.tail = node;

  let prev = null;
  let next;

  for (let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5];
console.log(reverse(arr1))