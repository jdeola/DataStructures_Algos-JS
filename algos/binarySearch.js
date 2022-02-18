// The time complexity is O(log N).

// A sorted list of 64 elements will take at most log2(64) = 6 comparisons.

// Without any knowledge about the ordering, we would resort to a linear search taking O(N) time.


const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    
    while (right > left) {
      const indexToCheck = Math.floor((left + right) / 2);
      const checking = arr[indexToCheck];
      console.log(indexToCheck);
    
      if (checking === target) {
        return indexToCheck;
      } else if (checking < target) {
        left = indexToCheck + 1;
      } else {
        right = indexToCheck;
      }
    }
    
    return null;
  }
  
  const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
  const target = 41;
  
  targetIndex = binarySearch(searchable, target);
  
  console.log(`The target index is ${targetIndex}.`);
  
  module.exports = binarySearch;