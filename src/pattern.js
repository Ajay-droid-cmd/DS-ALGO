//Print patter and returns it in an array
let x=5;
let str =[];
for(let i=1; i<=x;i++){
    str[i-1] = '';
    for(let j=1; j<=i;j++){
        str[i-1] +='*';
    }
    console.log(str)
}