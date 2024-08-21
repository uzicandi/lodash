/**
 * _.head(array)
 * 
 * Gets the first element of array.
 * 
 * Arguments
array (Array): The array to query.
 */



const head = (array) => {
  return array[0];
};

console.log(head([1,2,3])); // 1
console.log(head([])); // undefined