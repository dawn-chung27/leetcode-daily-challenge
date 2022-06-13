function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }

const solution = (arr) => {
  // Type your solution here 
  // left sum, right sum 


  if (!arr) return "Left";
  
  let leftSum = 0;
  let rightSum = 0;
  
  let helper = (root, sum) => {
    if (root.node == -1) sum+=0;
 
      if (root.node > -1) {
          sum += root.node;
      }
      helper(root.node, sum);
      return sum;
      
  }
  leftSum = helper(arr.left, arr.left);
  rightSum = helper(arr.right, arr.right);
  if (leftSum == rightSum) return "";
  console.log(leftSum, rightSum);
  return (leftSum >= rightSum) ? "Left" : "Right";
  
};
let arr = [3, 6, 2, 9, -1, 10];
let newArr = TreeNode(arr);
console.log(newArr)
console.log(solution(arr));
