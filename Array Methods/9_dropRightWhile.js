/**
 * _.dropRightWhile(array, [predicate=_.identity])
 * 
 * Creates a slice of array excluding elements dropped from the end. 
 * Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
 * 
Arguments
array (Array): The array to query.
[predicate=_.identity] (Function): The function invoked per iteration.
Returns
(Array): Returns the slice of array.
 */


  // 1. 배열의 끝에서부터 시작하여 주어진 조건을 만족하는 요소들을 제거
  // 2. 조건을 만족하지 않는 요소를 만나면 그 지점에서 멈추고, 남은 요소들로 새로운 배열을 반환
  // 3. 원본 배열은 변경되지 않는다.


  // 1) 각 조건에 맞는 유틸리티 함수를 만든다.
  const isObject = (value) => typeof value === 'object' && value !== null;
  const isArray = Array.isArray;
  const isFunction = (value) => typeof value === 'function';
  const isString = (value) => typeof value === 'string';

  // 2) matches, matchesProperty, property 함수들을 구현하여 lodash의 단축 표기법을 지원한다.

  /**
   * 함수인 경우 그대로 사용
   * 객체인 경우 Matches 함수 사용 
   * 길이가 2인 배열인 경우 MatchesProperty 함수 사용 
   * 문자열인 경우 property 함수 사용 
   * 그 외의 경우 항상 true를 반환하는 함수 사용 
   */

  function matches(source) {
    return (object) => {
      for (let key in source) {
        if (object[key] !== source[key]) {
          return false;
        }
      }
      return true;
    };
  }

  function matchesProperty(path, srcValue) {
    return (object) => {
      return object[path] === srcValue;
    };
  }

  function property(path) {
    return (object) => {
      return object[path];
    };
  }

  // 3) iteratee 함수는 주어진 predicate의 타입에 따라 적절한 함수를 반환한다.

  function iteratee(predicate) {
    if (isFunction(predicate)) {
      return predicate;
    }
    if (isObject(predicate) && !isArray(predicate)) {
      return matches(predicate);
    }
    if (isArray(predicate) && predicate.length === 2) {
      return matchesProperty(predicate[0], predicate[1]);
    }
    if (isString(predicate)) {
      return property(predicate);
    }
    return (value) => !!value;
  }

  // 4) dropRightWhile 함수는 iteratee를 사용하여 predicate 함수를 생성하고, 배열의 끝에서부터 이 함수를 적용한다.


  function dropRightWhile(array, predicate) {
    if (array == null || array.length === 0) {
      return [];
    }

    const func = iteratee(predicate);
    let index = array.length;

    // 5) 조건을 만족하지 않는 첫번째 요소를 찾으면 루프를 종료하고, 해당지점까지의 배열을 반환한다.

    while (index-- && func(array[index], index, array));

    return array.slice(0, index + 1);
  }
  


  var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  console.log(dropRightWhile(users, function(o) { return !o.active; }));
  // => objects for ['barney']
  
  // The `_.matches` iteratee shorthand.
  console.log(dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
  // => objects for ['barney', 'fred']
  
  // The `_.matchesProperty` iteratee shorthand.
  console.log(dropRightWhile(users, ['active', false]));
  // => objects for ['barney']
  
  // The `_.property` iteratee shorthand.
  console.log(dropRightWhile(users, 'active'));
  // => objects for ['barney', 'fred', 'pebbles']