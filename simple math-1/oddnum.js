function oddnum(N){
    let arr=[];
    for(let i=0;i<=N;i++){
        if(i%2!=0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(oddnum(10))