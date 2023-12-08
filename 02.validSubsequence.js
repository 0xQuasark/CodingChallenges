// Problem Statement:
// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers [1, 3, 4] form a subsequence of the array
// [1, 2, 3, 4], and so do the numbers [2, 4]. Note
// that a single number in an array and the array itself are both valid
// subsequences of the array.

// Sample Input:
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]

// Sample Output:
// true


function TWOisValidSubsequence(array, sequence) {
  let map = new Map();
  for (number of array) {
    if (!map.has(number)) {
      map.set(number, 1);
    } else {
      let count = map.get(number);
      count++;
      map.set(number, count)
    }
  }

  for (number of sequence) {
    let value = map.get(number);
    if (!value) { return false }
    
  }
}

function ONEisValidSubsequence(array, sequence) {
  let map = new Map();
  for (number of sequence) {
    for (let i = 0; i < array.length; i++) {
      if (number === array[i]) {
        if (map.has(number)) {
          let count = map.get(number)
        }
      }
    }
  }
  return true;
}

function isValidSubsequence(array, sequence) {
  let idx = 0;
  let count = 0;
  for (number of sequence) {
    while (idx < array.length) {
      if (number === array[idx]) {
        idx++;
        count++;
        break;
      }
      idx++;
    }
  }
  
  return count === sequence.length
  // if (count === sequence.length) {
  //   return true;
  // } else {return false}
}

// Complexity:
// Time: O(n), had to loop through max once of the array
// Space: 0(1), we're not storing anything except pointers

let array = [5, 1, 22, 25, 6, -1, 8, 10]
esequence = [1, 6, -1, -1]

let answer = isValidSubsequence(array, sequence)


console.log(answer);
