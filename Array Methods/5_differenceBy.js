/**
 * 
 * _.differenceBy(array, [values], [iteratee=_.identity])
 * 
 * This method is like _.difference except that it accepts iteratee 
 * which is invoked for each element of array and values to generate the criterion by which they're compared. 
 * The order and references of result values are determined by the first array. The iteratee is invoked with one argument:(value).
 * 
 * 
 * Arguments
 * array (Array): The array to inspect.
 * [values] (...Array): The values to exclude.
 * [iteratee=_.identity] (Function): The iteratee invoked per element.
 * 
 * Returns
 * (Array): Returns the new array of filtered values.
 */



const differenceBy = (array, values, iteratee) => {
  
  // 1. iteratee 함수 처리
  // 1) 함수인 경우 2) 문자열인 경우 3) iteratee가 제공되지 않은 경우
  const iterateeFunc = typeof iteratee === 'function' ? iteratee :
                       typeof iteratee === 'string' ? obj => obj[iteratee] : val => val;

  // 2. values를 평탄화하고 iteratee 적용 
  const excludeSet = new Set(values.flat().map(iterateeFunc));

  // 3. array의 각 요소에 iteratee를 적용하고 결과가 excludeSet에 없는 요소만 필터링 
  return array.filter(item => !excludeSet.has(iterateeFunc(item)));
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [ 1.2 ]
console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')); // [{ 'x' : 2 }]
console.log(differenceBy([1, 2, 3], [[2, 3], [4]], val => val));