// To find the mean to 5 decimal places
console.log("Print the mean")
let n=6;
let a=[2.2,1,3,1.9,2.4,1.7]
let sum = 0;
for (let i=0; i<n; i++){
    sum += a[i]
}
let res = parseFloat(sum / n); //mean
console.log(res.toFixed(5)); // returns to 5 decimal places