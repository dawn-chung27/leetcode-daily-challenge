// 문제링크: https://leetcode.com/problems/first-bad-version/
// 사용언어: 자바스크립트
// 로직: 
// 포인터 세가지를 사용하고 ( left, right, pivot), while을 사용하여 안에 if 조건을 넣으므로서, array 안의 현재 가리키고있는 element가 true인지, 그리고 바로 이전 element는 false인지 확인하기
// pivot은 매번 받아오는 array의 가운데 element가 되도록 만들고,
// pivot이 가리키는 element가 'true'이면서 동시에 pivot-1이 가리키는 element는 'false'라면, 우리가 찾는 first bad version이므로 pivot을 리턴한다.
// pivot은 if 조건문을 통해 값이 'false' 일 경우에는 'left'를 pivot+1으로 reassign 하며,
// pivot은 if 조건문을 통해 값이 'true' 일 경우에는 'right'를 pivot-1으로 reassign 한다.

// 성능: Big O notation as O(log n), Runtime: 60 ms & Memory Usage: 41.8 MB
// 솔루션:
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        // while loop with ‘left’ being less than or equal to ‘right’
        while (left <= right) {
            let pivot = Math.floor((left + right) / 2);
        // if isBadVersion(i) outputs true, than return pivot
            if (isBadVersion(pivot) == true && isBadVersion(pivot-1) == false) {
                return pivot;
            }
            if (isBadVersion(pivot) == false) left = pivot + 1;
            if (isBadVersion(pivot) == true ) right = pivot - 1;
        }
    };
};

