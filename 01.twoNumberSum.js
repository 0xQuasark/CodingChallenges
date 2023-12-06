// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// Sample Input:
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10



// Sample Output:
// [-1, 11] // the numbers could be in reverse order

function twoNumberSumLeftRight(numbers, target) {
  // O(n log n) time, O(1) space
  numbers.sort((a, b) => a - b);    // how we sort matters
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let currentSum = numbers[left] + numbers[right];
    console.log('current sum, left, right', currentSum, numbers[left], numbers[right])
    if (currentSum === target) {
      return [numbers[left], numbers[right]]
    } else if ( currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

function twoNumberSumHash(numbers, target) {
  // O(n) time, O(n) space
  let map = new Map();
  for (number of numbers) {
    map.set(number, true)  // this sets map value to the number of times it appears in an array
  }

  for (number of numbers) {
    let targetNumber = target - number;
    if (map.has(targetNumber) && targetNumber !== number) { // to prevent it checking itself
      return [number, targetNumber]
    }
  }
  return []
}


function twoNumberSum(numbers, target) {
// Time: O(n^2) due to two loops
// Space: O(1)

  let answer = []
  if (!numbers.length) return answer;   // edge case of empty array being passed
  // I'm assuming that there's nothing but numbers coming in the array

  for (let i = 0; i < numbers.length - 1; i++) {
    let j = i + 1;

    while (j < numbers.length) {
      if (numbers[i] + numbers[j] === target) {
        // success, and we assume there's only one answer as per question
        answer.push(numbers[i], numbers[j]);
        return answer;
      }

      j++;
    }
  }
  // if we're here and nothing has triggered, then there's no applicable sum
  console.log('nothing')
  return answer;


}

const input = [3, 5, -4, 8, 11, 1, -1, 6, -1, 7]
const targetSum = 10

const answer = twoNumberSumLeftRight(input, targetSum);
console.log(answer)