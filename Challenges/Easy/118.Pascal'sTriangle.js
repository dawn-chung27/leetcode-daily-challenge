var generate = function(numRows) { // 5
  const arr = []
 
 for (let i = 0; i < numRows; i++) { // i = 0, 1, 2, 3, 4
     const row = [1]
    //  console.log(arr)
     for (let j = 1; j < i; j++) { // j = 1, 2, 3, 

     //   console.log(arr[0-1][1-1] + arr[0-1][1]) // 처음 인덱스 -1

         row.push(arr[i-1][j-1] + arr[i-1][j])
      //   console.log(row)
     }
     
     if( i > 0 ) row.push(1) // 마지막 바깥에 1 추가하기
     
     arr.push(row)
 }
 console.log('this',arr[1])
 return arr
 /* [
row 1         [1],       arr[0]
row 2        [1,1],      arr[1]
row 3       [1,2,1],     arr[2]
row 4      [1,3,3,1],    arr[3]
row 5     [1,4,6,4,1]    arr[4]
     ]
*/
};

console.log(generate(5));