// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

const generateMatrix = function(n) {
  if (n === undefined || n === 0) return undefined;
  
  let arr = [];

  let input = n; 
  let addSubArr = n; // to create number of sub-arrays in big arr
    while (input > 0) {
      arr.push([addSubArr])
      addSubArr+=1;
      input-=1;
    }

    let lengthOfArr = n;
    let totalNum = n * n;
    let count = 0;
    let i = 0;
    let j = 0;
// console.log(arr[0][0])
      while (i < lengthOfArr || i >= 0 || j < lengthOfArr || j >= 0 || count <= totalNum) { // i and j cannot be larger than n && less than 0
        arr[i].push(count);
        count+=1;
      }
    console.log(arr[0].push(2))
    console.log(arr)


    return arr;

};

console.log(generateMatrix(4));
// console.log(generateMatrix(0));


//create null or space for each element to sit in arrays
  // if n = 3, n numbers of arrays and n numbers of spots should be created

// use two indice, use count
  //need limit for stopping increment,
  //need limit for stopping decrement
