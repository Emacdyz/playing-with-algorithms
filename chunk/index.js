// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Solution 1
function chunk(array, size) {
    let arrayLength = array.length;
    let tempArray = [];
    
    for (i = 0; i < arrayLength; i += size) {
        myChunk = array.slice(i, i + size);
        tempArray.push(myChunk);
    }
    return tempArray;
}

console.log(chunk([1, 2, 3, 4], 2))

module.exports = chunk;
