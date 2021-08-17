// To add two matrix
function addMatrix(a, b) {
  let result = [];
  result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = new Array(a[i].length);
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = a[i][j] + b[i][j];
    }
  }
  return result;
}

let a = [
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
let b = [
  [1, 2, 6],
  [4, 5, 9],
  [7, 8, 5],
];

console.log(addMatrix(a, b));
