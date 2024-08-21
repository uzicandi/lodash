/**
 * _.indexOf(array, value, [fromIndex=0])
 * 
 * Arguments
array (Array): The array to inspect.
value (*): The value to search for.
[fromIndex=0] (number): The index to search from.

Returns
(number): Returns the index of the matched value, else -1.
 *
 */

const indexOf = (array, value, fromIndex) => {
  return array.indexOf(value, fromIndex);
}

console.log(indexOf([1, 2, 1, 2], 2)); // 1

console.log(indexOf([1, 2, 1, 2], 2, 2)); // search from the 'from index' => 3