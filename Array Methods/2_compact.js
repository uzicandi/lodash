/**
 * _.compact(array)
 * 
 * Creates an array with all falsey values removed. 
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * 
 * Arguments:  
 * array (Array): The array to compact.
 * 
 * Returns: (Array): Returns the new array of filtered values.
 */


const compact = (array) => {
  const compacted = [];

  // 1. array의 길이만큼 반복문을 돌린다.
  // 2. array의 요소가 true일 경우 compacted에 push한다.

  while(array.length) {
    const value = array.shift();
    if(value) {
      compacted.push(value);
    }
  }
  return compacted;
}


console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]