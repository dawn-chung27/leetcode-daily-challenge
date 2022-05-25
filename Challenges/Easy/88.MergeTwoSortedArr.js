var merge = function(nums1, m, nums2, n) {
  // nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  // output = [1,2,2,3,5,6]
  let first = m-1;
  let second = n-1;
  let i = m+n-1;
  
  
  //퍼스트가 세컨보다 작다는 커디션을 먼저 적을때 에러 뜸
  // while (second >= 0) {
  //     if (nums1[first] < nums2[second]) {
  //         nums1[i] = nums2[second];
  //         second--;
  //         i--;
  //     } else {
  //         nums1[i] = nums1[first];
  //         first--;
  //         i--;
  //     }
  //}
  
    while (second >= 0) {
        let fVal = nums1[first];
        let sVal = nums2[second];
      if (fVal > sVal) {
          nums1[i] = fVal;
          first--;
          i--;
      } else {
          nums1[i] = sVal;
          second--;
          i--;
      }
    }
  }