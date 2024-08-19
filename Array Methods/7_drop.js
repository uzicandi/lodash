/**
 * _.drop(array, [n=1])
 * 
 * Creates a slice of array with n elements dropped from the beginning.
 * 
Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
Returns
(Array): Returns the slice of array.
 */


function drop(array, num) {
  const newNum = num == null ? 1 : num;
  
  return array.slice(newNum, array.length);
  
}

console.log(drop([1, 2, 3]));
// => [2, 3]
 
console.log(drop([1, 2, 3], 2));
// => [3]
 
console.log(drop([1, 2, 3], 5));
// => []
 
console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]



/**
 * 개선하기 
 * 
 * 1. newNum을 Math.max(0, num || 0)로 설정하면 음수 입력도 처리할 수 있다.
 * 2. slice는 두번째 인자가 없으면 배열의 끝까지 슬라이스 한다 
 *  
 * Math.max(0, num || 0)는 ?
 * num || 0 = num이 falsy 값(undefined, null, 0, '', NaN 등)이면, 0을 반환,
 * num이 truthy 값이면, num 자체를 반환
 * 
 * Math.max : 0과 (num || 0)의 결과 중 큰 값
 * num이 양수일 경우: num이 반환
 * num이 0이나 음수일 경우: 0이 반환
 * 
 */

function _drop(array, num) {
  return array.slice(Math.max(0, num === undefined ? 1 : num));
}

console.log(_drop([1, 2, 3]));
// => [2, 3]
 
console.log(_drop([1, 2, 3], 2));
// => [3]
 
console.log(_drop([1, 2, 3], 5));
// => []
 
console.log(_drop([1, 2, 3], 0));
// => [1, 2, 3]

console.log(_drop([1, 2, 3], -1));
// => [1, 2, 3]
