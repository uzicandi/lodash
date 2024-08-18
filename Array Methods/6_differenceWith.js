/**
 * _.differenceWith(array, [values], [comparator])
 * 
 * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. 
 * The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
 * 
Arguments
array (Array): The array to inspect.
[values] (...Array): The values to exclude.
[comparator] (Function): The comparator invoked per element.

Returns
(Array): Returns the new array of filtered values.

differenceBy: 각 객체의 특정 속성만  비교. 
differenceWith: 함수를 사용하여 객체 전체를 비교
 */


const differenceWith = (array, values, comparator) => {
  // 1. array가 null이나 undefined인 경우를 체크하고, 그럴 경우 빈배열을 반환한다.

  if(array == null) {
    return [];
  }

  // 2. values가 배열이 아닌 경우, 배열로 변환한다. 

  if(!Array.isArray(values)) {
    values = [values];
  }

  // 3. array.filter() 메소드를 사용하여 array의 각 요소를 순회한다.

  // 4. values 배열의 모든 요소와 comparator 함수를 사용하여 비교한다 

  // 5. some() 메소드를 사용하여 values 배열에 일치하는 요소가 있는지 확인한다. 일치하는 요소가 없는 경우에만 결과 배열에 포함시킨다.

  return array.filter(arrVal => !values.some(othVal => comparator(arrVal, othVal)));


  
}

const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
const others = [{ 'x': 1, 'y': 2 }];
const isEqual = (objA, objB) => {
  return objA.x === objB.x && objA.y === objB.y;
};
console.log(differenceWith(objects, others, isEqual)); // isEqual 은 객체간 깊은 비교를 수행하는 비교함수 
// array에서 others에 없는 요소만 반환된다.

// [ { x: 2, y: 1 } ]
