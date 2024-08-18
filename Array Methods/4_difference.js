/**
 * _difference(array, [values])
 * 
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
 * The order and references of result values are determined by the first array.
 * 
 * Arguments
 * array (Array): The array to inspect.
 * [values] (...Array): The values to exclude.
 * 
 * Returns
 * (Array): Returns the new array of filtered values.
 */


const difference = (array, ...values) => {
    // array의 값들을 하나씩 확인해서
    // values에 있는지 확인하고 
    // 있으면 값을 리턴한다.
    
    return array.filter((item) => {
      let include = !values.flat().includes(item);
      if(include) return [item];
    });
};


/**
 * 개선하기
 * 
 * 1. Set 사용 
 * values의 모든 요소를 하나의 Set으로 변환했다. 이는 검색 성능을 크게 향상시킨다.
 * 배열의 includes 메소드는 O(n) 시간 복잡도를 가지지만 
 * Set의 has 메소드는 O(1) 시간 복잡도를 가진다.
 * 
 * 
 * 2. 불필요한 조건문 제거하기 
 * 
 */


const _difference = (array, ...values) => {
  const excludeSet = new Set(values.flat());

  return array.filter(item => !excludeSet.has(item));
}


console.log(_difference([2, 1], [2, 3])); // [1]

console.log(_difference([2, 1, 2, 3], [3, 4], [2])); // [1]
