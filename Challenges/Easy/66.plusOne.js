var plusOne = (array) => {
//! using Number function
//   console.log(array)
//   let joiner = array.join('');
//   console.log(joiner)
//   let toInteger = Number(joiner);
//   console.log(toInteger);
// // data type length = up to 2 byte
//   toInteger += 1;
//   let toStrInt = toInteger.toString();
//   console.log(toStrInt)
//   let toArray = [];

//   for (let el of toStrInt) {
//     console.log(el)
//     toArray.push(Number(el));
//   }
//    return toArray;
//   console.log(toArray);
// }

// //! using parseInt()
//   console.log(array)
//   let joiner = array.join('');
//   console.log(joiner)
//   let toInteger = parseInt(joiner, 10);
//   console.log(toInteger);

//   toInteger += 1;
//   let toStrInt = toInteger.toString();
//   console.log(toStrInt)
//   let toArray = [];

//   for (let el of toStrInt) {
//     console.log(el)
//     toArray.push(parseInt(el, 10));
//   }
//    return toArray;
// }

//! using unshift

  for (let i = array.length-1; i >= 0 ; i--) {
    if (array[i] === 9) {
      array[i] = 0;
    } else {
      array[i] +=1;
      return array;
    }
  }
  array.unshift(1);

  return array;
}
// const arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// const arr1 = [1, 2, 3];
// const arr = [6,1,4,5,3,9,0,1,9,5,1,9,9,9,9,1,3];
const arr9 = [7,9,9,9,9,9,9,9,9,9,9,9,9,9,7,9,9];
const arr8 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
// integer보다 더  큰  데데이이터터타타입
// console.log(plusOne(arr1));

console.log(plusOne(arr9));
console.log(plusOne(arr8));

