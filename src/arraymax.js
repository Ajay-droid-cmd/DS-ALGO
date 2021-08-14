// To find the largest number in the array
function getMax(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] >max  ){
            max = arr[i];
        }
    }
    return max;
}
let arr = [9584,84894,2654,79422,4842];
console.log(getMax(arr));
