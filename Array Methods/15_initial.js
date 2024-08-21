/**
 * _.initial(array)
 * Gets all but the last element of array.
 * 
Arguments
array (Array): The array to query.
Returns
(Array): Returns the slice of array.
 */

const initial = (array) => {
  return array.slice(0, array.length -1);
}

console.log(initial([1,2,3]));