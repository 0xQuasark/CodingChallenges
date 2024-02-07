// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

// sample input = [1, 2, 3, 5, 6, 8, 9]

// sample output = [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
  // Write your code here.
  let answer = []

  for (number of array) {
    answer.push(number * number)
  }

  answer.sort((a, b) => a - b);

  return answer;
}

let input = [1, 2, 3, 5, 6, 8, 9]

console.log( sortedSquaredArray(input))

// time: O(nlog(n))
// space: O(n)
//
