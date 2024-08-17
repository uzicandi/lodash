/**
 * _.concat(array, [values])
 * 
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 
 * Arguments
 * array (Array): The array to concatenate.
 * [values] (...*): The values to concatenate.
 * 
 * Returns
 * (Array): Returns the new concatenated array.
 */

const concat = (array, ...values) => {

  // 1. array에 values의 요소를 push한다.
  // 2. array를 flat한다.

  // array.push(...values);
  // return array.flat();

  // 개선 

 /**
  * 1. array가 비배열인 경우의 문제
  * 2. array를 복사하지 않은 경우
  * - 다른 부분의 코드에서 array를 사용할 수 있기 때문에 array를 복사해서 사용한다.
  * - 불변성: 불변 데이터 구조를 사용하면 어플리케이션의 상태관리가 더 쉬워진다.
  * - 함수형 프로그래밍: 입력을 변경하지 않는 함수는 순수함수(pure function)의 특성을 가진다. 이는 코드의 테스트와 디버깅을 용이하게 한다.
  * - 병렬처리: 불변 데이터 구조는 여러 스레드에서 데이터를 공유할 때 데이터를 복사하지 않고 읽기만 할 수 있기 때문에 병렬처리가 가능하다.
  * - 상황에 따라 성능상의 이유로 원본 배열을 직접 수정하는 것이 더 효율적일 수 있다.
  * - 하지만 일반적으로 라이브러리 함수나 유틸리티 함수는 예측 가능하고 부작용 없이 동작하는 것이 더 안전하고 유지보수하기 쉽다.
  * 3. 
  */

  const copied = Array.isArray(array) ? array.slice() : [array];
  copied.push(...values);
  return copied.flat();

  
};

console.log(concat([1], 2, [3], [[4]])); // [1, 2, 3, [4]]
console.log(concat(1, 2, [3], [[4]])); // [1, 2, 3, [4]]