/**
 * _.intersectionBy([arrays], [iteratee=_.identity])
 * 
 * This method is like _.intersection except that it accepts iteratee 
 * which is invoked for each element of each arrays 
 * to generate the criterion by which they're compared. 
 * The order and references of result values are determined by the first array. 
 * The iteratee is invoked with one argument:(value).
 * 
 * 
Arguments
  [arrays] (...Array): The arrays to inspect.
  [iteratee=_.identity] (Function): The iteratee invoked per element.
Returns
  (Array): Returns the new array of intersecting values.
 */


  const intersectionBy = (...args) => {
    console.log({
      args
    })
    if (args.length < 2) return [];
  
    // 마지막 인자를 iteratee로 사용하고, 나머지는 arrays로 사용
    const arrays = args.slice(0, -1);
    const iteratee = args[args.length - 1];

    // iteratee가 문자열인 경우 해당 속성을 반환하는 함수로 변환 
    const iterateeFunc = typeof iteratee === 'string'
    ? (obj) => obj[iteratee]
    : (typeof iteratee === 'function' ? iteratee : (val) => val);

    // 첫 번째 배열을 기준으로 시작
    const firstArray = arrays[0];
    const restArrays = arrays.slice(1);

    // 첫 번째 배열의 각 요소에 대해 iteratee를 적용하고 결과를 맵으로 저장
    const baseMap = new Map(
      firstArray.map(item => [JSON.stringify(iterateeFunc(item)), item])
    );

    // 나머지 배열들에 대해 교집합 계산
    restArrays.forEach(array => {
      const currentMap = new Map();
      array.forEach(item => {
        const key = JSON.stringify(iterateeFunc(item));
        if (baseMap.has(key)) {
          currentMap.set(key, baseMap.get(key));
        }
      });
      // baseMap을 현재 교집합으로 업데이트
      baseMap.clear();
      currentMap.forEach((value, key) => baseMap.set(key, value));
    });

    // 최종 결과 반환
    return Array.from(baseMap.values());
  };



  console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [2.1]
  console.log(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')) // [{ 'x': 1 }]