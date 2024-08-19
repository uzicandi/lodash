/**
 * _.dropRight(array, [n=1])
 * 
 * Creates a slice of array with n elements dropped from the end.
 * 
 * Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
 * Returns
(Array): Returns the slice of array.
 * 
 */

function dropRight(array, num) {
  // 배열의 끝에서 지정된 수만큼 제거한다

  /**
   * 1. 인자가 없으면 마지막 요소 하나만 제거한다 
   * 
   * 2. 지정된 수만큼 끝에서부터 요소를 제거한다
   * 
   * 3. 배열 길이보다 큰 수가 주어지면 빈 배열을 반환한다.
   * num >= array.length
   * 
   * 4. 0이 주어지면 원래 배열을 그대로 반환한다 
   * array.slice(0, -num)
   * 음수 인덱스는 배열의 끝에서부터의 위치를 나타낸다.
   * 
   */

  
  // if(num == null) return array.slice(0, array.length -1);
  // if(num >= array.length) return [];
  // if(num === 0) return array;
  // return array.slice(0, -num);

  if(num === 0) return array;
  
  const count = num == null ? 1 : num;
  return count >= array.length ? [] : array.slice(0, -count);

}



console.log(dropRight([1, 2, 3]));
// => [1, 2]
 
console.log(dropRight([1, 2, 3], 2));
// => [1]
 
console.log(dropRight([1, 2, 3], 5));
// => []
 
console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]