/**
 * _.dropWhile(array, [predicate=_.identity])
 * Creates a slice of array excluding elements dropped from the beginning. 
 * Elements are dropped until predicate returns falsey. 
 * The predicate is invoked with three arguments: (value, index, array).
 * 
 * Arguments
  array (Array): The array to query.
  [predicate=_.identity] (Function): The function invoked per iteration.
  Returns
  (Array): Returns the slice of array.

 */
 

  function dropWhile(array, predicate) {
    const pred = convertPredicate(predicate);
    
    for (let i = 0; i < array.length; i++) {
      if (!pred(array[i])) {
        return array.slice(i);
      }
    }
    return [];
  }
  
  function convertPredicate(predicate) {
    if (typeof predicate === 'function') {
      return predicate;
    }
    if (Array.isArray(predicate)) {
      const [prop, value] = predicate;
      return (obj) => obj[prop] === value;
    }
    if (typeof predicate === 'object') {
      return (obj) => Object.keys(predicate).every(key => obj[key] === predicate[key]);
    }
    if (typeof predicate === 'string') {
      return (obj) => Boolean(obj[predicate]);
    }
    return () => false;
  }
  
  // 테스트
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  
  console.log(dropWhile(users, function(o) { return !o.active; }));
  // => [ { user: 'pebbles', active: true } ]
  
  console.log(dropWhile(users, { 'user': 'barney', 'active': false }));
  // => [ { user: 'fred', active: false }, { user: 'pebbles', active: true } ]
  
  console.log(dropWhile(users, ['active', false]));
  // => [ { user: 'pebbles', active: true } ]
  
  console.log(dropWhile(users, 'active'));
  // => [ { user: 'pebbles', active: true } ]