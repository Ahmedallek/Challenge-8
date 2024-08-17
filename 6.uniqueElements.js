function uniqueElements(array1, array2) {

    const combinedArray = [...array1, ...array2];

    const uniqueArray = [...new Set(combinedArray)];
    return uniqueArray;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const result = uniqueElements(array1, array2);
console.log(result)