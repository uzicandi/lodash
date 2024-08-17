/**
 * Array Methods
 * 
 * _.chunk(array, [size=1])
 * Creates an array of elements split into groups the length of size. 
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * Arguments
 * array (Array): The array to process.
 * [size=1] (number): The length of each chunk
 * 
 * Returns
 * (Array): Returns the new array of chunks.
 * 
 *  */ 



const chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    // 1. chunked에 size만큼의 배열을 넣어야 한다. 
    // 2. size만큼의 배열을 자르려면 slice를 사용하고, index와 index + size로 범위를 잡는다.
    // 2. index에 size를 더해줘서 다음 배열의 시작점을 정해준다.

    while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
    }
    return chunked;
};


console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]