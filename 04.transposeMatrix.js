// Write a function
// that returns the transpose of the matrix.
// The transpose of a matrix is a flipped version of the original matrix across
// its main diagonal (which runs from top-left to bottom-right); it switches
// the row and column indices of the original matrix.
// https://www.algoexpert.io/questions/transpose-matrix
// looking in to this 


function transposeMatrix(input) {

 // Time complexity: O(w * h) 
 // Space complexity: O(w * h) 

  let answer = []
  let i = 0;
  let j = 0;
  let columnCount = input[i].length // i.e. 3
  let transposedRow = []

  while (j < columnCount) {
    for (let i = 0; i < input.length; i++) {
        transposedRow.push(input[i][j])
    }

    j++;
    answer.push(transposedRow);
    transposedRow = [];
}

  return answer;
}

let input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

input = [
  [1, 2],
  [3, 4],
  [5, 6]
];


let answer = transposeMatrix(input)
console.log(answer)
