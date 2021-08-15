//To find weather the given matrix is a magic or not
//function to find diagonal
function digimat(mat) {
  let n = mat.length;
  var sum1 = 0;
  var sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = sum1 + mat[i][i];
    sum2 = sum2 + mat[i][n - 1 - i];
  }
  if (sum1 != sum2) return "Not a magic matrix";

  for (let i = 0; i < n; i++) {
    let row = 0;
    let col = 0;
    for (let j = 0; j < n; j++) {
      row += mat[i][j];
      col += mat[j][i];
    }
      if (row != col || col != row) return "Not a col magic matrix";
    
  }
  return " Its a match";
}

// Driver function
let mat = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
];

console.log(digimat(mat));

// Geeks for Geeks methoed
// Returns true if mat[][] is magic
// square, else returns false.
/*function isMagicSquare(mat)
{
    var N = mat.length
    // sumd1 and sumd2 are the sum of the two diagonals
    var sumd1 = 0,sumd2=0;
    for (var i = 0; i < N; i++)
    {
        // (i, i) is the diagonal from top-left -> bottom-right
        // (i, N - i - 1) is the diagonal from top-right -> bottom-left
        sumd1 = sumd1 + mat[i][i];
        sumd2 = sumd2 + mat[i][N-1-i];
    }
    // if the two diagonal sums are unequal then it is not a magic square
    if(sumd1!=sumd2)
        return false;
 
     
    for (var i = 0; i < N; i++) {
        var colSum = 0;
        var rowSum = 0;   
        for (var j = 0; j < N; j++)
        {
            rowSum += mat[i][j];
            colSum += mat[j][i];
        }
        if (rowSum != colSum || colSum != sumd1)
            return false;
    }
    return true;
}
 
// driver program to
// test above function
var mat = [[ 8,1,6],
           [ 3,5,7],
           [ 4,9,2]];
 
if (isMagicSquare(mat))
    console.log( "Magic Square");
else
   console.log( "Not a magic Square");*/
