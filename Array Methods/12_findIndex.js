/**
 * _.findIndex(array, [predicate=_.identity], [fromIndex=0])
 * 
 * This method is like _.find except that it returns the index of the first element predicate returns truthy 
 * for instead of the element itself.
 * 
 * 
 * Arguments
array (Array): The array to inspect.
[predicate=_.identity] (Function): The function invoked per iteration.
[fromIndex=0] (number): The index to search from.
 * Returns
(number): Returns the index of the found element, else -1.
 */

const matchFunction = (source) => {
  if(typeof source === 'function') {
    return source;
  }
  if(Array.isArray(source)) {
    const [prop, value] = source;
    return (obj) => obj[prop] === value;
  }
  if(typeof source === 'object' && source !== null) {
    return (obj) => Object.keys(source).every(key => obj[key] === source[key]);
  }
  if(typeof source === 'string') {
    return (obj) => Boolean(obj[source]);
  }
  return () => true;
}

function findIndex(array, predicate, fromIndex = 0) {
  const func = matchFunction(predicate);
  
  return array.findIndex(item => func(item));
}


var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
console.log(findIndex(users, function(o) { return o.user == 'barney'; }));
// => 0
 
// The `_.matches` iteratee shorthand.
console.log(findIndex(users, { 'user': 'fred', 'active': false }));
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
console.log(findIndex(users, ['active', false]));
// => 0
 
// The `_.property` iteratee shorthand.
console.log(findIndex(users, 'active'));
// => 2