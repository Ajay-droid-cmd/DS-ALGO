// To Calculate the diagonal sum of matrix 

function diagonalSum(n,mat){
    let digisum=0;
    for(let i=0;i<n ; i++){
        for(let j=0;j<n;j++){
            if(mat[i]==mat[j]){
                digisum += mat[i][j];
            }
        }
    }
    return digisum;
}

// Driver code 

let mat = [ [1,2,3,5],
            [7,8,5,6],
            [5,6,6,9],
            [1,5,2,9]];
let n =4
console.log(diagonalSum(n,mat))