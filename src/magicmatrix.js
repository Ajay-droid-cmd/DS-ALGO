// To find given matrix is a Magic Matrix 
function isMagicMatrix(matrix,N) {
    let sum1=0,sum2=0;
    for (let i=0; i <N;i++){
        sum1+=sum1+ matrix[i][i]
        sum2+=sum2+ matrix[i][N-i-1]
    } if(sum1 != sum2)
        return false
    
        
        for (let i= 0; i <N;i++){
            let row=0,col=0;
            for(let j=0; j <N;j++){
                row += matrix[i][j]
                
                col += matrix[i][j]
            }
            if(row != col || col != sum1){
                return false
            }
        }
        return true;
}

let matrix =[[ 2, 7, 1 ],
            [ 9, 5, 1 ],
            [ 4, 3, 8 ]];

if(isMagicMatrix(matrix)){
    console.log("Its Magic Matrix")
} else {
    console.log("its not magic matrix")
}