var intersect = function(nums1, nums2) {
  let result = [];
  let hashmap = {};

  for (el of nums1) {
      (hashmap[el]) ? hashmap[el]++ : hashmap[el] = 1;
  }
  
  for (el2 of nums2) {
    if (hashmap[el2]) {
      result.push(el2);
      hashmap[el2]--;
    }
  }
  
  // console.log(hashmap);
  return result;
}

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

// console.log(intersect(nums1, nums2));

console.log(nums1.filter(x=> nums2.includes(x)))