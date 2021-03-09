var mergeTwoLists = function(l1, l2) {
    let newArr = [];
  	let longerArr = l1;
  	let shorterArr = l2;

  	for (let i = 0; i < longerArr.length; i++) {
      newArr.push(longerArr[i], shorterArr[i]);
    }
  return newArr;
};


console.log(mergeTwoLists([1,2,4], [1,3,4]))