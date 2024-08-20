/**
 * _.fill(array, value, [start=0], [end=array.length])
 * 
 * Fills elements of array with value from start up to, but not including, end.
 * 
 * 
Arguments
array (Array): The array to fill.
value (*): The value to fill array with.
[start=0] (number): The start position.
[end=array.length] (number): The end position.

Returns
(Array): Returns array.
 */

const fill = (array, value, start, end) => {

  // 1. array에 value로 채운다.

  return array.fill(value, start, end)

  // 2. start, end는 value가 채워질 위치?
  
};

var array = [1, 2, 3];
 
console.log(fill(array, 'a'));
// => ['a', 'a', 'a']
 
console.log(fill(Array(3), 2));
// => [2, 2, 2]
 
console.log(fill([4, 6, 8, 10], '*', 1, 3));
// => [4, '*', '*', 10]