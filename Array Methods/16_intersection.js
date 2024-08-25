/**
 * _.intersection([arrays])
 * 
 * Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. 
 * The order and references of result values are determined by the first array.
 * 
Arguments
  [arrays] (...Array): The arrays to inspect.
Returns
  (Array): Returns the new array of intersecting values.
 * 
 */

const _intersection = (...array) => {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if(array[i][j] === array[j][i]) {
        return [array[i][j]];
      }
    }
  }
}

console.log(_intersection([2,1], [2,3]));
console.log(_intersection([2, 1], [2, 3], [2, 4])); // [2]
console.log(_intersection([1, 2, 3], [3, 4, 5], [3, 6, 7])); // [3]
console.log(_intersection([1, 2], [3, 4])); // []


/**
 * 현재 구현의 문제점:

반환 값: 현재 코드는 첫 번째 일치하는 값만 반환하고 있습니다. 
_.intersection은 모든 배열에 공통으로 존재하는 모든 값을 반환해야 합니다.
비교 로직: 현재 구현은 배열의 인덱스를 기준으로 비교하고 있어, 실제 교집합을 찾지 못합니다.
SameValueZero 비교: JavaScript의 === 연산자는 SameValueZero 비교와 거의 동일하지만, NaN 처리에서 차이가 있습니다.

개선된 구현의 특징:

Set 객체를 사용하여 효율적으로 중복을 제거하고 교집합을 찾습니다.
첫 번째 배열을 기준으로 하여 순서와 참조를 유지합니다.
모든 입력 배열에 대해 교집합을 찾습니다.
빈 입력에 대해 빈 배열을 반환합니다.

이 구현은 lodash의 _.intersection 함수와 유사하게 동작합니다. 다만, lodash의 구현은 더 최적화되어 있고 엣지 케이스 처리가 더 견고할 수 있습니다.
추가로 고려할 사항:

NaN 값 처리 (SameValueZero 비교에서는 NaN은 자기 자신과 같다고 간주)
성능 최적화 (큰 배열에 대한 처리)
타입 체크 및 에러 처리
 */


// 배열에 특정 값이 있는가를 확인할 때는 Set의 has를 쓰자! 
// Set의 메소드  has, delete
const intersection = (...arrays) => {
  if (arrays.length === 0) return [];

  // 첫번째 배열을 기준으로 Set 생성 
  const firstSet = new Set(arrays[0]);
  console.log({firstSet});

  // 나머지 배열들과 교집합 찾기 
  for (let i = 1; i < arrays.length; i++) {
    const currentSet = new Set(arrays[i]);
    for (const item of firstSet) {
      if (!currentSet.has(item)) {
        firstSet.delete(item);
      }
    }
  }
  
  return Array.from(firstSet);
}

console.log(intersection([2,1], [2,3]));
console.log(intersection([2, 1], [2, 3], [2, 4])); // [2]
console.log(intersection([1, 2, 3], [3, 4, 5], [3, 6, 7])); // [3]
console.log(intersection([1, 2], [3, 4])); // []

