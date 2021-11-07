// Function to Rotate the given array around
function Rotate(arr,n){
    let x = arr[n-1];
    console.log(n-1)
    for (let i = n-1; i >0; i--)
        arr[i] = i;
      
        return arr;
}

let arr=[0,1,2,3,4,5];
let n = arr.length;
console.log(Rotate(arr,n));