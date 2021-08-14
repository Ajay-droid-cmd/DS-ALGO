//Function to find the quried element in the matrix 

function element(arr,n,q){
    for(let i=0;i<n;i++){
        if(arr[i]== q){//checks weather the number is present in the array
            return i//retunrns the index
        }
    }
    return -1
  
}
let arr = [4,8,9,3,5,5,4,7,5];
let n=arr.length;
let q=5;
console.log(element(arr,n,q))

